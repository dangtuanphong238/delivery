import RequestHelper from '../helpers/request.helper';
import {
  GET_OFFER_TIME,
  GET_USER_PROFILE_URL,
  LOGIN_URL,
  REFRESH_TOKEN_URL,
  SIGN_OTP_URL,
  SIGN_UP_URL,
  GET_NOTIFICATIONS_URL,
  READ_ONLY_NOTIFICATION_URL,
  READ_ALL_NOTIFICATIONS_URL,
} from './api-url';
import { grant_type_password, grant_type_token } from '../configs/app.config';

export const requestRegisterService = ({ authType, username, deviceToken }) => {
  return RequestHelper.postUrlEncode(SIGN_UP_URL, {
    authType,
    username,
    deviceToken,
  });
};
export const requestLoginService = ({ authType, username, deviceToken }) => {
  return RequestHelper.postUrlEncode(LOGIN_URL, {
    grant_type: grant_type_password,
    authType,
    username,
    deviceToken,
  });
};
export const requestVerifyService = ({
  otp_session_id,
  otp_token,
  username,
  deviceToken,
}) => {
  return RequestHelper.postUrlEncode(SIGN_OTP_URL, {
    grant_type: grant_type_password,
    otp_session_id,
    otp_token,
    username,
    deviceToken,
  });
};
export const requestRefreshTokenService = ({ refreshToken }) => {
  return RequestHelper.postUrlEncode(REFRESH_TOKEN_URL, {
    grant_type: grant_type_token,
    refresh_token: refreshToken,
  });
};

export const getUserProfileService = () => {
  return RequestHelper.get(GET_USER_PROFILE_URL);
};

export const getOfferTimeSevirce = () => {
  return RequestHelper.get(GET_OFFER_TIME);
};
export const getOfferTimeCountDownSevirce = status => {
  return RequestHelper.get(GET_OFFER_TIME, { status });
};

export const getNotificationsService = ({ pageNo, pageLength }) => {
  return RequestHelper.get(GET_NOTIFICATIONS_URL, { pageNo, pageLength });
};

export const readOnlyNotificationService = notifyId => {
  return RequestHelper.put(READ_ONLY_NOTIFICATION_URL(notifyId));
};

export const readAllNotificationsService = () => {
  return RequestHelper.put(READ_ALL_NOTIFICATIONS_URL);
};
