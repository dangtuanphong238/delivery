import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { appConfig } from '../configs/app.config';
import RequestHelper from './request.helper';

export default class LocationHelper {
  static async getCurrentPosition(handleLocationCallback, firstRequest) {
    try {
      const permissionResult = await LocationHelper.checkPermission();
      LocationHelper.handleResultPermission(
        permissionResult,
        handleLocationCallback,
        firstRequest,
      );
    } catch (error) {
      console.log('TCL: LocationHelper -> getCurrentLocation -> error', error);
    }
  }

  static async checkPermission() {
    if (Platform.OS === 'android') {
      return await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else if (Platform.OS === 'ios') {
      return await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }
  }

  static requestPermission(handleLocationCallback, firstRequest) {
    if (Platform.OS === 'android') {
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
        LocationHelper.handleResultPermission(
          result,
          handleLocationCallback,
          firstRequest,
        );
      });
    } else {
      request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
        LocationHelper.handleResultPermission(
          result,
          handleLocationCallback,
          firstRequest,
        );
      });
    }
  }

  static handleResultPermission(result, handleLocationCallback, firstRequest) {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        if (firstRequest) {
          LocationHelper.requestPermission(handleLocationCallback);
        } else {
          handleLocationCallback('error');
        }
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        Geolocation.getCurrentPosition(
          position => {
            if (position && handleLocationCallback) {
              handleLocationCallback(position);
            }
          },
          error => {
            handleLocationCallback(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        handleLocationCallback('error');
        break;
    }
  }

  static getPlaceDetailsFromGeocode(geo, apiKey) {
    console.log(
      'TCL: LocationHelper -> getPlaceDetailsFromGeocode -> getPlaceDetailsFromGeocode',
    );
    return RequestHelper.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        latlng: `${geo.latitude},${geo.longitude}`,
        key: apiKey || appConfig.googleApiKey,
        language: 'en',
      },
    );
  }
}
