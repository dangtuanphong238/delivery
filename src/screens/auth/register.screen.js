import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { useContext } from 'react';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import SafeContainer from '../../components/common/SafeContainer';
import ToolBar from '../../components/common/Toolbar';
import BackIcon from '../../components/common/BackIcon';
import {
  overline,
  headline2,
  headline4,
  Text,
  headline5,
} from '../../components/common/Text';
import PrimaryButton from '../../components/common/PrimaryButton';
import { scale, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../theme/dimens';
import { VERIFY_SCREEN } from '../../navigations/route-name';
import Districts from '../../components/common/Districts';
import { email, number, password, TextInput } from '../../components/common/TextInput';
import { TouchableOpacity } from 'react-native';
import ValidateTextInput from '../../components/common/ValidateTextInput'
const RegisterScreen = ({ route, navigation }) => {
  const theme = useContext(ThemeContext);
  const t = useTranslation();
  let _fullName, _phoneNumber, _password, _email;

  const navigateVerify = () => {
    validateFields() && navigation.navigate(VERIFY_SCREEN);
    // alert(JSON.stringify(validateEmail, null, 2) + " - " + JSON.stringify(validatePhoneNumber, null, 2))
  };
  const [value, setValue] = useState('Hồ Chí Minh');
  const [countries, setCountry] = useState(Districts);
  const [dropdown, setdropdown] = useState(false);
  // const [validate, setValidate] = useState({

  const [validateFullName, setvalidateFullName] = useState({ name: '', check: false })
  const [validateEmail, setvalidateEmail] = useState({ name: '', check: false })
  const [validatePassword, setvalidatePassword] = useState({ name: '', check: false })
  const [validatePhoneNumber, setvalidatePhoneNumber] = useState({ name: '', check: false })
  const validateFields = () => {
    let checkFullName = (_fullName?.length > 3) ? { name: '', check: false } : { name: "Tên phải có hơn 3 ký tự", check: true }
    let checkEmail = ValidateTextInput({ type: email, value: _email })
    let checkPassword = ValidateTextInput({ type: password, value: _password })
    let checkPhoneNumber = _phoneNumber.length >= 10 && Number.isInteger(Number(_phoneNumber)) ? { name: '', check: false } : { name: "Số điện thoại không hợp lệ.", check: true }
    setvalidateFullName(checkFullName);
    setvalidateEmail(checkEmail);
    setvalidatePassword(checkPassword);
    setvalidatePhoneNumber(checkPhoneNumber);
    if (!checkEmail.check
      && !checkFullName.check
      && !checkPhoneNumber.check
      && !checkPassword.check)
      return true
    else {
      return false
    }
  }
  const formPicker = (item) => {
    return (
      <View style={styles.overViewPickerStyle()}>
        <Text style={styles.titlePickerStyle()} type={headline5}>{item.title}</Text>
        <DropDownPicker
          onOpen={() => { setdropdown(true) }}
          onClose={() => { setdropdown(false) }}
          isVisible={dropdown}
          dropDownMaxHeight={'10%'}
          arrowSize={scale(18)}
          items={countries}
          defaultValue={value}
          onChangeItem={item => setValue(item.value)}
          style={styles.contentPickerStyle(theme)}
          containerStyle={styles.containerPickerStyle()}
          itemStyle={styles.itemStyle()}
          dropDownStyle={styles.dropDownStyle(theme)}
        />
      </View>
    )
  }
  const _subForm = '*' + t.translate('registerName_SubWarning');
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
      <TouchableOpacity style={{ width: WINDOW_WIDTH, height: WINDOW_HEIGHT }} onPress={() => setdropdown(false)}>
        <View style={styles.containerContent()}>
          <TextInput
            onTouchStart={() => setdropdown(false)}
            messageError={validateFullName}
            getValue={(param) => { _fullName = param }}
            title={t.translate('fullName')}
            require={true}
            styleView={styles.fieldFullName}
            styleTextInput={styles.textInputStyle}
          />
          <Text style={styles.subForm(theme)} type={overline}> {_subForm} </Text>
          <TextInput
            messageError={validatePhoneNumber}
            onTouchStart={() => setdropdown(false)}
            getValue={(param) => { _phoneNumber = param }}
            styleView={styles.viewTextInputStyle()}
            title={t.translate('phoneNumber')}
            type={number}
            require={true}
            styleTextInput={styles.textInputStyle} />
          <TextInput
            messageError={validatePassword}
            onTouchStart={() => setdropdown(false)}
            getValue={(param) => { _password = param }}
            styleView={styles.viewTextInputStyle()}
            title={t.translate('password')}
            require={true}
            type={password}
            styleTextInput={styles.textInputStyle}
          />
          <TextInput
            messageError={validateEmail}
            onTouchStart={() => setdropdown(false)}
            type={email}
            getValue={(param) => { _email = param }}
            styleView={styles.viewTextInputStyle()}
            title={t.translate('email')}
            keyboardType={'email-address'}
            styleTextInput={styles.textInputStyle}
          />
          {formPicker({ title: t.translate('cities') })}
          <PrimaryButton style={styles.buttonRegister()} title={t.translate('signUp')} onPress={navigateVerify} />
        </View>
      </TouchableOpacity>
    </SafeContainer >
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
  titleToolBar: theme => ({ color: theme.colors.orangeDark }),
  subForm: theme => ({
    fontStyle: 'italic',
    color: theme.colors.textHint2,
    paddingLeft: scale(6),
  }),
  buttonRegister: () => ({
    alignSelf: 'center',
    marginTop: scale(50),
    width: scale(200),
    height: scale(45),
  }),
  overViewPickerStyle: () => ({
    marginTop: scale(20),
  }),
  titlePickerStyle: () => ({
    marginLeft: scale(6),
  }),
  contentPickerStyle: (theme) => ({
    backgroundColor: theme.colors.transparent,
    borderColor: theme.colors.transparent,
    borderBottomColor: theme.colors.greyLight4,
    bottomBorderWidth: scale(2),
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }),
  containerPickerStyle: () => ({
    height: scale(40),
    marginTop: scale(5),
  }),
  itemStyle: () => ({
    justifyContent: 'flex-start',
  }),
  dropDownStyle: (theme) => ({
    backgroundColor: theme.colors.greyLight3,
  }),
  viewTextInputStyle: () => ({
    //flex:1,
    marginTop: scale(15),
  }),
  textInputStyle: { marginTop: scale(7) },
  fieldFullName: { marginTop: scale(20) },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(RegisterScreen),
);
