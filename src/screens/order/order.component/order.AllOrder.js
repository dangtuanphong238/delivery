import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { headline5, headline6, Text } from '../../../components/common/Text';
import useTranslation from '../../../i18n';
import { scale, WINDOW_WIDTH } from '../../../theme/dimens';
import { ThemeContext } from '../../../theme';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ORDER_STATUS } from '../../../configs/app.config';
import ListOrder from '../../../components/common/ListOrder';
import ToolBar from '../../../components/common/Toolbar';
import BackIcon from '../../../components/common/BackIcon';

const OrderAllOrder = () => {
  const t = useTranslation();
  const theme = useContext(ThemeContext);
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

  const FirstRoute = () => <ListOrder data={data} screenType={1} />;

  const SecondRoute = () => <ListOrder data={dataDelivering} screenType={1} />;

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
      style={{ backgroundColor: theme.colors.greyLight2 }}
    />
  );

  return (
    <View style={styles.container}>
      <ToolBar
        style={{ backgroundColor: theme.colors.white }}
        left={<BackIcon />}
        barStyle="dark-content"
        center={<Text type={headline5}>{t.translate('pointOrder')}</Text>}
      />
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

export default React.memo(OrderAllOrder);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTab: { flexDirection: 'row' },
  textWhite: theme => ({
    color: theme.colors.white,
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
});
