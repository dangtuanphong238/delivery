import React, { useEffect, useState } from 'react';
import { Animated, StatusBar, StyleSheet, View } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";
import RNBootSplash from 'react-native-bootsplash';
import ic_logo_app from './assets/images/images/svg/ic_logo_app';
import IconMaterialOrImageOrSvg, { IconType } from './components/common/IconMaterialOrImageOrSvg';
import LoadingView from './components/common/LoadingView';
// import AlertHelper from './helpers/alert.helper';
// import { ToastHelper } from './helpers/ToastHelper';
import Navigation from './navigations/main.navigator';
import { scale } from './theme/dimens';

const MainScreen = () => {
  const [isLoaded, setLoaded] = useState(false);
  const opacity = useState(new Animated.Value(0))[0];
  const loadingProgress = new Animated.Value(0);
  const logoScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 10, 100],
          outputRange: [1, 0.8, 10],
        }),
      },
    ],
  };
  const logoOpacity = {
    opacity: loadingProgress.interpolate({
      inputRange: [0, 20, 100],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    }),
  };
  function fade() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }


  useEffect(() => {
    const init = async () => { };

    init().finally(async () => {
      await RNBootSplash.hide();
      fade();
      setTimeout(() => {
        setLoaded(!isLoaded);
      }, 2000);
    });
  }, []);

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      preload={false}
      customComponent={
        <Animated.View
          resizeMode={"contain"}
          style={{
            opacity,
            logoScale,
            logoOpacity,
          }}
        >
          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(150)}
            SVGIcon={ic_logo_app}
          />
        </Animated.View>
      }
    >
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        <Navigation />
        <LoadingView />
        {/* <ToastHelper.ToastContainer />
      <AlertHelper.NotificationAlert /> */}
      </View>
    </AnimatedSplash>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
