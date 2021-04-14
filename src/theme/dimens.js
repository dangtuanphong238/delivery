import { Dimensions } from 'react-native';
import { getStatusBarHeight } from '../helpers/device.helper';

const { width, height } = Dimensions.get('window');
const statusbarHeight = getStatusBarHeight(true);

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const WINDOW_WIDTH = width;
export const WINDOW_HEIGHT = height;
export const STATUS_BAR_HEIGHT = statusbarHeight;
export const TOOL_BAR_HEIGHT = 44;
