import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { connect } from 'react-redux';
import { isFirstInstallSelector } from '../selectors/settings.selectors';
import BottomTab from './bottom-tab.navigator';
import { navigationRef } from './root.navigator';
import OnboardingScreen from '../screens/onboard/onboarding.screen';
import {
  FORGOT_PASSWORD_SCREEN,
  BOTTOM_TAB,
  ONBOARDING_SCREEN,
  ORDER_SCREEN,
  VERIFY_SCREEN,
  AUTH_SCREEN,
  OTP_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  ORDER_DETAILS_SCREEN,
  ORDER_DELIVERED_DETAILS_SCREEN,
  PROCESS_SCREEN,
  // DETAIL_ORDER,
  RESET_PASSWORD_SCREEN,
  CHAT_SCREEN,
  CALL_SCREEN,
  PROFILE_SCREEN,
  ACCOUNT_SCREEN,
  MAPS_SCREEN,
  NOTIFICATION_SCREEN,
  FAQ_SCREEN,
  SETTING_SCREEN,
  CONTACT_SCREEN,
  FAQ_ITEM_SCREEN,
  SUPPORT_SCREEN,
  POINT_HISTORY_SCREEN,
  SUPPORT_HISTORY_SCREEN,
  DELIVERED_SCREEN,
  INCOME_HISTORY_SCREEN,
  TASK_POINT_SCREEN,
} from './route-name';
import OrderScreen from '../screens/order/order.screen';
import ForgotPasswordScreen from '../screens/auth/forgotPassword.sceen';
import VerifyScreen from '../screens/auth/verify.screen';
import OTPScreen from '../screens/auth/otp.screen';
import AuthScreen from '../screens/auth/auth.screen';
import LoginScreen from '../screens/auth/login.screen';
import RegisterScreen from '../screens/auth/register.screen';
import OrderDetailsScreen from '../screens/order/order-details.screen';
import ProcessScreen from '../screens/process/process.screen';
import ResetPasswordScreen from '../screens/auth/resetPassword.screen';
import ChatScreen from '../screens/contact/chat.screen';
import CallScreen from '../screens/contact/call.screen';
import ProfileScreen from '../screens/account/account.profile';
import MapsScreen from '../screens/maps/maps.screen';
import AccountScreen from '../screens/account/account.screen';
import NotificationScreen from '../screens/notification/notification.screen';
import OrderDeliveredDetailsScreen from '../screens/order/order-delievered-details.screen';
import FaqScreen from '../screens/faq/faq.screen';
import SettingScreen from '../screens/setting/setting.screen';
import ContactScreen from '../screens/support/contact.screen';
import FaqItemScreen from '../screens/faq/faq.item';
import SupportScreen from '../screens/support/support.screen';
import PointHistoryScreen from '../screens/history/point.history.screen';
import SupportHistoryScreen from '../screens/support/support.history';
import DeliveredScreen from '../screens/history/dilivered.screen';
import IncomeHistoryScreen from '../screens/history/income_history.screen';
import TaskPointScreen from '../screens/history/task_point.screen';

const Stack = createStackNavigator();
const MainRouter = ({ isFirstInstall }) => {
  const renderRouter = () => {
    return (
      <>
        <Stack.Screen name={ONBOARDING_SCREEN} component={OnboardingScreen} />
        <Stack.Screen name={BOTTOM_TAB} component={BottomTab} />
        <Stack.Screen name={ORDER_SCREEN} component={OrderScreen} />
        <Stack.Screen name={AUTH_SCREEN} component={AuthScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen name={VERIFY_SCREEN} component={VerifyScreen} />
        <Stack.Screen name={OTP_SCREEN} component={OTPScreen} />
        <Stack.Screen name={FORGOT_PASSWORD_SCREEN} component={ForgotPasswordScreen} />
        <Stack.Screen name={RESET_PASSWORD_SCREEN} component={ResetPasswordScreen} />
        <Stack.Screen name={CHAT_SCREEN} component={ChatScreen} />
        <Stack.Screen name={CALL_SCREEN} component={CallScreen} />
        <Stack.Screen
          name={ORDER_DETAILS_SCREEN}
          component={OrderDetailsScreen}
        />
        <Stack.Screen
          name={ORDER_DELIVERED_DETAILS_SCREEN}
          component={OrderDeliveredDetailsScreen}
        />
        <Stack.Screen name={DELIVERED_SCREEN} component={DeliveredScreen} />
        <Stack.Screen name={INCOME_HISTORY_SCREEN} component={IncomeHistoryScreen} />
        <Stack.Screen name={PROCESS_SCREEN} component={ProcessScreen} />
        {/* <Stack.Screen name={DETAIL_ORDER} component={DetailOrder} /> */}
        <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
        <Stack.Screen name={MAPS_SCREEN} component={MapsScreen} />
        <Stack.Screen name={ACCOUNT_SCREEN} component={AccountScreen} />
        <Stack.Screen name={NOTIFICATION_SCREEN} component={NotificationScreen} />
        <Stack.Screen name={FAQ_SCREEN} component={FaqScreen} />
        <Stack.Screen name={SETTING_SCREEN} component={SettingScreen} />
        <Stack.Screen name={CONTACT_SCREEN} component={ContactScreen} />
        <Stack.Screen name={FAQ_ITEM_SCREEN} component={FaqItemScreen} />
        <Stack.Screen name={SUPPORT_SCREEN} component={SupportScreen} />
        <Stack.Screen name={POINT_HISTORY_SCREEN} component={PointHistoryScreen} />
        <Stack.Screen name={SUPPORT_HISTORY_SCREEN} component={SupportHistoryScreen} />
        <Stack.Screen name={TASK_POINT_SCREEN} component={TaskPointScreen} />

      </>
    );
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={isFirstInstall ? ONBOARDING_SCREEN : BOTTOM_TAB}
      >
        {renderRouter()}
        {/* <Stack.Screen name={DETAIL_ORDER} component={DetailOrder} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  isFirstInstall: isFirstInstallSelector(state),
});

export default connect(mapStateToProps, null)(MainRouter);
