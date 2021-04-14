import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useContext } from 'react';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

const BackIcon = ({ onPress, color, containerStyle, iconProps }) => {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  const handleOnPress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={handleOnPress}
      hitSlop={styles.hisSlop}
    >
      <Icon
        name={'chevron-left'}
        size={scale(35)}
        color={color ?? theme.colors.greyDark1}
        {...iconProps}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hisSlop: { top: 20, left: 20, bottom: 20, right: 20 },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: scale(4),
  },
});

export default BackIcon;
