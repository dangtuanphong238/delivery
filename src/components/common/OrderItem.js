import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import IconMaterialOrImageOrSvg, { IconType } from './IconMaterialOrImageOrSvg';
import ic_wind_direction from '../../assets/images/icons/svg/ic_wind_direction.svg';
import orderDemo from '../../assets/images/images/svg/orderdemo.svg';
import { body3, headline5, overline, Text } from './Text';
import { formatDefaultVND } from '../../helpers/format.helper';
import Timeline from './TimeLine';
import { useNavigation } from '@react-navigation/native';
import useOrderStatus from '../../hooks/useOrderStatus';
import { ORDER_DETAILS_SCREEN, ORDER_DELIVERED_DETAILS_SCREEN } from '../../navigations/route-name';
import { ORDER_STATUS } from '../../configs/app.config';
const OrderItem = ({ item }) => {
  const t = useTranslation();
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const orderStatus = useOrderStatus()(item.status);
  const newData = item.data
    ? item.data.length > 2
      ? getNewData(item.data)
      : item.data
    : null;

  function getNewData(data) {
    if (data) {
      var tempData = [];
      tempData.push(data[0]);
      tempData.push({
        title: '+ ' + (data.length - 2) + ' điểm dừng ...',
        titleStyle: { color: theme.colors.greyDark2 },
      });
      tempData.push(data[data.length - 1]);
      return tempData;
    }
  }

  const navigateToDetails = () => {
    navigation.navigate(ORDER_DETAILS_SCREEN, { item: item });
  };

  const navigateToDeliveredDetails = () => {
    navigation.navigate(ORDER_DELIVERED_DETAILS_SCREEN, { item: item });
  }
  const handleNavigation = (status) => {
    switch (status) {
      case ORDER_STATUS.COMPLETE:
        return navigateToDeliveredDetails()
      default:
        return navigateToDetails()
    }
  }

  return (
    <TouchableOpacity onPress={() => handleNavigation(item.status)}>
      <View style={styles.container(theme)}>
        <View style={styles.top}>
          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(60)}
            SVGIcon={orderDemo}
          />
          <View style={styles.topRight}>
            <View style={styles.containerTopRight}>
              <Text type={headline5} style={styles.titleStyle}>
                {item.title}
              </Text>
              <View style={styles.statusStyle(orderStatus?.color)}>
                <Text type={overline} style={styles.textWhite(theme)}>
                  {orderStatus?.text}
                </Text>
              </View>
            </View>
            <Timeline data={newData} />
          </View>
        </View>
        <View style={styles.bot}>
          <View style={styles.containerBot}>
            <View style={{ marginRight: scale(6) }}>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(18)}
                SVGIcon={ic_wind_direction}
              />
            </View>
            <Text type={body3} style={styles.styleLight(theme)}>
              {item.distance}
            </Text>
            <Text type={body3}>{' - '}</Text>
            <Text type={body3} style={styles.costStyle(theme)}>
              {formatDefaultVND(item.cost)}
            </Text>
          </View>
          <Text type={body3}>
            {t.translate('collection') + ': ' + formatDefaultVND(item.price)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: theme => ({
    flexDirection: 'column',
    padding: scale(8),
    backgroundColor: theme.colors.white,
    borderRadius: scale(8),
    marginHorizontal: scale(2),
    marginBottom: scale(10),
    shadowColor: theme.colors.black,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 1.41,
    elevation: 3,
  }),
  textWhite: theme => ({
    color: theme.colors.white,
  }),
  statusStyle: colors => ({
    height: scale(22),
    paddingHorizontal: scale(8),
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors,
  }),
  titleStyle: { fontStyle: 'italic', fontWeight: 'bold' },
  styleLight: theme => ({ color: theme.colors.greyLight1 }),
  costStyle: theme => ({ color: theme.colors.orangeDark }),
  top: { flexDirection: 'row' },
  topRight: { flexDirection: 'column', flex: 1, marginLeft: scale(10) },
  containerTopRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(6),
  },
  bot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerBot: { flexDirection: 'row' },
});

export default OrderItem;
