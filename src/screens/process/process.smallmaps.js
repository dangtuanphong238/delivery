import React, { useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import ic_cancel from '../../assets/images/images/svg/ic_cancel.svg';
import IconMaterialOrImageOrSvg, {
  IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import { scale } from '../../theme/dimens';
import ProcessMaps from './process.component/process.maps';

export default function SmallMaps() {
  const [isShow, setIsShow] = useState(true);
  const closeMap = () => {
    setIsShow(!isShow);
  };

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        { useNativeDriver: false },
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return isShow && (
    <View style={styles.container}>
      <Animated.View
        style={[
          pan.getLayout(),
          styles.maps,
          { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
        ]}
        {...panResponder.panHandlers}
      >
        <ProcessMaps />
        <TouchableOpacity style={styles.alignRight} onPress={closeMap}>
          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(27)}
            SVGIcon={ic_cancel}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maps: {
    ...StyleSheet.absoluteFillObject,
    marginTop: scale(10),
    width: scale(120),
    height: scale(222),
  },
  alignRight: {
    top: scale(-8),
    right: scale(-5),
    position: 'absolute',
  },
});
