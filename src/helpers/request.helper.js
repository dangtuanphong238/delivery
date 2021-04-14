import axios from 'axios';
import qs from 'qs';
import { logout } from '../actions/auth.action';
import { hideLoading } from '../actions/loading.action';
import { REFRESH_TOKEN_URL } from '../api/api-url';
import { AppConfig, grant_type_token, SUCCESS } from '../configs/app.config';
import I18n from '../i18n/i18n';
import { store } from '../store/configure-store';
import {
  getReFreshToken,
  getToken,
  saveRefreshToken,
  saveToken,
} from './storage.helper';
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import DialogHelper from './dialog.helper';
import colors from '../theme/colors';
import ImgServerError from '../assets/images/svg/img_server_error.svg';

const configTimeOut = 20000;

const instance = axios.create({
  timeout: configTimeOut,
  maxContentLength: 5 * 1024 * 1024,
  maxBodyLength: 5 * 1024 * 1024,
});

function getCulture() {
  return I18n.locale;
}

const handleRefreshToken = async error => {
  const originalRequest = { ...error.response.config };
  const refreshToken = await getReFreshToken();

  if (originalRequest.url === REFRESH_TOKEN_URL) {
    store.dispatch(logout());
    return Promise.reject(error);
  } else {
    if (!originalRequest._retry) {
      originalRequest._retry = true;
      const params = {
        refresh_token: refreshToken,
        grant_type: grant_type_token,
      };
      const source = axios.CancelToken.source();
      return instance(
        {
          method: 'post',
          url: REFRESH_TOKEN_URL,
          headers: await RequestHelper.getHeaderUrlEncode(),
          data: qs.stringify(params),
          params: { culture: getCulture() },
        },
        { cancelToken: source.token },
      )
        .then(data => data.data)
        .then(async data => {
          if (data && data.statusCode === SUCCESS) {
            const { access_token, refresh_token } = data.data;
            saveToken(access_token);
            saveRefreshToken(refresh_token);
            const refreshRequest = {
              ...originalRequest,
              headers: {
                ...originalRequest.headers,
                Authorization: `Bearer ${access_token}`,
              },
            };

            return instance(refreshRequest);
          } else {
            store.dispatch(logout());
            return Promise.reject(error);
          }
        })
        .catch(e => {
          store.dispatch(logout());
          return Promise.reject(error);
        });
    }
    return Promise.reject(error);
  }
};

instance.interceptors.response.use(
  async response => {
    if (response.data.statusCode === 401) {
      let customError = new Error('Authorization error');
      response.original_status = response.status;
      response.status = response.data.statusCode;
      customError.response = response;
      customError.isAxiosError = true;
      return handleRefreshToken(customError);
    }
    return response;
  },
  error => {
    if (error.response?.status === 408 || error?.code === 'ECONNABORTED') {
      DialogHelper.showConfirmDialog({
        title: I18n.translate('problems_connecting_to_the_server'),
        message: I18n.translate('server_error'),
        color: colors.secondary,
        SVGImage: ImgServerError,
        confirmText: I18n.translate('close'),
      });
    } else if (!error.status) {
      // DialogHelper.showConfirmDialog({
      //   title: I18n.translate('error_due_to_loss_of_network_connection'),
      //   message: I18n.translate('network_error'),
      //   color: colors.secondary,
      //   SVGImage: ImgNetworkError,
      //   confirmText: I18n.translate('close'),
      // });
    }
    store.dispatch(hideLoading());
    return Promise.reject(error);
  },
);

const handleError = async error => {
  //TODO://HANDLE ERROR
  console.log('handleError error', error);
};

const preprocessResponse = data => {
  if (data.statusCode !== SUCCESS) {
    throw {
      response: data,
    };
  }
  return data;
};

export default class RequestHelper {
  static async getHeader() {
    const token = await getToken();
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Platform: Platform.OS,
      Version: DeviceInfo.getVersion(),
      VersionCMS: AppConfig.versionCMS,
      DeviceID: DeviceInfo.getUniqueId(),
      DeviceVersion: DeviceInfo.getSystemVersion(),
      DeviceName: DeviceInfo.getSystemName(),
    };
  }
  static async getHeaderUrlEncode() {
    const token = await getToken();
    return {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
      Platform: Platform.OS,
      Version: DeviceInfo.getVersion(),
      DeviceID: DeviceInfo.getUniqueId(),
      DeviceVersion: DeviceInfo.getSystemVersion(),
      DeviceName: DeviceInfo.getSystemName(),
    };
  }

  static async get(url, params) {
    const header = await this.getHeader();
    const source = axios.CancelToken.source();
    setTimeout(() => {
      source.cancel();
    }, configTimeOut);
    return instance
      .get(url, {
        headers: header,
        params: { ...params, culture: getCulture() },
        paramsSerializer: params => {
          return qs.stringify(params, { arrayFormat: 'repeat' });
        },
        cancelToken: source.token,
      })
      .then(data => {
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        // FIXME do not handle error here
        handleError(e);
        throw e;
      });
  }

  static async post(url, data, additionalHeader = {}) {
    const source = axios.CancelToken.source();
    setTimeout(() => {
      source.cancel();
    }, configTimeOut);
    const headers = await this.getHeader();
    return instance(
      {
        method: 'post',
        url: url,
        headers: { ...headers, ...additionalHeader },
        data: data,
        params: { culture: getCulture() },
      },
      { cancelToken: source.token },
    )
      .then(data => {
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async postUrlEncode(url, data) {
    const source = axios.CancelToken.source();
    setTimeout(() => {
      source.cancel();
    }, configTimeOut);
    return instance(
      {
        method: 'post',
        url: url,
        headers: await this.getHeaderUrlEncode(),
        data: qs.stringify(data),
        params: { culture: getCulture() },
      },
      { cancelToken: source.token },
    )
      .then(data => {
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async put(apiUrl, data) {
    const source = axios.CancelToken.source();
    setTimeout(() => {
      source.cancel();
    }, configTimeOut);
    return instance(
      {
        method: 'put',
        url: apiUrl,
        headers: await this.getHeader(),
        data: data,
      },
      { cancelToken: source.token },
    )
      .then(data => {
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async delete(apiUrl, data) {
    const source = axios.CancelToken.source();
    setTimeout(() => {
      source.cancel();
    }, configTimeOut);
    return instance(
      {
        method: 'delete',
        url: apiUrl,
        headers: await this.getHeader(),
        data: data,
      },
      { cancelToken: source.token },
    )
      .then(data => {
        return data.data;
      })
      .then(data => {
        return preprocessResponse(data);
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }
}

export function getUrlParams(search) {
  let hashes = search.slice(search.indexOf('?') + 1).split('&');
  return hashes.reduce((params, hash) => {
    let [key, val] = hash.split('=');
    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
}
