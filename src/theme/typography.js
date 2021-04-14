import { StyleSheet } from 'react-native';

import colors from './colors';
import { scale } from './dimens';

const fontFamilyRegular = 'Roboto-Regular';
const fontFamilyBold = 'Roboto-Bold';

const textGrayColorLightMode = colors.lightTheme?.textPrimary;
const textGrayColorDarkMode = colors.darkTheme?.textPrimary;

const typography = {
  lightTheme: StyleSheet.create({
    headline1: {
      fontFamily: fontFamilyBold,
      fontSize: scale(34),
      color: textGrayColorLightMode,
    },
    headline2: {
      fontFamily: fontFamilyBold,
      fontSize: scale(20),
      color: textGrayColorLightMode,
    },
    headline3: {
      fontFamily: fontFamilyBold,
      fontSize: scale(18),
      color: textGrayColorLightMode,
    },
    headline4: {
      fontFamily: fontFamilyBold,
      fontSize: scale(16),
      color: textGrayColorLightMode,
    },
    headline5: {
      fontFamily: fontFamilyBold,
      fontSize: scale(14),
      color: textGrayColorLightMode,
    },
    headline6: {
      fontFamily: fontFamilyBold,
      fontSize: scale(12),
      color: textGrayColorLightMode,
    },
    headline7: {
      fontFamily: fontFamilyBold,
      fontSize: scale(10),
      color: textGrayColorLightMode,
    },
    body1: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(16),
      color: textGrayColorLightMode,
    },
    body2: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(14),
      color: textGrayColorLightMode,
    },
    body3: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(12),
      color: textGrayColorLightMode,
    },
    caption: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(14),
      color: textGrayColorLightMode,
    },
    overline: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(10),
      color: textGrayColorLightMode,
    },
  }),

  darkTheme: StyleSheet.create({
    headline1: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(34),
      color: textGrayColorDarkMode,
    },
    headline2: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(20),
      color: textGrayColorDarkMode,
    },
    headline3: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(18),
      color: textGrayColorDarkMode,
    },
    headline4: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(16),
      color: textGrayColorDarkMode,
    },
    headline5: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(14),
      color: textGrayColorDarkMode,
    },
    headline6: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(12),
      color: textGrayColorDarkMode,
    },
    body1: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(16),
      color: textGrayColorDarkMode,
    },
    body2: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(14),
      color: textGrayColorDarkMode,
    },
    body3: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(12),
      color: textGrayColorDarkMode,
    },
    caption: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(14),
      color: textGrayColorDarkMode,
    },
    overline: {
      fontFamily: fontFamilyRegular,
      fontSize: scale(10),
      color: textGrayColorLightMode,
    },
  }),
};

export default typography;
