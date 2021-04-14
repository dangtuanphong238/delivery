import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import IconMaterialOrImageOrSvg, {
  IconType,
} from '../../../components/common/IconMaterialOrImageOrSvg';
import { headline6, overline, Text } from '../../../components/common/Text';
import useTranslation from '../../../i18n';
import logo from '../../../assets/images/images/svg/logo.svg';
import point from '../../../assets/images/images/svg/point.svg';
import { scale } from '../../../theme/dimens';
import HomeProgressRank from './home.ProgressRank';
import { ThemeContext } from '../../../theme';

const HomePoint = () => {
  const t = useTranslation();
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <IconMaterialOrImageOrSvg
          type={IconType.Svg}
          size={scale(50)}
          SVGIcon={logo}
        />
      </View>
      <View style={styles.center}>
        <View style={styles.containerPoint}>
          <View style={styles.rankPoint}>
            <Text type={headline6}>{t.translate('rank') + ' Gold'}</Text>
            <View style={styles.pointDetail}>
              <Text type={headline6}>{'164' + ' pt '}</Text>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(16)}
                SVGIcon={point}
              />
            </View>
          </View>
          <HomeProgressRank />
          <View style={styles.rankDiamond}>
            <Text type={overline}>
              {t.translate('point1') + ' 500 ' + t.translate('point2')}
            </Text>
            <TouchableOpacity>
              <IconMaterialOrImageOrSvg
                type={IconType.MaterialCommunityIcons}
                size={scale(24)}
                name={'chevron-right'}
                style={styles.rightStyle(theme)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(HomePoint);

const styles = StyleSheet.create({
  container: {
    height: scale(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: scale(8),
  },
  left: {
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    padding: scale(8),
  },
  containerPoint: { flexDirection: 'column' },
  rankPoint: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rankDiamond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointDetail: { flexDirection: 'row' },
  rightStyle: theme => ({
    color: theme.colors.greyDark1,
  }),
});
