import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { scale } from '../../theme/dimens';
import colors from '../../theme/colors';
import typography from '../../theme/typography';
import PrimaryButton from '../common/PrimaryButton';
import { body3, headline5, Text } from '../common/Text';

const MessageDialog = ({
  title,
  message,
  confirmText,
  onConfirmClick,
  color,
  imageSource,
  SVGImage,
}) => {
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
          style={[styles.titleText, { color: color ?? colors.primary }]}
        >
          {title}
        </Text>
        <Text type={body3} style={styles.contentStyle}>
          {message}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          style={[
            styles.confirmButton,
            { backgroundColor: color ?? colors.primary },
          ]}
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
  confirmButton: { backgroundColor: colors.grayBlack + '1A' },
  imageDialog: { width: scale(170), height: scale(100) },
  contentContainer: { alignItems: 'center', paddingHorizontal: scale(10) },
  buttonTextStyle: { ...typography.headline5, textTransform: undefined },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingBottom: scale(31),
    paddingTop: scale(18),
  },
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
  },
  button: { flex: 0.49, height: scale(40) },
});
export default MessageDialog;
