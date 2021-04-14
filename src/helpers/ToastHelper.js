import React from 'react';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-easy-toast';
import colors from '../theme/colors';
import _ from 'lodash';
export class ToastHelper {
  static toast;
  static setToast(toast) {
    this.toast = toast;
  }
  static showToast = (message, backgroundColor = 'black', duration = 750) => {
    this.toast?.show(message, duration, backgroundColor);
  };

  static showToastFirstError = errors => {
    const firstMessage = _.values(errors)[0];
    if (!!firstMessage) {
      this.showToast(firstMessage, colors.secondary);
    }
  };

  static ToastContainer() {
    return (
      <Toast
        ref={ref => ToastHelper.setToast(ref)}
        positionValue={100}
        fadeInDuration={500}
        fadeOutDuration={1000}
        textStyle={styles.toastText}
      />
    );
  }
}

const styles = StyleSheet.create({
  toastText: { color: colors.white },
});
