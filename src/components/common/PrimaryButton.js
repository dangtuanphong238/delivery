import React from 'react';
import { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import usePreventOnPress from '../../hooks/usePreventOnPress';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import { headline5, Text } from './Text';

export default function PrimaryButton({
  title,
  onPress,
  style,
  textStyle,
  left,
  right,
}) {
  const theme = useContext(ThemeContext);
  const handlePreventPress = usePreventOnPress(300);
  const toggle = () => {
    handlePreventPress(() => {
      if (onPress) {
        onPress();
      }
    });
  };
  return (
    <TouchableOpacity onPress={toggle} style={[styles.container(theme), style]}>
      <View>{left}</View>
      <Text type={headline5} style={[styles.titleStyle(theme), textStyle]}>
        {title}
      </Text>
      <View>{right}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleStyle: theme => ({
    color: theme.colors.white,
  }),
  container: theme => ({
    backgroundColor: theme.colors.orangeDark,
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(50),
    borderRadius: scale(12),
    flexDirection: 'row',
  }),
});
