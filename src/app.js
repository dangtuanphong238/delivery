import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  UIManager,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { LocaleContextProvider } from './i18n/LocaleContext';
import MainScreen from './main';
import { persistor, store } from './store/configure-store';
import { theme, ThemeProvider } from './theme';
// import AnimatedSplash from "react-native-animated-splash-screen";

Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = {};
TextInput.defaultProps.allowFontScaling = false;
TouchableOpacity.defaultProps = {};
TouchableOpacity.defaultProps.activeOpacity = 0.8;

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  // const [isLoaded, setLoaded] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoaded(true);
  //   }, 1500);
  // }, []);
  return (
    // <AnimatedSplash
    //   translucent={true}
    //   isLoaded={isLoaded}
    //   logoImage={require('./assets/images/images/icon-app.png')}
    //   backgroundColor={"#EDEDED"}
    //   // logoHeight={150}
    //   // logoWidth={150}
    // >
      <LocaleContextProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <PersistGate persistor={persistor}>
              <MainScreen />
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </LocaleContextProvider>
    // </AnimatedSplash>
  );
}
