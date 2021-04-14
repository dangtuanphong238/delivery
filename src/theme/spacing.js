import { scale } from './dimens';

const baseSpacing = scale(10);

const spacing = {
  tiny: baseSpacing * 0.4,
  small: baseSpacing * 0.8,
  medium: baseSpacing * 1.2,
  large: baseSpacing * 1.6,
  extraLarge: baseSpacing * 2.4,
};
export default spacing;
