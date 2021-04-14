import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabbarIcon({ IconTab, focused, size, color }) {

  const renderIcon = () => {
    return <IconTab fill={color} width={size} height={size} />;
  };
  return <View style={styles.iconWrapper}>{renderIcon()}</View>;
}

const styles = StyleSheet.create({
  iconWrapper: {
    borderRadius: 100,
    padding: 5,
  },
});
