import React, { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import ic_arrow_right from '../../assets/images/images/svg/ic_arrow_right_gray';
import ic_history_transfer from '../../assets/images/images/svg/ic_history_transfer';
import ic_history_transfer_green from '../../assets/images/images/svg/ic_history_transfer_green';
import ic_reward_yellow from '../../assets/images/images/svg/ic_reward_yellow';
import IconMaterialOrImageOrSvg, {
  IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import SkeletonListHistoryIncome from '../../components/common/SkeletonListHistoryIncome';
import { body2, headline2, headline4, headline5, headline7, overline, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { DELIVERED_SCREEN, INCOME_HISTORY_SCREEN, POINT_HISTORY_SCREEN, TASK_POINT_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import ButtonRequest from '../support/component/button.request';


function HistoryScreen({ route, navigation }) {
  useEffect(() => { }, []);
  const theme = useContext(ThemeContext);
  const t = useTranslation();
  const [onReady, setReady] = useState(false);
  const navigationScreen = (name, params) => () => {
    navigation.navigate(name, params);
  };

  const data = [
    {
      id: 1,
      title: t.translate('incomeToday'),
      value: '100.000Đ',
      num: 9,
      background: theme.colors.backgroundTabOrderHistoryHome1,
    },
    {
      id: 2,
      title: t.translate('incomeYesterday'),
      value: '125.000Đ',
      num: 5,
      background: theme.colors.backgroundTabOrderHistoryHome2,
    },
  ];

  const [dataHistoryIncome, setDataHistoryIncome] = useState([]);

  setTimeout(() => {
    setDataHistoryIncome([
      {
        id: 1,
        title1: 'Shipping Payment',
        title2: 'Payment for looking IOS400...',
        price: '+ 42.000Đ',
      },
      {
        id: 2,
        title1: 'Fund Tranfer',
        title2: 'Tranfer money from cash...',
        price: '+ 15.000Đ',
      },
      {
        id: 3,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
      {
        id: 4,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
      {
        id: 5,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
      {
        id: 6,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
      {
        id: 7,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
      {
        id: 8,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
      {
        id: 9,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
      {
        id: 10,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
      {
        id: 11,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
      {
        id: 12,
        title1: 'Pay',
        title2: 'Driver Incentives...',
        price: '+ 30.000Đ',
      },
    ]);
  }, 600);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => { navigation.navigate(INCOME_HISTORY_SCREEN) }}>
        <View style={styles.containerItem(item, index, data.length, theme)}>
          <Text type={headline7} style={styles.textWhite(theme)}>
            {item.title}
          </Text>
          <Text type={headline4} style={styles.textWhite(theme)}>
            {item.value}
          </Text>
          <View style={styles.flex1}>
            <Text
              type={overline}
              style={[styles.textWhite(theme), styles.txtUnderLine]}
            >
              {t.translate('seeDetails')}
            </Text>
            <Text
              type={overline}
              style={[styles.textWhite(theme), styles.txtNumDeliveries]}
            >
              {item.num} {t.translate('numOfDeliveries')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemHistoryIncome = ({ item, index }) => {
    return (
      <View style={styles.viewItemHistoryIncome(theme)}>
        <View style={styles.cellHistoryIncomeTop}>
          <Text type={headline5} style={{ marginBottom: scale(15) }}>{item.title1}</Text>
          <Text type={headline5} >{item.title2}</Text>
        </View>
        <View style={styles.cellHistoryIncomeCenter}>
          <Text type={headline5} style={{ marginBottom: scale(15) }}>{item.price}</Text>
          <TouchableOpacity style={{ borderRadius: scale(12), backgroundColor: theme.colors.green }}>
            <Text type={body2} style={{ paddingHorizontal: scale(10), paddingVertical: scale(3), color: theme.colors.white }}>Thu hộ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cellHistoryIncomeBot}>
          <TouchableOpacity>
            <IconMaterialOrImageOrSvg
              type={IconType.Svg}
              size={scale(30)}
              SVGIcon={ic_arrow_right}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const keyExtractor = (item, index) => item.id.toString();

  return (
    <SafeAreaView style={styles.container} >
      <ToolBar
        style={{ backgroundColor: theme.colors.white }}
        barStyle="dark-content"
        center={
          <Text type={headline2} style={styles.titleToolBar(theme)}>
            {t.translate('history_screen')}
          </Text>
        }
      />
      <ScrollView style={styles.container}>
        <View style={styles.swiperView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={keyExtractor}
            data={data}
            horizontal={true}
            renderItem={renderItem}
          />
        </View>
        <View style={{
          backgroundColor: theme.colors.white,
        }}>
          <Text type={headline4} style={styles.txtTitle}>{t.translate('fastAccess')}</Text>
          <View style={styles.viewButtonRequest(theme)}>
            <ButtonRequest onPress={navigationScreen(DELIVERED_SCREEN)} icon={ic_history_transfer} title={t.translate('processHistory')} />
            <ButtonRequest onPress={navigationScreen(TASK_POINT_SCREEN)} icon={ic_reward_yellow} title={t.translate('taskPointReward')} />
            <ButtonRequest onPress={navigationScreen(POINT_HISTORY_SCREEN)} icon={ic_history_transfer_green} title={t.translate('historyRewardPoint')} />
          </View>
        </View>
        <View style={styles.viewIncome}>
          <Text type={headline4} style={styles.txtTitle}>{t.translate('income_history_screen')}</Text>
          <TouchableOpacity style={styles.btnShowAll} onPress={navigationScreen(INCOME_HISTORY_SCREEN)}>
            <Text type={body2} style={styles.txtShowAll(theme)}>{t.translate('viewAll')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewListHistoryIncome(theme)}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={keyExtractor}
            data={dataHistoryIncome.splice(0, 10)}
            horizontal={false}
            renderItem={renderItemHistoryIncome}
            ListEmptyComponent={
              <View style={{ marginHorizontal: scale(20) }}>
                <SkeletonListHistoryIncome numOfArray={3}/>
              </View>}
          />
        </View>

      </ScrollView>

    </SafeAreaView>);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleToolBar: theme => ({
    color: theme.colors.black,
  }),
  containerItem: (item, index, length, theme) => ({
    width: scale(200),
    height: scale(85),
    padding: scale(8),
    backgroundColor: item.background,
    borderRadius: scale(8),
    marginRight: index !== length - 1 ? scale(12) : scale(0),
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  }),
  textWhite: theme => ({
    color: theme.colors.white,
    marginVertical: scale(2),
  }),
  swiperView: {
    height: scale(85),
    marginVertical: scale(22),
    marginHorizontal: scale(21),
  },
  txtNumDeliveries: { marginLeft: scale(65) },
  txtUnderLine: {
    textDecorationLine: 'underline',
  },
  flex1: { flex: 1, flexDirection: 'row' },
  viewButtonRequest: theme => ({
    height: 'auto',
    paddingVertical: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1,
  }),
  viewIncome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTitle: {
    alignItems: 'flex-start',
    marginVertical: scale(10),
    marginLeft: scale(32),
  },
  btnShowAll: {
    alignItems: 'flex-end',
    paddingRight: scale(26),
  },
  txtShowAll: theme => ({
    marginVertical: scale(10),
    marginLeft: scale(32),
    textDecorationLine: 'underline',
    color: theme.colors.txtUnderLine,
  }),
  viewItemHistoryIncome: theme => ({
    flexDirection: 'row',
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1,
    paddingVertical: scale(15),
    marginHorizontal: scale(20),
  }),
  cellHistoryIncomeTop: {
    flex: 4.5,
    justifyContent: 'center',
  },
  cellHistoryIncomeCenter: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cellHistoryIncomeBot: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  viewListHistoryIncome: theme => ({
    flex: 1, height: 'auto',
    backgroundColor: theme.colors.white,
  }),
});

export default connect(null, null)(HistoryScreen);
