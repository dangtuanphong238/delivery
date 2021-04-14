import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BackgroundImageContainer({
  children,
  useTopSafeArea,
  useBottomSafeArea,
  containerStyle,
  style,
}) {
  return (
    <ImageBackground style={[styles.container, style]} resizeMode="cover">
      {useTopSafeArea && <SafeAreaView />}
      <View style={[styles.container, containerStyle]}>{children}</View>
      {useBottomSafeArea && <SafeAreaView />}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
