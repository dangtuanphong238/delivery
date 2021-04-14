import React from 'react';
import { Keyboard } from 'react-native';
import DialogManager from '../components/dialog/';
import ConfirmDialog from '../components/dialog/ConfirmDialog';
import DateTimePickerDialog from '../components/dialog/DateTimePickerDialog';
import InfoDialog from '../components/dialog/InfoDialog';
import MessageDialog from '../components/dialog/MessageDialog';
import colors from '../theme/colors';
import { scale } from './theme/dimens';

export default class DialogHelper {
  static dialogShown = false;
  static showConfirmDialog({
    title,
    message,
    confirmText,
    cancelText,
    onConfirmClick,
    color,
    child,
    titleStyle,
    imageSource,
    SVGImage,
    onCancelClick,
    dismissOnTouchOutside,
    subMessage,
    noDismissOnConfirm,
  }) {
    Keyboard.dismiss();
    DialogHelper.showDialog({
      dismissOnTouchOutside: dismissOnTouchOutside ?? false,
      dialog: (
        <ConfirmDialog
          title={title}
          child={child}
          titleStyle={titleStyle}
          message={message}
          subMessage={subMessage}
          imageSource={imageSource}
          SVGImage={SVGImage}
          confirmText={confirmText}
          cancelText={cancelText}
          color={color}
          onCancelClick={() => {
            DialogHelper.dismiss();
            if (onCancelClick) {
              onCancelClick();
            }
          }}
          onConfirmClick={() => {
            if (!noDismissOnConfirm) {
              DialogHelper.dismiss();
            }
            if (onConfirmClick) {
              onConfirmClick();
            }
          }}
        />
      ),
    });
  }
  static showMessageDialog({
    title,
    message,
    confirmText,
    cancelText,
    onConfirmClick,
    color,
    imageSource,
    SVGImage,
  }) {
    Keyboard.dismiss();
    DialogHelper.showDialog({
      dialog: (
        <MessageDialog
          title={title}
          message={message}
          imageSource={imageSource}
          SVGImage={SVGImage}
          confirmText={confirmText}
          cancelText={cancelText}
          color={color}
          onConfirmClick={() => {
            DialogHelper.dismiss();
            if (onConfirmClick) {
              onConfirmClick();
            }
          }}
        />
      ),
    });
  }
  static showInfoDialog({
    title,
    message,
    confirmText,
    cancelText,
    onCancelClick,
    onConfirmClick,
    child,
  }) {
    Keyboard.dismiss();
    DialogHelper.showDialog({
      dismissOnTouchOutside: true,
      dialog: (
        <InfoDialog
          title={title}
          message={message}
          confirmText={confirmText}
          cancelText={cancelText}
          child={child}
          onCancelClick={() => {
            DialogHelper.dismiss();
            if (onCancelClick) {
              onCancelClick();
            }
          }}
          onConfirmClick={() => {
            DialogHelper.dismiss();
            if (onConfirmClick) {
              onConfirmClick();
            }
          }}
        />
      ),
    });
  }
  static showDateTimePickerDialog({ onConfirmClick, initialDate }) {
    Keyboard.dismiss();
    DialogHelper.showDialog({
      dialog: (
        <DateTimePickerDialog
          onCancelClick={() => {
            DialogHelper.dismiss();
          }}
          initialDate={initialDate}
          onConfirmClick={date => {
            DialogHelper.dismiss();
            if (onConfirmClick) {
              onConfirmClick(date);
            }
          }}
        />
      ),
    });
  }
  static showDialog({
    dialog,
    onDismiss,
    animationDuration,
    dismissOnTouchOutside,
    width,
    dialogAnimation,
  }) {
    if (DialogHelper.dialogShown) return;
    DialogHelper.dialogShown = true;
    DialogManager.show({
      dialogAnimation: dialogAnimation,
      overlayBackgroundColor: colors.primary,
      dismissOnTouchOutside: dismissOnTouchOutside ?? true,
      width: width ?? scale(320),
      animationDuration: animationDuration || 250,
      onDismissed: () => {
        if (!!onDismiss) {
          onDismiss();
        }
        DialogHelper.dialogShown = false;
      },
      children: dialog,
    });
  }

  static dismiss() {
    if (DialogHelper.dialogShown) {
      DialogHelper.dialogShown = false;
      DialogManager.dismiss();
    }
  }
}
