import AsyncStorage from '@react-native-community/async-storage';
import { AppConfig } from '../configs/app.config';

const FCM_TOKEN = 'fcm_token';
const KEY_TOKEN_BEFORE = 'key_token_before';
const APP_LANGUAGE = 'lang';
const KEY_TOKEN = 'access_token' + AppConfig.versionTOKEN;
const REFRESH_TOKEN = 'refresh_token' + AppConfig.versionTOKEN;
const KEY_INTRO = 'show_intro';
const KEY_BRAND = 'current_brand';
const EXPIRES_IN = 'expires_in';

export const saveFCMToken = fCMToken =>
  AsyncStorage.setItem(FCM_TOKEN, fCMToken);

export const getFCMToken = () => {
  return AsyncStorage.getItem(FCM_TOKEN);
};

export const saveKeyToken = key => AsyncStorage.setItem(KEY_TOKEN_BEFORE, key);
export const getKeyToken = () => {
  return AsyncStorage.getItem(KEY_TOKEN_BEFORE);
};

export const saveToken = token => AsyncStorage.setItem(KEY_TOKEN, token);
export const getToken = () => {
  return AsyncStorage.getItem(KEY_TOKEN);
};
export const removeToken = () => AsyncStorage.removeItem(KEY_TOKEN);

export const saveRefreshToken = refreshToken =>
  AsyncStorage.setItem(REFRESH_TOKEN, refreshToken);
export const getReFreshToken = () => {
  return AsyncStorage.getItem(REFRESH_TOKEN);
};
export const removeRefreshToken = () => AsyncStorage.removeItem(REFRESH_TOKEN);

export const saveLanguage = lang => AsyncStorage.setItem(APP_LANGUAGE, lang);
export const getLanguage = () => AsyncStorage.getItem(APP_LANGUAGE);

export const getIntro = () => AsyncStorage.getItem(KEY_INTRO);
export const setIntro = intro => AsyncStorage.setItem(KEY_INTRO, intro);

export const saveBrand = brandCode =>
  AsyncStorage.setItem(KEY_BRAND, brandCode);
export const getBrand = () => AsyncStorage.getItem(KEY_BRAND);
