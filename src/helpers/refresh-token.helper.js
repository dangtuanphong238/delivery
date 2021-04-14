import jwt_decode from 'jwt-decode';
import _ from 'lodash';
import { AppState } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import { logout, requestTokenRefresh } from '../actions/auth.action';
import { getOfferTimeSevirce } from '../api/auth.api';
import { SUCCESS } from '../configs/app.config';
import { store } from '../store/configure-store';
import { getReFreshToken, getToken } from './storage.helper';

export default class RefreshTokenHelper {
  static appState = AppState.currentState;
  // before 3h
  static trigger = 10800000;
  static triggerServertime = 0;
  static async init() {
    AppState.addEventListener('change', this._handleAppStateChange);
    await this.checkToken();
    this.getOfferTime();
  }
  static async getOfferTime() {
    try {
      const result = await getOfferTimeSevirce();
      if (result && result.statusCode === SUCCESS) {
        const time = _.get(result, 'data.time', 0);
        const severTime = new Date(time).valueOf();
        if (_.isNumber(severTime) && severTime > 0) {
          this.triggerServertime = severTime - Date.now();
          return severTime;
        }
      }
      return Date.now();
    } catch (error) {
      return Date.now();
    }
  }

  static async setTimeExpired() {
    try {
      const token = await getToken();
      if (!!token) {
        const { exp } = jwt_decode(token);
        const time = exp * 1000 - this.trigger;
        this.cleanTimeOutIdAndReset(time);
      }
    } catch (error) {}
  }

  static async resetTimeExpired() {
    try {
      const token = await getToken();
      if (!!token) {
        const { exp } = jwt_decode(token);
        //test
        // const time = this.trigger + 20000;
        const offtime = await this.getOfferTime();
        const time = exp * 1000 - offtime;
        if (time < 0) {
          // logout
          this.cleanTimeOutIdAndReset();
          store.dispatch(logout());
        } else if (time <= this.trigger) {
          // refresh
          this.cleanTimeOutIdAndReset(0);
        } else {
          // after newTime
          this.cleanTimeOutIdAndReset(time - this.trigger);
        }
      } else {
        //handle trigger server time
        this.getOfferTime();
      }
    } catch (error) {}
  }

  static _handleAppStateChange = nextAppState => {
    try {
      if (this.appState === 'active' && nextAppState === 'background') {
        this.cleanTimeOutIdAndReset();
      }
      if (this.appState === 'background' && nextAppState === 'active') {
        this.resetTimeExpired();
      }
      this.appState = nextAppState;
    } catch (error) {}
  };

  static async checkToken() {
    try {
      const [accessToken, refreshToken] = await Promise.all([
        getToken(),
        getReFreshToken(),
      ]);
      if (!!accessToken && !!refreshToken) {
        const isRefreshToken = await this.isTokenExpired(refreshToken);
        if (!isRefreshToken) {
          //refeshtoken
          store.dispatch(requestTokenRefresh());
        } else {
          //Logout
          this.cleanTimeOutIdAndReset();
          store.dispatch(logout());
        }
      }
    } catch (error) {
      console.log(
        '🚀 ~ file: refresh-token.helper.js ~ line 53 ~ RefreshTokenHelper ~ checkToken ~ error',
        error,
      );
    }
  }
  static async isTokenExpired(token) {
    try {
      if (!!token) {
        const { exp } = jwt_decode(token);
        if (Date.now() <= exp * 1000) {
          return false;
        }
      }
      return true;
    } catch (error) {
      return true;
    }
  }
  static cleanTimeOutIdAndReset(time) {
    try {
      BackgroundTimer.stopBackgroundTimer();
      if (_.isNumber(time)) {
        if (time === 0) {
          this.checkToken();
        } else {
          BackgroundTimer.runBackgroundTimer(() => this.checkToken(), time);
        }
      }
    } catch (error) {}
  }
  static clean() {
    this.cleanTimeOutIdAndReset();
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
}
