import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import ListOrder from '../../../components/common/ListOrder';
import {
  body3,
  headline4,
  headline5,
  headline6,
  Text
} from '../../../components/common/Text';
import { ORDER_STATUS } from '../../../configs/app.config';
import useTranslation from '../../../i18n';
import { ORDER_SCREEN } from '../../../navigations/route-name';
import { ThemeContext } from '../../../theme';
import { scale, WINDOW_WIDTH } from '../../../theme/dimens';

const HomeAllOrder = () => {
  const t = useTranslation();
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const initialLayout = { width: WINDOW_WIDTH };
  const [data, setData] = useState([]);
  const dataTemp = [];
  useEffect(() => {
    setTimeout(() => {
      dataTemp.push(
        {
          id: '#OR2150',
          title: 'Giao nhanh',
          status: 3,
          distance: '2.5 km',
          cost: 30000,
          newCost: 20000,
          price: 1000000,
          pointReceive: 10,
          data: [
            {
              //time: '09:00',
              title: '330 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q. 1, TP. Hồ Chí Minh',
              circleColor: theme.colors.dotActive,
            },
            {
              //time: '10:45',
              title:
                'ACV - Tòa nhà TCT Cảng Hàng Không Việt Nam - 58 Trường Sơn, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
            },
          ],
        },
        {
          id: '#OR2151',
          title: 'Giao 4h',
          status: 4,
          distance: '5.5 km',
          cost: 26000,
          price: 800000,
          pointReceive: 8,
          data: [
            {
              //time: '09:00',
              title: '330 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q. 1, TP. Hồ Chí Minh',
              circleColor: theme.colors.dotActive,
            },
            {
              //time: '10:45',
              title:
                '56 Yên thế, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
            },
            {
              //time: '10:45',
              title:
                'ACV - Tòa nhà TCT Cảng Hàng Không Việt Nam - 58 Trường Sơn, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
            },
          ],
        },
        {
          id: '#OR2152',
          title: 'Giao nhanh',
          status: 4,
          distance: '1.5 km',
          cost: 10000,
          newCost: 20000,
          price: 500000,
          pointReceive: 5,
          data: [
            {
              //time: '09:00',
              title: '330 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q. 1, TP. Hồ Chí Minh',
              circleColor: theme.colors.dotActive,
            },
            {
              //time: '10:45',
              title:
                '56 Yên thế, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
            },
            {
              //time: '10:45',
              title:
                '100 Yên thế, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
            },
            {
              //time: '10:45',
              title:
                'ACV - Tòa nhà TCT Cảng Hàng Không Việt Nam - 58 Trường Sơn, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
            },
          ],
        },
      );
      setData(dataTemp);
    }, 600);
  }, []);


  function getDelivering() {
    return data.filter(item => item.status === ORDER_STATUS.DELIVERING);
  }
  const dataDelivering = getDelivering(data);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Tất cả' },
    { key: 'second', title: 'Đang giao' },
  ]);

  const FirstRoute = () => <ListOrder data={data} />;

  const SecondRoute = () => <ListOrder data={dataDelivering} />;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({ route, focused, color }) => (
        <View style={styles.containerTab}>
          <Text type={headline5} style={styles.titleTab(focused, theme)}>
            {route.title}
          </Text>
          <View style={styles.circlePoint(focused, theme)}>
            <Text type={headline6} style={styles.textWhite(theme)}>
              {route.key === 'first' ? data.length : dataDelivering.length}
            </Text>
          </View>
        </View>
      )}
      indicatorStyle={styles.indicatorStyle(theme)}
      style={{ backgroundColor: theme.colors.backgroundHome }}
    />
  );
  const navigationScreen = (name, params) => () => {
    navigation.navigate(name, params);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigationScreen(ORDER_SCREEN)}>
        <View style={styles.viewAll(theme)}>
          <Text type={headline4}>{t.translate('pointOrder')}</Text>
          <Text type={body3} style={styles.underline}>
            {t.translate('viewAll')}
          </Text>
        </View>
      </TouchableOpacity>

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
};

export default React.memo(HomeAllOrder);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTab: { flexDirection: 'row' },
  textWhite: theme => ({
    color: theme.colors.white,
  }),
  viewAll: theme => ({
    backgroundColor: theme.colors.greyLight3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(8),
    paddingVertical: scale(8),
    marginTop: scale(4),
    marginBottom: scale(4),
  }),
  titleTab: (focused, theme) => ({
    color: focused ? theme.colors.orangeDark : theme.colors.greyDark2,
  }),
  indicatorStyle: theme => ({
    backgroundColor: theme.colors.orangeDark,
    height: 4,
  }),
  circlePoint: (focused, theme) => ({
    width: scale(22),
    height: scale(22),
    borderRadius: scale(22),
    marginLeft: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: focused ? theme.colors.orangeDark : theme.colors.greyDark2,
  }),
  underline: { textDecorationLine: 'underline' },
});
