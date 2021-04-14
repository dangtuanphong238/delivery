import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-native';
import { ThemeContext } from '../../theme';
import MaterialIcon from './MaterialIcon';

export default function IconMaterialOrImageOrSvg({
  type,
  name,
  style,
  imageStyle,
  source,
  size,
  SVGIcon,
}) {
  const theme = useContext(ThemeContext);
  switch (type) {
    case IconType.MaterialIcons:
    case IconType.MaterialCommunityIcons:
      return (
        <MaterialIcon
          iconType={type}
          name={name}
          color={style?.color ?? theme.colors.greyDark1}
          style={[{ fontSize: size }, style]}
        />
      );
    case IconType.Svg:
      return (
        <SVGIcon
          fill={style?.color ?? theme.colors.greyDark1}
          width={size}
          height={size}
        />
      );

    default:
      return (
        <Image
          source={source}
          style={[{ width: size, height: size }, imageStyle]}
          resizeMode="contain"
        />
      );
  }
}

export const IconType = {
  MaterialIcons: 'MaterialIcons',
  Image: 'image',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Svg: 'svg',
};
