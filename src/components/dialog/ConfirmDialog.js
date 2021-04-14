import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { scale } from '../../theme/dimens';
import colors from '../../theme/colors';
import typography from '../../theme/typography';
import PrimaryButton from '../common/PrimaryButton';
import { body3, headline5, Text } from '../common/Text';

const ConfirmDialog = ({
  title,
  message,
  confirmText,
  cancelText,
  onCancelClick,
  onConfirmClick,
  color,
  imageSource,
  subMessage,
  SVGImage,
  child,
  titleStyle,
}) => {
  const showCancelButton = !!cancelText;
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {imageSource && (
          <Image
            source={imageSource}
            style={styles.imageDialog}
            resizeMode="contain"
          />
        )}
        {SVGImage && <SVGImage width={scale(170)} height={scale(100)} />}
        <Text
          type={headline5}
          style={[styles.titleText, { color: color ?? colors.primary},titleStyle]}
        >
          {title}
        </Text>
        {message && (
          <Text type={body3} style={styles.contentStyle}>
            {message}
          </Text>
        )}
        {subMessage && <Text type={headline5}>{subMessage}</Text>}
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
          style={[styles.button, { backgroundColor: color ?? colors.primary }]}
          onPress={onConfirmClick}
          title={confirmText}
          textStyle={[styles.buttonTextStyle, styles.whiteColor]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteColor: { color: colors.white },
  cancelButton: { backgroundColor: colors.grayBlack + '1A' },
  imageDialog: { width: scale(170), height: scale(100) },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  buttonTextStyle: { ...typography.headline6, textTransform: undefined },
  buttonContainer: showCancelButton => ({
    flexDirection: 'row',
    width: '100%',
    justifyContent: showCancelButton ? 'space-between' : 'center',
    paddingHorizontal: scale(10),
    paddingBottom: scale(31),
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
    borderRadius: scale(8),
    paddingTop: scale(40),
  },
  contentStyle: {
    textAlign: 'center',
    minHeight: 30,
  },
  button: { flex: 0.49, height: scale(40) },
  wrapperMessage: {
    // paddingVertical: scale(10),
    borderWidth: 1,
  },
});
export default ConfirmDialog;
