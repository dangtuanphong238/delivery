import React from 'react';
import { useContext } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { moderateScale } from '../../theme/dimens';
import { LOGIN_SCREEN } from '../../navigations/route-name';
import { isLoginSelector } from '../../selectors/auth.selectors';
import { ThemeContext } from '../../theme';
import { headline7, Text } from './Text';

const TabbarComponent = ({ state, descriptors, navigation, isLogedIn }) => {
  const theme = useContext(ThemeContext);

  const renderRoute = () => {
    return state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const label =
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          if (options.requiredLogin && !isLogedIn) {
            navigation.navigate(LOGIN_SCREEN);
          } else {
            navigation.navigate(route.name);
          }
        }
      };

      const color = isFocused
        ? theme.colors.backgroundTabBarActive
        : theme.colors.backgroundTabBarDeactivate;

      return (
        <TouchableOpacity
          key={route.key.toString()}
          accessibilityRole="button"
          accessibilityStates={isFocused ? ['selected'] : []}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          activeOpacity={1}
          style={styles.buttonTabbar}
        >
          {options.tabBarIcon({
            focused: isFocused,
            color: color,
            size: moderateScale(25),
          })}
          <Text
            type={headline7}
            numberOfLines={1}
            style={[styles.labelStyle, { color: color }]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <SafeAreaView style={styles.wrapper(theme)}>
      <View style={styles.tabContainer}>{renderRoute()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonTabbar: { flex: 1, alignItems: 'center' },
  wrapper: theme => ({
    backgroundColor: theme.colors.tabBarBackground,
  }),
  tabContainer: {
    elevation: 0.5,
    flexDirection: 'row',
    height: moderateScale(65),
    paddingTop: moderateScale(5),
    paddingBottom: moderateScale(5),
  },
  labelStyle: {
    marginTop: moderateScale(5),
  },
});

const mapStateToProps = state => ({
  isLogedIn: isLoginSelector(state),
});

export default connect(mapStateToProps, null)(TabbarComponent);
