import CheckBox from '@react-native-community/checkbox';
import React, { useContext, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import ic_apple from '../../assets/images/images/svg/ic_apple.svg';
import ic_google from '../../assets/images/images/svg/ic_google.svg';
import logo from '../../assets/images/images/svg/logo.svg';
import BackIcon from '../../components/common/BackIcon';
import IconMaterialOrImageOrSvg, { IconType } from '../../components/common/IconMaterialOrImageOrSvg';
import PrimaryButton from '../../components/common/PrimaryButton';
import SafeContainer from '../../components/common/SafeContainer';
import { caption, headline2, headline5, overline, Text } from '../../components/common/Text';
import { password, TextInput } from '../../components/common/TextInput';
import ToolBar from '../../components/common/Toolbar';
import ValidateTextInput from '../../components/common/ValidateTextInput';
import useTranslation from '../../i18n';
import { BOTTOM_TAB, FORGOT_PASSWORD_SCREEN, HOME_SCREEN, REGISTER_SCREEN } from '../../navigations/route-name';
import { isFirstInstallSelector } from '../../selectors/settings.selectors';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
const LoginScreen = ({ route, navigation, isFirstInstall }) => {
  const theme = useContext(ThemeContext);
  const t = useTranslation();
  // useEffect(() => { }, []);
  let _companyCode, _password, _userId
  const navigateHome = () => {
    if (validateFieldPassword()) {
      isFirstInstall ? navigation.navigate(BOTTOM_TAB) : navigation.navigate(HOME_SCREEN);
    }
  };
  const navigationScreen = (name, params) => () => {
    navigation.navigate(name, params);
  };

  const _txtRemember = t.translate('rememberPassword');
  const _forgot = t.translate('forgetPassword');
  const banner = () => {
    return (
      <View style={styles.bannerStyle()}>
        <IconMaterialOrImageOrSvg
          type={IconType.Svg}
          size={scale(75)}
          SVGIcon={logo}
        />
        <Text style={styles.centerStyle()} type={headline2} >OOD.VN</Text>
        <Text style={styles.centerStyle()} type={overline}> Delivery Consulting</Text>
      </View>
    )
  }
  const buttonReferences = (icon) => {
    return (
      <TouchableOpacity style={styles.buttonReferences(theme)}>
        <IconMaterialOrImageOrSvg
          style={styles.centerStyle()}
          type={IconType.Svg}
          size={scale(30)}
          SVGIcon={icon}
        />
      </TouchableOpacity>
    )
  }
  const formButtonReferences = () => {
    return (
      <View style={styles.formCenterStyle2()}>
        {buttonReferences(ic_google)}
        {buttonReferences(ic_apple)}
      </View>
    )
  }
  const formForgotPassword = () => {
    return (
      <View style={styles.formCenterStyle2()}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          tintColors={{ true: theme.colors.orangeDark, false: theme.colors.textHint2 }}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={styles.txtRemember(theme)} type={caption}>{_txtRemember}</Text>
        <TouchableOpacity onPress={navigationScreen(FORGOT_PASSWORD_SCREEN)}>
          <Text style={styles.txtForgot(theme)} type={caption}>{_forgot}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const buttonRegister = () => {
    return (
      <TouchableOpacity style={styles.buttonRegisterStyle()} onPress={navigationScreen(REGISTER_SCREEN)}>
        <Text type={headline5} style={styles.txtRegister(theme)} >Đăng ký</Text>
      </TouchableOpacity>
    )
  }
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [validatePassword, setvalidatePassword] = useState({ name: '', check: false })
  const validateFieldPassword = () => {
    let validate = ValidateTextInput({ type: password, value: _password })
    if (validate.check) {
      setvalidatePassword(validate)
      return false
    } else {
      return true
    }
  }
  return (
    <SafeContainer style={styles.container(theme)}>
      <ToolBar
        style={{ backgroundColor: theme.colors.white }}
        left={<BackIcon />}
        barStyle="dark-content"
        center={
          <Text type={headline2} style={styles.titleToolBar(theme)}>
            {t.translate('login_screen')}
          </Text>
        }
      />
      <ScrollView>
        <View style={styles.formCenterStyle1()}>
          {banner()}
          <TextInput
            styleView={styles.viewTxtCompanyCodeStyle}
            title={t.translate('companyCode')}
            getValue={(param) => { _companyCode = param; }}
            placeholder={t.translate('placeholdeCompannyCode')}
            styleTextInput={styles.textInputStyle()}
          />
          <TextInput
            getValue={(param) => { _userId = param; }}
            styleView={styles.viewTextInputStyle}
            title={t.translate('userID')}
            placeholder={t.translate('placeholderUserID')}
            styleTextInput={styles.textInputStyle()}
          />
          <TextInput
            messageError={validatePassword}
            styleView={styles.viewTextInputStyle}
            getValue={(param) => { _password = param; }}
            title={t.translate('password')}
            type={password}
            placeholder={t.translate('placeholderPassword')}
            styleTextInput={styles.textInputStyle()}
          />
          {formForgotPassword()}
          <PrimaryButton style={styles.buttonLogin(theme)} title={t.translate('login')} onPress={navigateHome} />
          {formButtonReferences()}
          {buttonRegister()}
        </View>
      </ScrollView>
    </SafeContainer >
  );
};

const styles = StyleSheet.create({
  formCenterStyle1: () => ({
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }),
  formCenterStyle2: () => ({
    flex: 1,
    marginTop: scale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  }),
  centerStyle: () => ({
    textAlign: 'center',
  }),
  container: theme => ({
    backgroundColor: theme.colors.white,
    flex: 1,
  }),
  titleToolBar: theme => ({
    color: theme.colors.orangeDark
  }),
  buttonLogin: theme => ({
    flex: 1,
    width: scale(200),
    backgroundColor: theme.colors.orangeDark,
    marginTop: scale(15),
  }),
  buttonReferences: theme => ({
    backgroundColor: theme.colors.white,
    width: scale(50),
    height: scale(50),
    borderWidth: scale(2),
    borderColor: theme.colors.borderReferenceButton,
    borderRadius: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(20),
    marginRight: scale(20),
  }),
  buttonRegisterStyle: () => ({
    flex: 1,
    padding: scale(10)
  }),
  txtRegister: theme => ({
    textAlign: 'center',
    color: theme.colors.orangeDark,
    fontStyle: 'italic',
    fontWeight: '700',
    textDecorationLine: 'underline',
  }),
  bannerStyle: () => ({
    flex: 3,
    alignItems: 'center',
  }),
  txtRemember: theme => ({
    fontStyle: 'italic',
    color: theme.colors.textHint2,
    textAlign: 'left'
  }),
  txtForgot: theme => ({
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    color: theme.colors.textHint2,
    textAlign: 'right',
    marginLeft: scale(40),
  }),
  viewTextInputStyle: {
    marginTop: scale(15),
  },
  textInputStyle: () => ({
    flex: 1,
    marginTop: scale(7),
    fontSize: scale(12),
  }),
  viewTxtCompanyCodeStyle: {
    marginTop: scale(20),
  }
});

const mapStateToProps = state => ({
  isFirstInstall: isFirstInstallSelector(state),
});
export default connect(mapStateToProps, null)(LoginScreen);
