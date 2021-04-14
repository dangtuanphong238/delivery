import firebase from 'react-native-firebase';
import { Platform } from 'react-native';
import { saveFCMToken, getLanguage } from './storage.helper';
import { ifAndroid } from './device.helper';
import rootNavigation from '../navigators/root.navigator';
import { NOTIFICATION_TYPE } from '../configs/app.config';
import { getOrderStatus } from '../components/account/OrderStatus';
import _ from 'lodash';
import strings from '../i10n';
import {
  ACCOUNT_ORDER_DETAILS_SCREEN,
  NOTIFICATION_SCREEN,
  HISTORY_POINTS_SCREEN,
  PROMOTION_SCREEN,
  STORE_SCREEN,
  REWARDS_SCREEN,
} from '../navigators/route-name';

export class FireBaseHelper {
  static async init(updateNotifyHome) {
    this.requestPermission();
    this.getFCMToken();
    this.handleNotification(updateNotifyHome);
    this.handleMessageNotification(updateNotifyHome);
    this.onRefreshToken();
  }
  static joinChannel() {
    //Create the channel
    firebase
      .messaging()
      .subscribeToTopic(ifAndroid() ? 'sw-android' : 'sw-ios');
    const channel = new firebase.notifications.Android.Channel(
      'notification-channel',
      'Notification Channel',
      firebase.notifications.Android.Importance.Max,
    ).setDescription('Notification channel');
    firebase.notifications().android.createChannel(channel);
  }

  static leaveChannel() {
    //Leave channel
    firebase
      .messaging()
      .unsubscribeFromTopic(ifAndroid() ? 'sw-android' : 'sw-ios');
    firebase.notifications().android.deleteChannel('notification-channel');
  }

  static async requestPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // user has permissions
    } else {
      await firebase.messaging().requestPermission();
      // User has authorised
    }
  }

  static async getFCMToken() {
    const token = await firebase.messaging().getToken();
    if (token) {
      saveFCMToken(token);
    } else {
      // Token not found
    }
  }

  static onRefreshToken() {
    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(token => {
      saveFCMToken(token);
    });
  }

  static async handleMessageNotification(updateNotifyHome) {
    this.messageListener = firebase.messaging().onMessage(async message => {
      updateNotifyHome();
      const payload = message._data.payload
        ? JSON.parse(message._data.payload)
        : {};
      const extData = payload.extData ? JSON.parse(payload.extData) : {};

      const notification = new firebase.notifications.Notification()
        .setNotificationId(message._messageId)
        .setTitle(message._data.title)
        .setData(message._data);

      if (payload.image_url) {
        notification.android.setBigPicture(
          payload.image_url,
          '',
          message.data.title,
          message.data.body,
        );
      } else {
        notification.android.setBigText(
          message._data.body,
          message._data.title,
          message._data.body,
        );
      }

      if (!!extData && extData.type === 'order') {
        notification.setBody(
          getOrderStatus({ statusOrder: extData.orderStatus, useString: true }),
        );
      } else {
        notification.setBody(message._data.body);
      }

      if (ifAndroid()) {
        notification.android.setChannelId('notification-channel');
        notification.android.setAutoCancel(true);
        notification.android.setBadgeIconType(
          firebase.notifications.Android.BadgeIconType.Small,
        );
        notification.android.setPriority(
          firebase.notifications.Android.Priority.High,
        );
      }
      firebase.notifications().displayNotification(notification);
    });
  }

  static async handleNotification(updateNotifyHome) {
    this.notificationListener = firebase
      .notifications()
      .onNotification(notificationReceive => {
        const { _title, _body, _data, _notificationId } = notificationReceive;
        console.log(
          'FireBaseHelper -> handleNotification -> notificationReceive',
          notificationReceive,
        );

        updateNotifyHome();
        const payload = _data.payload ? JSON.parse(_data.payload) : {};
        const extData = payload.extData ? JSON.parse(payload.extData) : {};

        const notification = new firebase.notifications.Notification()
          .setNotificationId(_notificationId)
          .setTitle(_data.title)
          .setData(_data);

        if (payload.image_url) {
          notification.android.setBigPicture(
            payload.image_url,
            '',
            _data.title,
            _data.body,
          );
        } else {
          notification.android.setBigText(_data.body, _data.title, _data.body);
        }

        if (!!extData && extData.type === 'order') {
          notification.setBody(
            getOrderStatus({
              statusOrder: extData.orderStatus,
              useString: true,
            }),
          );
        } else {
          notification.setBody(_data.body);
        }

        if (ifAndroid()) {
          notification.android.setChannelId('notification-channel');
          notification.android.setAutoCancel(true);
          notification.android.setBadgeIconType(
            firebase.notifications.Android.BadgeIconType.Small,
          );
          notification.android.setPriority(
            firebase.notifications.Android.Priority.High,
          );
        }
        firebase.notifications().displayNotification(notification);
      });

    /** App in Background */
    this.notificationOpenedListener = firebase
      .notifications()
      .onNotificationOpened(notificationOpen => {
        console.log(
          'FireBaseHelper -> handleNotification -> notificationOpen',
          notificationOpen,
        );
        const notification = notificationOpen.notification;
        firebase
          .notifications()
          .removeDeliveredNotification(notification._notificationId);
        this.handleNavigate(notification._data);
      });

    /** App in Closed */
    if (Platform.OS === 'android') {
      const notificationOpen = await firebase
        .notifications()
        .getInitialNotification();

      if (notificationOpen) {
        const notification = notificationOpen.notification;
        firebase
          .notifications()
          .removeDeliveredNotification(notification._notificationId);
        this.handleNavigate(notification._data);
      }
    }
  }

  static handleNavigate = dataNotification => {
    console.log('FireBaseHelper -> dataNotification', dataNotification);
    const data = getPayloadFromData(dataNotification);
    console.log('FireBaseHelper -> data', data);

    if (!data) {
      return rootNavigation.navigate(NOTIFICATION_SCREEN, {
        onTab: 'promotion',
      });
    }

    if (data.displayType) {
      switch (data.displayType) {
        case NOTIFICATION_TYPE.PROMOTION:
          rootNavigation.navigate(PROMOTION_SCREEN);
          break;
        case NOTIFICATION_TYPE.MENU:
          rootNavigation.navigate(STORE_SCREEN);
          break;
        case NOTIFICATION_TYPE.WEB:
        case NOTIFICATION_TYPE.POLICY:
        case NOTIFICATION_TYPE.ORDER_DETAILS:
        case NOTIFICATION_TYPE.PROGRAM:
          rootNavigation.navigate(NOTIFICATION_SCREEN, { onTab: 'other' });
          break;
        default:
          rootNavigation.navigate(NOTIFICATION_SCREEN, { onTab: 'promotion' });
          break;
      }
    } else {
      switch (data.type) {
        case 'order':
          rootNavigation.navigate(ACCOUNT_ORDER_DETAILS_SCREEN, {
            orderId: data.data,
          });
          break;
        case 'points':
          rootNavigation.navigate(HISTORY_POINTS_SCREEN);
          break;
        case 'reward':
          rootNavigation.navigate(REWARDS_SCREEN);
          break;
        default:
          rootNavigation.navigate(NOTIFICATION_SCREEN, { onTab: 'promotion' });
          break;
      }
    }
  };

  static reset() {
    this.onRefreshToken();
    this.joinChannel();
    this.notificationListener();
    this.notificationOpenedListener();
  }
}

export const backgroundNotification = async message => {
  console.log('message', message);
  //Get Language in storage before show push notification.
  strings.setLanguage(await getLanguage());
  const payload = JSON.parse(message.data.payload);
  const extData = payload.extData ? JSON.parse(payload.extData) : {};

  const notification = new firebase.notifications.Notification({
    sound: 'default',
    show_in_foreground: true,
  })
    .setNotificationId(message.messageId)
    .setTitle(message.data.title)
    .setData(message.data);

  if (payload.image_url) {
    notification.android.setBigPicture(
      payload.image_url,
      '',
      message.data.title,
      message.data.body,
    );
  } else {
    notification.android.setBigText(
      message.data.body,
      message.data.title,
      message.data.body,
    );
  }

  if (!!extData && extData.type === 'order') {
    notification.setBody(
      getOrderStatus({ statusOrder: extData.orderStatus, useString: true }),
    );
  } else {
    notification.setBody(message.data.body);
  }

  notification.android.setChannelId('notification-channel');
  notification.android.setAutoCancel(true);
  notification.android.setBadgeIconType(
    firebase.notifications.Android.BadgeIconType.Small,
  );
  notification.android.setPriority(
    firebase.notifications.Android.Priority.High,
  );

  firebase.notifications().displayNotification(notification);
  return Promise.resolve();
};

const getPayloadFromData = notificationData => {
  console.log('FireBaseHelper notificationData', notificationData);
  try {
    const dataPayload = JSON.parse(notificationData.payload);
    return dataPayload;
  } catch (error) {}
};
