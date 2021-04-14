import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useContext } from 'react';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import SafeContainer from '../../components/common/SafeContainer';
import ToolBar from '../../components/common/Toolbar';
import BackIcon from '../../components/common/BackIcon';
import {
  body3,
  caption,
  headline1,
  headline2,
  headline6,
  Text,
} from '../../components/common/Text';
import PrimaryButton from '../../components/common/PrimaryButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { scale } from '../../theme/dimens';
import useMergeState from '../../hooks/useMergeState';
import { RESET_PASSWORD_SCREEN } from '../../navigations/route-name'
const OTPScreen = ({ route, navigation }) => {
  const theme = useContext(ThemeContext);
  const t = useTranslation();
  const phone = route.params?.phone;
  const email = route.params?.email;
  const timerRef = useRef(null);
  const [state, setState] = useMergeState({
    time: { m: '0', s: '10' },
  });

  const timer = remaining => {
    remaining -= 1;
    if (remaining >= 0) {
      timerRef.current = setTimeout(() => {
        setState({ time: secondsToTime(remaining) });
        timer(remaining);
      }, 1000);
      return;
    }
    // Do timeout stuff here
  };

  const resetTime = () => {
    clearTimeout(timerRef.current);
    timer(10);
    setState({ time: secondsToTime(10) });
  };

  useEffect(() => {
    timer(10);
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  function secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds < 10 ? '0' + seconds : seconds,
    };
    return obj;
  }

  const goBack = () => {
    navigation.goBack();
    route?.params?.onGoBack(route?.params?.data);
  };
  const navigateToResetPasswordScreen = () => {
    navigation.navigate(RESET_PASSWORD_SCREEN);
  }
  return (
    <SafeContainer style={styles.container(theme)}>
      <ToolBar
        style={{ backgroundColor: theme.colors.white }}
        left={<BackIcon />}
        barStyle="dark-content"
        center={
          <Text type={headline2} style={styles.titleToolBar(theme)}>
            {t.translate('otp_screen')}
          </Text>
        }
      />
      <View style={styles.containerContent(theme)}>
        <Text type={caption} style={styles.subTitle}>
          {phone ? ('Vui lòng kiểm tra tin nhắn, mã OTP đã được gửi đến số điện thoại' +
            ' ' +
            phone) : ('Vui lòng kiểm tra email, mã OTP đã được gửi đến địa chỉ email của bạn' +
              ' ' +
              email)}
        </Text>
        <Text type={headline1} style={styles.time(theme)}>
          {state.time.m + ':' + state.time.s}
        </Text>
        <View style={styles.rowTime}>
          <Text type={body3} style={styles.notResponse}>
            {'Bạn không nhận được tin nhắn?'}
          </Text>
          <TouchableOpacity onPress={resetTime}>
            <Text type={headline6} style={styles.textReSend(theme)}>
              {'Gửi lại'}
            </Text>
          </TouchableOpacity>
        </View>

        <OTPInputView
          style={styles.otpStyle}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase(theme)}
          codeInputHighlightStyle={styles.underlineStyleHighLighted(theme)}
        // onCodeFilled={code => {
        //   goBack(code);
        // }}
        />
        <PrimaryButton title={'Tiếp theo'} onPress={navigateToResetPasswordScreen} />
      </View>
    </SafeContainer>
  );
};
const styles = StyleSheet.create({
  container: theme => ({
    backgroundColor: theme.colors.white,
    flex: 1,
  }),
  containerContent: theme => ({
    paddingHorizontal: scale(45),
    flex: 1,
  }),
  titleToolBar: theme => ({ color: theme.colors.orangeDark }),
  subTitle: {
    marginTop: scale(50),
    marginBottom: scale(16),
    textAlign: 'center',
  },
  notResponse: {
    marginVertical: scale(16),
    textAlign: 'center',
  },
  rowTime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpStyle: {
    height: scale(100),
    marginBottom: scale(20),
  },
  underlineStyleBase: theme => ({
    ...theme.typography.headline1,
    width: scale(40),
    height: scale(60),
    borderRadius: 0,
    borderColor: theme.colors.orangeDark,
    borderWidth: 0,
    borderBottomWidth: scale(3),
  }),
  underlineStyleHighLighted: theme => ({
    borderColor: theme.colors.orangeDark,
    borderBottomWidth: scale(3),
  }),
  textReSend: theme => ({
    marginLeft: scale(6),
    color: theme.colors.orangeDark,
  }),
  time: theme => ({ textAlign: 'center', color: theme.colors.orangeDark }),
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(OTPScreen),
);
