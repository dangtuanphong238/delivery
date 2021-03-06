// flow

import Animated, { Easing } from 'react-native-reanimated';
import Animation from './Animation';

export default class ScaleAnimation extends Animation {
  toValue(toValue: number, onFinished: ?Function) {
    switch (toValue) {
      case 0:
        Animated.spring(this.animate, {
          toValue,
          velocity: 3,
          tension: 250,
          friction: 20,
          easing: Easing.inOut(Easing.ease),
        }).start(onFinished);
        break;
      case 1:
        Animated.spring(this.animate, {
          toValue,
          velocity: 0,
          tension: 65,
          friction: 7,
          easing: Easing.inOut(Easing.ease),
        }).start(onFinished);
        break;
      default:
        break;
    }
  }

  createAnimations(): Object {
    const transform = [
      {
        scale: this.animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
      {
        scale: this.animate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    ];

    const animations = {
      transform,
    };

    return animations;
  }
}
