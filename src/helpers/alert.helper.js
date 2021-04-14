import React from 'react';
import { Image, Linking, StyleSheet, View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import { handleNavigate } from '../actions/main.action';
import IconMaterialOrImageOrSvg, {
  IconType,
} from '../components/common/IconMaterialOrImageOrSvg';
import { store } from '../store/configure-store';
import colors from '../theme/colors';
import dimens from '../theme/dimens';
import { scale } from './theme/dimens';
import _ from 'lodash';
import { ALERT_TYPE } from '../configs/app.config';

export default class AlertHelper {
  static dropDown;
  static setDropDown(dropDown) {
    this.dropDown = dropDown;
  }
  static getDropDown() {
    return this.dropDown;
  }

  static alert(type, title, message, options, inMilliSeconds) {
    if (this.dropDown) {
      this.dropDown.alertWithType(
        type,
        title,
        message,
        options,
        inMilliSeconds,
      );
    }
  }

  static onTapAlert = data => {
    try {
      switch (data.payload?.type) {
        case ALERT_TYPE.UPDATE_APP:
          Linking.openURL(data.payload?.storeUrl);
          break;
        case ALERT_TYPE.NOTIFICATION:
          store.dispatch(handleNavigate({ data: data.payload?.data }));
          break;
        default:
          return;
      }
    } catch (error) {}
  };
  static renderImage = (props, message) => {
    const urlImg = _.get(message, 'payload.icon', '');
    if (!!urlImg) {
      return (
        <View style={styles.wrapperIcon}>
          <Image
            source={{ uri: urlImg }}
            style={{
              height: scale(30),
              width: scale(30),
            }}
            resizeMode="contain"
          />
        </View>
      );
    }
    return (
      <View style={styles.wrapperIcon}>
        <IconMaterialOrImageOrSvg
          type={IconType.MaterialCommunityIcons}
          size={scale(30)}
          name="bell-outline"
          style={{ color: colors.white }}
        />
      </View>
    );
  };

  static NotificationAlert() {
    return (
      <DropdownAlert
        ref={ref => AlertHelper.setDropDown(ref)}
        useNativeDriver
        successColor={colors.success}
        infoColor={colors.secondary}
        updateStatusBar={false}
        renderImage={AlertHelper.renderImage}
        defaultContainer={{
          padding: 8,
          paddingTop: dimens.STATUS_BAR_HEIGHT,
        }}
        onClose={data => {}}
        onTap={AlertHelper.onTapAlert}
      />
    );
  }
}
const styles = StyleSheet.create({
  wrapperIcon: { alignItems: 'center', justifyContent: 'center' },
});
