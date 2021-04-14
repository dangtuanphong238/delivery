import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Tooltip from 'rn-tooltip';
import icNotifyLine from '../../assets/images/icons/svg/ic_notify_line.svg';
import { formatDefaultVND } from '../../helpers/format.helper';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import IconMaterialOrImageOrSvg, { IconType } from './IconMaterialOrImageOrSvg';
import { body2, body3, Text } from './Text';

const RowMoney = ({
  title,
  value1,
  value2,
  noInfo,
  containerStyle,
  rightStyle,
  leftStyle,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.leftRow, leftStyle]}>
        <Text style={styles.titleStyle(theme)} type={body3}>
          {title}
        </Text>
        {!noInfo && (
          <TouchableOpacity>
            {/* <IconMaterialOrImageOrSvg
              type={IconType.Svg}
              size={scale(16)}
              SVGIcon={icNotifyLine}
            /> */}
            <Tooltip
              // pointerColor={'red'}
              containerStyle={{backgroundColor:theme.colors.greyDark2}}
              height={'auto'}
              width={'60%'}
              popover={<Text type={body2} style={styles.txtTips(theme)}>{title}</Text>}>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(18)}
                SVGIcon={icNotifyLine}
              />
            </Tooltip>

          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.rightRow, rightStyle]}>
        <Text type={body3} style={styles.value1(theme)}>
          {formatDefaultVND(value1)}
        </Text>
        <Text type={body3}>{formatDefaultVND(value2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightRow: { flexDirection: 'row', alignItems: 'center' },
  titleStyle: theme => ({
    color: theme.colors.greyDark2,
    marginRight: scale(6),
  }),
  value1: theme => ({
    color: theme.colors.greyDark2,
    marginRight: scale(8),
    textDecorationLine: 'line-through',
  }),
  txtTips: theme => ({
    color: theme.colors.white,
  })
});

export default RowMoney;
