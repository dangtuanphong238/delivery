import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabbarComponent from '../components/common/TabbarComponent';
import TabbarIcon from '../components/common/TabbarIcon';
import useTranslation from '../i18n';
import HomeScreen from '../screens/home/home.screen';
import HistoryScreen from '../screens/history/history.screen';
import ic_account from '../../src/assets/images/icons/svg/ic_account.svg';
import ic_bike from '../../src/assets/images/icons/svg/ic_bike.svg';
import ic_money from '../../src/assets/images/icons/svg/ic_money.svg';
import { ACCOUNT_SCREEN, HISTORY_SCREEN, HOME_SCREEN } from './route-name';
import AccountScreen from '../screens/account/account.screen';
// import DeliveredScreen from '../screens/history/dilivered.screen'
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const t = useTranslation();
  const generatorIcon = routeName => {
    switch (routeName) {
      case HISTORY_SCREEN:
        return ic_money;
      case HOME_SCREEN:
        return ic_bike;
      case ACCOUNT_SCREEN:
        return ic_account;
      default:
        break;
    }
  };

  return (
    <Tab.Navigator
      tabBar={props => <TabbarComponent {...props}></TabbarComponent>}
      backBehavior={'initialRoute'}
      initialRouteName={HOME_SCREEN}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconTab = generatorIcon(route.name);
          return <TabbarIcon IconTab={iconTab} size={size} focused={focused} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={HISTORY_SCREEN}
        component={HistoryScreen}
        options={{
          tabBarLabel: t.translate('history_screen'),
        }}
      />
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarLabel: t.translate('home_screen'),
        }}
      />
      <Tab.Screen
        name={ACCOUNT_SCREEN}
        component={AccountScreen}
        options={{
          tabBarLabel: t.translate('account_screen'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
