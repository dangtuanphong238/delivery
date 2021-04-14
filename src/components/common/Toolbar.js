import React from 'react';
import { useContext } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { ThemeContext } from '../../theme';
import { TOOL_BAR_HEIGHT } from '../../theme/dimens';
import { modeTypes } from '../../theme/theme-provider';

const ToolBar = ({
  left,
  center,
  right,
  style,
  leftStyle,
  rightStyle,
  barStyle,
  shadow,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView style={[!!shadow && styles.shadow, style]}>
      <StatusBar
        barStyle={
          barStyle
            ? barStyle
            : theme.themeMode === modeTypes.DARK_MODE
              ? 'light-content'
              : 'dark-content'
        }
      />
      <View style={styles.statusbar} />
      <View style={styles.container}>
        <View style={[styles.iconStyle, styles.left, leftStyle]}>{left}</View>
        <View style={styles.center}>{center}</View>
        <View style={[styles.iconStyle, styles.right, rightStyle]}>
          {right}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  container: {
    height: TOOL_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    alignItems: 'stretch',
  },
  statusbar: {
    height: Platform.select({
      ios: 0,
      android: StatusBar.currentHeight,
      default: 0,
    }),
  },
  iconStyle: {
    justifyContent: 'center',
    minWidth: '15%',
    maxWidth: '40%',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: theme => ({
    shadowColor: theme.colors.secondaryLight,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  }),
});
