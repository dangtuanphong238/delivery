import React, { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Dash from 'react-native-dash';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Tooltip from 'rn-tooltip';
import ic_call from '../../assets/images/images/svg/ic_call.svg';
import ic_capture from '../../assets/images/images/svg/ic_capture.svg';
import ic_chat from '../../assets/images/images/svg/ic_chat.svg';
import ic_info from '../../assets/images/images/svg/ic_info.svg';
import ic_location_arrow from '../../assets/images/images/svg/ic_location_arrow.svg';
import ic_maps from '../../assets/images/images/svg/ic_maps.svg';
import order_details from '../../assets/images/images/svg/ic_order_details';
import BackIcon from '../../components/common/BackIcon';
import CardCall from '../../components/common/CardCall';
import IconMaterialOrImageOrSvg, {
  IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import {
  body2,
  body3,
  headline4,
  headline5,
  headline6,
  Text
} from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import NoteDialog from '../../components/dialog/NoteCustomerDialog';
import ProcessDialog from '../../components/dialog/ProcessDialog';
import useMergeState from '../../hooks/useMergeState';
import useTranslation from '../../i18n';
import { CALL_SCREEN, CHAT_SCREEN, HOME_SCREEN, MAPS_SCREEN, PROCESS_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale, WINDOW_WIDTH } from '../../theme/dimens';
import ProcessMaps from '../process/process.component/process.maps';
// import DETAIL_ORDER from '../process/process.detailoder';
import ProcessButton from './process.Button';
import SmallMaps from './process.smallmaps';
export default function ProcessScreen({ navigation, route }) {
  const t = useTranslation();
  const theme = useContext(ThemeContext);
  const layout = useWindowDimensions();

  let smallScreen = route.param?.screen;
  let smallCount = route.params?.count;
  const [openCallView, setopenCallView] = useState(false);
  let _count = 0;

  useEffect(() => {
    smallCount && setopenCallView(true);
  }, [smallCount]);

  const navigationScreen = (name, params) => () => {
    navigation.navigate(name, params);
  };

  const navigateToCallSreen = () => {
    setopenCallView(false);
    navigation.navigate(CALL_SCREEN, { screenName: PROCESS_SCREEN, count: smallCount ? smallCount : _count })
  };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: t.translate('takePoint'), titleBot: 'Bánh giò A&B' },
    { key: 'second', title: t.translate('takePoint1'), titleBot: 'Khách: Mei' },
    { key: 'third', title: t.translate('takePoint2'), titleBot: 'Khách: Ly' },
  ]);
  const [state, setState] = useMergeState({
    status: t.translate('arrivedAtTheDestination'),
    backgroundColor: theme.colors.orangeDark,
    count: 0,
    buttonDetailOrder: false,
    isVisibleProcess: false,
    isVisibleNote: false,
    isClicked: true,
  });

  const handlerProcessMaps = (clickStatus) => {
    setState({ isClicked: !state.isClicked });
  };
  const handlerProcessDialog = (clickStatus) => {
    if (state.count > 4 && clickStatus === true) {
      navigation.navigate(HOME_SCREEN);
    }
    setState({ isVisibleProcess: !state.isVisibleProcess });
  };
  const handlerNoteDialog = (clickStatus) => {
    setState({ isVisibleNote: !state.isVisibleNote });
  };

  const buttonDetail = () => {
    setState({ buttonDetailOrder: !state.buttonDetailOrder, isClicked: true });
  };
  const buttonProgress = () => {
    setState({ count: state.count + 1 });
    handleEventPress();
  };
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: '01. Fried Chicken (2Pc)',
      total_price: '136.000Đ',
      price: '108.800Đ',
      quantity: 2,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: '02. Hot wing (3Pc)',
      total_price: '49.000Đ',
      price: '39.000Đ',
      quantity: 1,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: '03. Combo Family A',
      total_price: '359.000Đ',
      price: '287.200Đ',
      quantity: 1,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571f29d72',
      name: '03. Combo Family A',
      total_price: '359.000Đ',
      price: '287.200Đ',
      quantity: 1,
    },
  ];

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      total_price={item.total_price}
    />
  );

  const Item = ({ name, quantity, price, total_price }) => (
    <View style={styles.item}>
      <View style={styles.txtName}>
        <Text type={headline5}>{name}</Text>
      </View>
      <View style={styles.txtQuantity}>
        <Text type={headline5}>{quantity}</Text>
      </View>
      <View style={styles.txtIntoMoney}>
        <Text type={headline5}>{price}</Text>
        <Text type={headline6} style={styles.txtTotalPrice(theme)}>
          {total_price}
        </Text>
      </View>
    </View>
  );

  const handleEventPress = () => {
    switch (state.count) {
      case 0:
        setState({ status: t.translate('hasTakenTheGoods') });
        break;
      case 1:
        setIndex(1);
        setState({ status: t.translate('arrivedAtTheIntersection'), backgroundColor: theme.colors.backgroundTabOrderHistoryHome3 });
        break;
      case 2:
        setState({ status: t.translate('successfulDelivery') });
        break;
      case 3:
        setIndex(2);
        setState({ status: t.translate('arrivedAtTheIntersection') });
        handlerProcessDialog();
        break;
      case 4:
        setState({ status: t.translate('successfulDelivery') });
        break;
      default:
        handlerProcessDialog();
        break;
    }

  };
  const navigationToTakePhoto = () => {
    alert('Chức năng đang được xây dựng')
  };

  const FirstRoute = () => (
    !state.buttonDetailOrder ?
      <ScrollView style={{ backgroundColor: theme.colors.white }}>
        {/* view1 */}
        <View style={styles.viewTabViewTop(theme)}>
          <View style={styles.btnArrowLocation}>
            <Text type={headline5}>#OR3021 - Bánh giò A&B Trần Hưng Đạo</Text>
            <TouchableOpacity onPress={navigationScreen(MAPS_SCREEN)}>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(16)}
                SVGIcon={ic_location_arrow}
              />
            </TouchableOpacity>
          </View>
          <Text type={body3} style={styles.txtAddressStore(theme)}>330 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q. 1, TP. Hồ Chí Minh</Text>
        </View>
        {/* View2 */}
        <View>
          {state.count !== 1 ? <View style={styles.viewCashAdvance}>
            <TouchableOpacity style={styles.btnToolTip}>
              <Text type={headline5} style={{ marginRight: scale(13) }}>{t.translate('cashAdvance')}</Text>
              <Tooltip
                // pointerColor={'red'}
                height={'auto'}
                width={'60%'}
                popover={<Text type={body2} style={styles.txtTips(theme)}>{t.translate('cash')}</Text>}>
                <IconMaterialOrImageOrSvg
                  type={IconType.Svg}
                  size={scale(16)}
                  SVGIcon={ic_info}
                />
              </Tooltip>
            </TouchableOpacity>
            <Text type={headline5} style={{ color: theme.colors.textRed }}>435.000Đ</Text>
          </View> : <View>
            <View style={styles.viewCash}>
              <TouchableOpacity style={styles.btnToolTip}>
                <Text type={headline5} style={{ marginRight: scale(10) }}>{t.translate('cashAdvance')}</Text>
                <Tooltip
                  height={'auto'}
                  width={'60%'}
                  popover={<Text type={body2} style={styles.txtTips(theme)}>{t.translate('cash')}</Text>}>
                  <IconMaterialOrImageOrSvg
                    type={IconType.Svg}
                    size={scale(16)}
                    SVGIcon={ic_info}
                  />
                </Tooltip>
              </TouchableOpacity>
              <Text type={headline5} >435.000Đ</Text>
            </View>
            <View style={[styles.viewCash, { marginBottom: scale(10) }]}>
              <TouchableOpacity style={styles.btnToolTip}>
                <Text type={headline5} style={{ marginRight: scale(13) }}>{t.translate('cash')}</Text>
                <Tooltip
                  height={'auto'}
                  width={'60%'}
                  popover={<Text type={body2} style={styles.txtTips(theme)}>{t.translate('cash')}</Text>}>
                  <IconMaterialOrImageOrSvg
                    type={IconType.Svg}
                    size={scale(16)}
                    SVGIcon={ic_info}
                  />
                </Tooltip>
              </TouchableOpacity>

              <Text type={headline5} style={{ color: theme.colors.textRed }}>30.000Đ</Text>
            </View>
          </View>
          }
        </View>
        {/* View3 */}
        <View style={styles.viewCustomer(theme)}>
          <View style={styles.viewArrowBottom}>
            <Text type={headline5} >Hữu Phú</Text>
            <TouchableOpacity onPress={handlerNoteDialog} style={{ paddingHorizontal: scale(10), paddingTop: scale(5) }}>
              {/* <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(16)}
                SVGIcon={ic_arrow_bottom}
              /> */}
              <Text type={body3} style={{ color: theme.colors.orangeDark }}>{t.translate('seeNote')}</Text>
            </TouchableOpacity>
          </View>
          <Text type={body3} style={{ marginVertical: scale(5), color: theme.colors.gray1 }}>{t.translate('sender')}</Text>
        </View>
      </ScrollView> :
      <SafeAreaView style={[styles.container, styles.viewDetailOrd(theme)]}>
        {/* <DETAIL_ORDER /> */}
        <Text type={headline4} style={styles.shopComfirmed(theme)}>{t.translate('shopHasConfirmedOrder')}</Text>
        <View style={styles.viewOrderDetail(theme)}>
          <Text type={headline4} style={{ marginBottom: scale(3) }}>{t.translate('orderDetails')}</Text>
          <Text type={body2}>{t.translate('numOfItems')} 3</Text>
        </View>
        <Dash style={styles.dashStyle(theme)} dashGap={scale(6)} dashColor={theme.colors.txtUnderLine} />
        <View style={styles.viewTitleRowList(theme)}>
          <Text type={body2} style={styles.txtMealName(theme)}>{t.translate('mealName')}</Text>
          <Text type={body2} style={styles.txtAmount(theme)}>{t.translate('quantity')}</Text>
          <Text type={body2} style={{ color: theme.colors.gray }}>{t.translate('intoMoney')}</Text>
        </View>
        <View style={styles.viewFlatList(theme)}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.viewTotalBill(theme)}>
          <View style={styles.viewTotalPrice}>
            <Text type={headline5}>{t.translate('totalBill')}</Text>
            <Text type={headline5}>544.000Đ</Text>
          </View>
          <View style={styles.viewTotalPrice}>
            <Text type={headline5}>{t.translate('shopDiscount')}</Text>
            <Text type={headline5}>- 108.800Đ</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: scale(23), }}>
          <View style={styles.viewTotalPrice}>
            <Text type={headline5} style={styles.textRed(theme)}>{t.translate('totalMoney')}</Text>
            <Text type={headline5} style={styles.textRed(theme)}>435.000Đ</Text>
          </View>
          <Text type={body3} style={styles.txtVat(theme)}>{t.translate('vat')}</Text>
        </View>

      </SafeAreaView>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: FirstRoute,
    third: FirstRoute,
  });
  const _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        tabStyle={styles.tabBar(theme, routes)}
        renderLabel={({ route, focused, color }) => (
          <View style={styles.viewAlign(focused)}>
            <Text type={headline4} style={styles.txtTabBot(theme, focused)}>
              {route.title}
            </Text>
            <Text type={headline5} style={styles.txtTabBot(theme, focused)}>
              {route.titleBot}
            </Text>
          </View>
        )}
        onTabPress={({ preventDefault }) => { preventDefault(); }}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        {/* View ToolBar Top */}
        <ToolBar
          style={{ backgroundColor: theme.colors.white }}
          left={<BackIcon />}
          barStyle="dark-content"
          center={
            <Text type={headline4}>
              Đơn #OR3021
            </Text>
          }
        />

        {/* View TabView */}
        {state.isClicked && <View style={styles.containerTop}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={_renderTabBar}
            swipeEnabled={false}
          />
        </View>}

        {/* View Maps or Small Maps */}
        {!state.buttonDetailOrder ? <View style={styles.viewMap}>
          <ProcessMaps handleClickParent={handlerProcessMaps} isShowZoom={true} isShowSatellite={true} />
        </View> : <View style={styles.viewSmallMap}>
          <SmallMaps />
        </View>}

        {/* View Button Bottom */}
        <View style={styles.containerBottom}>
          <View style={styles.viewButton}>
            <ProcessButton icon={ic_call} title={'call'} onPress={navigateToCallSreen} />
            <ProcessButton icon={ic_chat} title={'chat'} onPress={navigationScreen(CHAT_SCREEN)} />
            <ProcessButton icon={ic_capture} title={'takeAPhoto'} onPress={navigationToTakePhoto} />
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity style={[styles.btnLeft(theme), { backgroundColor: state.backgroundColor }]} onPress={buttonProgress}>
              <Text type={headline5} style={styles.txtOrderDetail(theme)}>{state.status}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRight(theme)} onPress={buttonDetail}>
              <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(22)}
                SVGIcon={!state.buttonDetailOrder ? order_details : ic_maps}
              />
              <Text type={headline6} style={styles.txtOrderDetail(theme)}>
                {!state.buttonDetailOrder ? t.translate('detailOrder')
                  : t.translate('maps')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {state.isVisibleNote && <NoteDialog handleClickParent={handlerNoteDialog} />}
        {state.isVisibleProcess && <ProcessDialog handleClickParent={handlerProcessDialog} />}
      </View>
      {openCallView && <CardCall getStatus={(param) => { setopenCallView(false) }} />}
    </>
  );
}

const styles = StyleSheet.create({
  viewTotalBill: theme => ({
    marginHorizontal: scale(23),
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1,
    paddingBottom: scale(10),
  }),
  viewSmallMap: { position: 'absolute', top: '45%', left: '65%' },
  viewTotalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scale(10),
    paddingBottom: scale(3),
  },
  txtVat: theme => ({ color: theme.colors.greyLight1 }),
  textRed: theme => ({ color: theme.colors.textRed }),
  txtTotalPrice: theme => ({
    textDecorationLine: 'line-through',
    color: theme.colors.gray,
  }),
  txtMealName: theme => ({ flex: 1, color: theme.colors.gray }),
  txtAmount: theme => ({ flex: 0.5, color: theme.colors.gray }),
  viewTitleRowList: theme => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(23),
    paddingTop: scale(20),
    paddingBottom: scale(10),
    borderBottomColor: theme.colors.border, borderBottomWidth: 1,
  }),
  dashStyle: theme => ({
    width: '90%',
    alignSelf: 'center',
  }),
  viewOrderDetail: theme => ({
    borderTopColor: theme.colors.border,
    borderTopWidth: 1,
    paddingLeft: scale(33),
    paddingVertical: scale(10),
  }),
  shopComfirmed: theme => ({
    alignSelf: 'center',
    marginVertical: scale(5),
    color: theme.colors.textRed,
  }),
  viewDetailOrd: theme => ({ backgroundColor: theme.colors.white }),
  txtOrderDetail: theme => ({
    color: theme.colors.white,
  }),
  btnRight: theme => ({
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: theme.colors.gray1,
  }),
  btnLeft: theme => ({
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    backgroundColor: theme.colors.orangeDark,
  }),
  viewButton: { flexDirection: 'row', flex: 1, justifyContent: 'center' },
  containerBottom: { height: scale(140), zIndex: 1 },
  container: { flex: 1, backgroundColor: 'white' },
  containerTop: { flex: 1.5, backgroundColor: 'white' },
  tabBar: (theme) => ({ backgroundColor: theme.colors.white, width: WINDOW_WIDTH / 3, paddigTop: scale(20) }),
  viewAlign: (focused) => ({ alignItems: 'center' }),
  txtTabBot: (theme, focused) => ({
    color: focused ? theme.colors.orangeDark : theme.colors.gray1,
    margin: scale(3),
  }),
  txtTips: theme => ({
    color: theme.colors.white,
  }),
  viewTabViewTop: theme => ({
    backgroundColor: theme.colors.tabTapped,
    paddingHorizontal: scale(20),
    paddingVertical: scale(15),
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  }),
  btnArrowLocation: { flexDirection: 'row', justifyContent: 'space-between' },
  txtAddressStore: theme => ({
    marginRight: '10%',
    color: theme.colors.gray1,
  }),
  viewCashAdvance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(20),
  },
  btnToolTip: { flexDirection: 'row', alignItems: 'center' },
  viewCash: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    paddingTop: scale(9),
  },
  viewCustomer: theme => ({
    paddingHorizontal: scale(20),
    paddingTop: scale(10),
    justifyContent: 'center',
    borderTopColor: theme.colors.border,
    borderTopWidth: 1,
  }),
  viewArrowBottom: { flexDirection: 'row', justifyContent: 'space-between' },
  viewMap: { flex: scale(1) },
  //detail
  item: {
    flexDirection: 'row',
    marginVertical: scale(5),
    alignItems: 'center',
  },
  txtName: { flex: 2, alignItems: 'flex-start' },
  txtQuantity: { flex: 1, alignItems: 'center' },
  txtIntoMoney: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  viewFlatList: theme => ({
    flex: 0.9,
    paddingBottom: scale(10),
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1,
    marginHorizontal: scale(20)
  }),
});

