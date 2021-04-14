import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import BackIcon from '../../components/common/BackIcon';
import PrimaryButton from '../../components/common/PrimaryButton';
import SafeContainer from '../../components/common/SafeContainer';
import { caption, headline2, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { BOTTOM_TAB, HOME_SCREEN, OTP_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import Countries from './verify.component/Countries';
import DropDownPicker from './verify.component/DropdownPicker';
const VerifyScreen = ({ route, navigation }) => {
  const theme = useContext(ThemeContext);
  const t = useTranslation();

  useEffect(() => { }, []);

  // const onGoBack = data => {
  //   //Confirm OTP to login success
  //   navigation.navigate(BOTTOM_TAB);
  // };
  const phoneNumber = "0399855825"
  // const navigateToOTP = () => {
  //   navigation.navigate(OTP_SCREEN, { phone: phoneNumber });
  // };

  const navigateHome = () => {
    navigation.navigate(HOME_SCREEN);
  };

  const [value, setValue] = useState('Algeria')
  const [countries, setCountries] = useState(Countries)
  return (
    <SafeContainer style={styles.container(theme)}>
      <ToolBar
        style={{ backgroundColor: theme.colors.white }}
        left={<BackIcon />}
        barStyle="dark-content"
        center={
          <Text type={headline2} style={styles.titleToolBar(theme)}>
            {t.translate('verify_screen')}
          </Text>
        }
      />
      <View style={styles.containerContent(theme)}>
        <Text type={caption} style={styles.subTitle}>
          {'Nhập số điện thoại của bạn, chúng tôi sẽ gửi mã OTP cho bạn'}
        </Text>
        <View>
          <View style={styles.containerInput}>
            <DropDownPicker />
          </View>
          <PrimaryButton title={'Tiếp theo'}
            onPress={navigateHome}
            style={styles.buttonNextStyle()}
          />
        </View>
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
  }),
  containerInput: {
    alignItems: 'center',
    paddingHorizontal: scale(10),
    borderRadius: scale(10),
    marginVertical: scale(25),
  },
  titleToolBar: theme => ({ color: theme.colors.orangeDark }),
  subTitle: {
    marginVertical: scale(16),
    textAlign: 'center',
  },
  buttonNextStyle: () => ({
    width: scale(250),
    alignSelf: 'center',
    position: 'absolute',
    top: scale(125),
    zIndex: 1,
  })
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(VerifyScreen),
);
