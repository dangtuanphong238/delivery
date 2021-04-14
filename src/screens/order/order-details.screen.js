import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import icLocation from '../../assets/images/icons/svg/ic_location.svg';
import point from '../../assets/images/images/svg/point.svg';
import BackIcon from '../../components/common/BackIcon';
import IconMaterialOrImageOrSvg, {
  IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import PrimaryButton from '../../components/common/PrimaryButton';
import RowMoney from '../../components/common/RowMoney';
import SafeContainer from '../../components/common/SafeContainer';
import {
  body3,
  headline4,
  headline5,
  headline6,
  Text
} from '../../components/common/Text';
import Timeline from '../../components/common/TimeLine';
import ToolBar from '../../components/common/Toolbar';
import CancelOrderDialog from '../../components/dialog/CancelOrderDialog';
import { formatDefaultVND } from '../../helpers/format.helper';
import useOrderStatus from '../../hooks/useOrderStatus';
import useTranslation from '../../i18n';
import {

  MAPS_SCREEN, PROCESS_SCREEN
} from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale, WINDOW_WIDTH } from '../../theme/dimens';



const OrderDetailsScreen = ({ route, navigation }) => {
  const theme = useContext(ThemeContext);
  const item = route.params.item;
  const orderStatus = useOrderStatus()(item.status);
  const t = useTranslation();
  // const [isShowToolTip, setIsShowToolTip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { }, []);
  const navigationScreen = (name, params) => () => {
    navigation.navigate(name, params);
  };
  const navigateToHome = () => {
    setIsVisible(!isVisible);
    navigation.goBack();
  };
  const handlerCommunicationButton = (clickStatus) => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeContainer style={styles.container(theme)}>
      <ToolBar
        style={{ backgroundColor: theme.colors.white }}
        left={<BackIcon />}
        barStyle="dark-content"
        center={<Text type={headline5}>{t.translate('detailsOfTheTrip')}</Text>}
      />
      <View style={styles.rowStatus(theme)}>
        <Text type={headline4}>{item.id}</Text>
        <View style={styles.statusStyle(orderStatus?.color)}>
          <Text type={headline6} style={styles.textWhite(theme)}>
            {orderStatus?.text}
          </Text>
        </View>
      </View>
      <View style={styles.containerContent(theme)}>
        <View style={styles.groupPrice(theme)}>
          <RowMoney
            title={t.translate('totalDeliveryFee')}
            value1={item.newCost ? item.cost : null}
            value2={item.newCost ?? item.cost}
          />

          <RowMoney
            title={t.translate('totalCollectionFee')}
            containerStyle={styles.containerCollect}
            value2={item.price}
          />
          <RowMoney
            title={t.translate('serviceSurcharge')}
            rightStyle={styles.rightServiceStyle(theme)}
            noInfo
            value2={0}
          />
        </View>
        <View style={styles.rightTotalStyle(theme)}>
          <Text type={headline5} style={styles.redStyle(theme)}>
            {t.translate('totalOrders')}
          </Text>
          <Text type={headline5} style={styles.redStyle(theme)}>
            {formatDefaultVND((item.newCost ?? item.cost) + item.price)}
          </Text>
        </View>
        <View style={styles.distanceContainer(theme)}>
          <View style={styles.rowDistance}>
            <Text type={body3} style={styles.greyLightStyle(theme)}>
              {t.translate('route') + ' - '}
            </Text>
            <Text type={headline5}>{item.distance}</Text>
          </View>
          <TouchableOpacity
            style={styles.locationStyle}
            onPress={navigationScreen(MAPS_SCREEN)}
          >
            <IconMaterialOrImageOrSvg
              type={IconType.Svg}
              size={scale(32)}
              SVGIcon={icLocation}
            />
            <Text type={body3} style={styles.orangeStyle(theme)}>
              {t.translate('seeTheRoad')}
            </Text>
          </TouchableOpacity>
        </View>
        <Timeline
          containerStyle={styles.timeLineStyle}
          rowContainer={styles.rowTimeLineContainer}
          data={item.data}
        />
        <View style={styles.pointDetail}>
          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(16)}
            SVGIcon={point}
          />
          <Text type={body3}>
            {t.translate('accumulated') +
              ' +' +
              item.pointReceive +
              'đ ' +
              t.translate('whenCompletingTheOrder')}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          onPress={handlerCommunicationButton}
          title={t.translate('cancelOrder')}
          style={styles.buttonCancel(theme)}
        />
        <PrimaryButton
          title={t.translate('receiveOrder')}
          style={styles.buttonReceive}
          onPress={navigationScreen(PROCESS_SCREEN, { item: item })}
        />
      </View>
      {isVisible && <CancelOrderDialog handleClickCommunication={handlerCommunicationButton} handleClickCancel={navigateToHome} />}

    </SafeContainer>
  );
};
const styles = StyleSheet.create({
  container: theme => ({
    backgroundColor: theme.colors.white,
    flex: 1,
  }),
  containerContent: theme => ({
    flex: 1,
  }),
  rowStatus: theme => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
    paddingVertical: scale(20),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  }),
  textWhite: theme => ({
    color: theme.colors.white,
  }),
  greyLightStyle: theme => ({
    color: theme.colors.greyDark2,
  }),
  statusStyle: colors => ({
    height: scale(30),
    paddingHorizontal: scale(20),
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors,
  }),
  groupPrice: theme => ({
    flexDirection: 'column',
    paddingHorizontal: scale(16),
    paddingVertical: scale(10),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  }),
  rightServiceStyle: theme => ({
    backgroundColor: theme.colors.greyLight2,
    paddingLeft: scale(40),
    borderRadius: scale(4),
  }),
  rightTotalStyle: theme => ({
    paddingHorizontal: scale(16),
    paddingVertical: scale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  distanceContainer: theme => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
    paddingVertical: scale(10),
    marginBottom: scale(16),
    backgroundColor: theme.colors.greyLight3,
  }),
  containerCollect: {
    marginVertical: scale(8),
  },
  redStyle: theme => ({
    paddingVertical: scale(10),
    color: theme.colors.textRed,
  }),
  orangeStyle: theme => ({
    paddingVertical: scale(10),
    color: theme.colors.orangeDark,
  }),
  rowDistance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationStyle: { flexDirection: 'row' },
  pointDetail: { flexDirection: 'row', paddingHorizontal: scale(16) },
  buttonContainer: {
    flexDirection: 'row',
    width: WINDOW_WIDTH,
    padding: scale(8),
    paddingBottom: scale(16),
  },
  buttonCancel: theme => ({
    backgroundColor: theme.colors.greyDark2,
    width: scale(100),
    marginRight: scale(16),
  }),
  buttonReceive: { flex: 1 },
  timeLineStyle: { marginTop: scale(8) },
  rowTimeLineContainer: {
    //height: scale(60),
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(OrderDetailsScreen),
);
