import React from 'react';
import { StyleSheet, View } from 'react-native';
import { scale } from '../../theme/dimens';
import colors from '../../theme/colors';
import typography from '../../theme/typography';
import PrimaryButton from '../common/PrimaryButton';
import { body2, headline4, Text } from '../common/Text';

const InfoDialog = ({
  title,
  message,
  confirmText,
  cancelText,
  onCancelClick,
  onConfirmClick,
  child,
}) => {
  const showCancelButton = !!cancelText;
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text
            type={headline4}
            style={[styles.titleText, { color: colors.black }]}
          >
            {title}
          </Text>
        </View>
        {!!message && (
          <View style={{ paddingVertical: scale(16) }}>
            <Text type={body2} style={styles.contentStyle}>
              {message}
            </Text>
          </View>
        )}
        {child}
      </View>

      <View style={styles.buttonContainer(showCancelButton)}>
        {showCancelButton && (
          <PrimaryButton
            style={[styles.button, styles.cancelButton]}
            onPress={onCancelClick}
            title={cancelText}
            textStyle={styles.buttonTextStyle}
          />
        )}
        <PrimaryButton
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={onConfirmClick}
          title={confirmText}
          textStyle={[styles.buttonTextStyle, styles.whiteColor]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.opacityBorderGray,
    paddingVertical: scale(5),
  },
  whiteColor: { color: colors.white },
  cancelButton: { backgroundColor: colors.grayBlack + '1A' },
  contentContainer: {
    paddingHorizontal: scale(10),
  },
  buttonTextStyle: { ...typography.headline6, textTransform: undefined },
  buttonContainer: showCancelButton => ({
    flexDirection: 'row',
    width: '100%',
    justifyContent: showCancelButton ? 'space-between' : 'center',
    paddingHorizontal: scale(10),
    paddingBottom: scale(16),
    paddingTop: scale(18),
  }),
  titleText: {
    textAlign: 'center',
    marginVertical: scale(9),
  },
  container: {
    width: scale(320),
    backgroundColor: 'white',
    maxWidth: 375,
    minHeight: 150,
    borderRadius: scale(4),
  },
  contentStyle: {
    textAlign: 'center',
    minHeight: 30,
  },
  button: { flex: 0.49, height: scale(40) },
});
export default InfoDialog;
