import React, { useContext, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import ic_apple from '../../assets/images/images/svg/ic_apple.svg';
import ic_google from '../../assets/images/images/svg/ic_google.svg';
import logo from '../../assets/images/images/svg/logo.svg';
import BackIcon from '../../components/common/BackIcon';
import IconMaterialOrImageOrSvg, { IconType } from '../../components/common/IconMaterialOrImageOrSvg';
import PrimaryButton from '../../components/common/PrimaryButton';
import SafeContainer from '../../components/common/SafeContainer';
import { caption, headline1, headline2, headline5, overline, Text } from '../../components/common/Text';
import { TextInput } from '../../components/common/TextInput';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { LOGIN_SCREEN, REGISTER_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

const AuthScreen = ({ route, navigation }) => {
  const theme = useContext(ThemeContext);
  const t = useTranslation();
  useEffect(() => { }, []);
  // const navigateRegister = () => {
  //   navigation.navigate(REGISTER_SCREEN);
  // };
  // const navigateLogin = () => {
  //   navigation.navigate(LOGIN_SCREEN);
  // };
  // const navigateChat = () => {
  //   navigation.navigate(CHAT_SCREEN);
  // };
  const navigationScreen = (name, params) => () => {
    navigation.navigate(name, params);
  };

  const banner = () => {
    return (
      <View style={styles.bannerStyle()}>
        <IconMaterialOrImageOrSvg
          type={IconType.Svg}
          size={scale(150)}
          SVGIcon={logo}
        />
        <Text type={headline1} >OOD.VN</Text>
        <Text type={overline}> Delivery Consulting</Text>
      </View>
    )
  }
  const buttonComponent = () => {
    return (
      <View>
        <PrimaryButton title={t.translate('signUp')} onPress={navigationScreen(REGISTER_SCREEN)} />
        <PrimaryButton style={styles.buttonLogin(theme)} title={t.translate('login')} onPress={navigationScreen(LOGIN_SCREEN)} />
      </View>
    )
  }
  const buttonReferences = (theme, icon) => {
    return (
      <TouchableOpacity style={styles.buttonReferences(theme)}>
        <IconMaterialOrImageOrSvg
          style={{ textAlign: 'center' }}
          type={IconType.Svg}
          size={scale(30)}
          SVGIcon={icon}
        />
      </TouchableOpacity>
    )
  }
  const formButtonReferences = () => {
    return (
      <View style={styles.frmButtonReferences()}>
        {buttonReferences(theme, ic_google)}
        {buttonReferences(theme, ic_apple)}
      </View>
    )
  }
  return (
    <SafeContainer style={styles.container(theme)}>
      <ToolBar
        style={{ backgroundColor: theme.colors.white }}
        left={<BackIcon />}
        barStyle="dark-content"
        center={
          <Text type={headline2} style={styles.titleToolBar(theme)}>
            {t.translate('auth_screen')}
          </Text>
        }
      />
      <View style={styles.containerContent()}>
        {banner()}
        <TextInput
          styleView={styles.viewTextInputStyle}
          styleTextInput={styles.textInputStyle}
          typeTitle={headline5}
          fontSize={scale(12)}
          title={t.translate('companyCode')}
          placeholder={t.translate('placeholdeCompannyCode')}
        />
        {buttonComponent()}
        <Text style={styles.txtOR(theme)} type={caption}>Hoặc</Text>
        {formButtonReferences()}
      </View>
    </SafeContainer>
  );
};
const styles = StyleSheet.create({
  container: theme => ({
    backgroundColor: theme.colors.white,
    flex: 1,
  }),
  containerContent: () => ({
    paddingHorizontal: scale(45),
    flex: 1,
  }),
  titleToolBar: theme => ({
    color: theme.colors.orangeDark,
  }),
  bannerStyle: () => ({
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(15),
  }),
  buttonLogin: theme => ({
    backgroundColor: theme.colors.greyDark2,
    marginTop: scale(15),
  }),
  txtOR: theme => ({
    color: theme.colors.textHint1,
    marginVertical: scale(20),
    textAlign: 'center',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  }),
  buttonReferences: theme => ({
    backgroundColor: theme.colors.white,
    width: scale(50),
    height: scale(50),
    borderWidth: scale(2),
    borderColor: theme.colors.border,
    borderRadius: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(10),
  }),
  frmButtonReferences: () => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  }),
  viewTextInputStyle: {
    paddingLeft: scale(10),
    marginTop: scale(30),
    marginBottom: scale(20),
  },
  textInputStyle: {
    marginTop: scale(20),
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(AuthScreen),
);
