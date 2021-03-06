/* @flow */

import Animated, { Easing } from 'react-native-reanimated';
import Animation from './Animation';

type Param = {
  toValue?: number,
  animationDuration?: number,
};

export default class FadeAnimation extends Animation {
  animate: Object;
  animationDuration: number;

  constructor({ toValue = 0, animationDuration = 200 }: Param) {
    super(toValue);

    this.animationDuration = animationDuration;
  }

  toValue(toValue: number) {
    Animated.timing(this.animate, {
      toValue,
      duration: this.animationDuration,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }

  createAnimations(): Object {
    return { opacity: this.animate };
  }
}
