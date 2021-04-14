import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeContainer = ({ children, safeTop, safeBot, ...props }) => {
  return (
    <View {...props}>
      {safeTop && <SafeAreaView />}
      {children}
      {safeBot && <SafeAreaView />}
    </View>
  );
};

export default SafeContainer;
