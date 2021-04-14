import colors from './colors';
import spacing from './spacing';
import dimens from './dimens';
import typography from './typography';

const lightTheme = {
  colors: colors.lightTheme,
  typography: typography.lightTheme,
  spacing,
  dimens,
};

const darkTheme = {
  colors: colors.darkTheme,
  typography: typography.darkTheme,
  spacing,
  dimens,
};

export default {
  lightTheme: lightTheme,
  darkTheme: darkTheme,
};
