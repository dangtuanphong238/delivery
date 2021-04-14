import React, { useContext, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
//image:
import ic_question from '../../assets/images/images/svg/ic_question';
import BackIcon from '../../components/common/BackIcon';
import Districts from '../../components/common/Districts';
import IconMaterialOrImageOrSvg, {
  IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import PrimaryButton from '../../components/common/PrimaryButton';
import SafeContainer from '../../components/common/SafeContainer';
import {
  headline2,

  headline5,
  overline,
  Text
} from '../../components/common/Text';
import { email, number, TextInput } from '../../components/common/TextInput';
import ToolBar from '../../components/common/Toolbar';
import ValidateTextInput from '../../components/common/ValidateTextInput';
import useTranslation from '../../i18n';
import { FAQ_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../theme/dimens';
export default function ProfileScreen({ navigation }) {
  const theme = useContext(ThemeContext);
  const t = useTranslation();
  const navigateGoBack = () => {
    validateFields() && navigation.goBack();
    // alert(JSON.stringify(validateEmail, null, 2) + " - " + JSON.stringify(validatePhoneNumber, null, 2))
  };
  const navigationToContactHelp = () => {
    navigation.navigate(FAQ_SCREEN);
  };
  let _fullName, _phoneNumber, _email, _idNumber;

  // const navigateVerify = () => {
  //   validateFields() && navigation.navigate(VERIFY_SCREEN);
  //   // alert(JSON.stringify(validateEmail, null, 2) + " - " + JSON.stringify(validatePhoneNumber, null, 2))
  // };
  const [value, setValue] = useState('Hồ Chí Minh');
  const [countries, setCountry] = useState(Districts);
  const [dropdown, setdropdown] = useState(false);
  // const [validate, setValidate] = useState({

  const [validateFullName, setvalidateFullName] = useState({ name: '', check: false })
  const [validateEmail, setvalidateEmail] = useState({ name: '', check: false })
  const [validateIDNumber, setvalidateIDNumber] = useState({ name: '', check: false })
  const [validatePhoneNumber, setvalidatePhoneNumber] = useState({ name: '', check: false })
  const validateFields = () => {
    let checkFullName = (_fullName?.length > 3) ? { name: '', check: false } : { name: "Tên phải có hơn 3 ký tự", check: true }
    let checkEmail = ValidateTextInput({ type: email, value: _email })
    let checkIDNumber = _idNumber?.length >= 9 && Number.isInteger(Number(_idNumber)) ? { name: '', check: false } : { name: "Số CMND không hợp lệ. Vui lòng thử lại", check: true }
    let checkPhoneNumber = _phoneNumber?.length >= 10 && Number.isInteger(Number(_phoneNumber)) ? { name: '', check: false } : { name: "Số điện thoại không hợp lệ.", check: true }
    setvalidateFullName(checkFullName);
    setvalidateEmail(checkEmail);
    setvalidateIDNumber(checkIDNumber);
    setvalidatePhoneNumber(checkPhoneNumber);
    if (!checkEmail.check
      && !checkFullName.check
      && !checkPhoneNumber.check
      && !checkIDNumber.check)
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
        style={{ paddingHorizontal: scale(17) }}
        left={<BackIcon />}
        barStyle="dark-content"
        center={
          <Text type={headline2} style={styles.titleToolBar(theme)}>
            {t.translate('myProfile')}
          </Text>
        }
        right={
          <TouchableOpacity onPress={navigationToContactHelp}>
            <IconMaterialOrImageOrSvg
              type={IconType.Svg}
              size={scale(30)}
              SVGIcon={ic_question}
            />
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.containerContent()}>
        {formPicker({ title: t.translate('cities') })}
        <TouchableOpacity style={styles.buttonFullViewStyle} onPress={() => setdropdown(false)}>
          <TextInput
            onTouchStart={() => setdropdown(false)}
            messageError={validateFullName}
            getValue={(param) => { _fullName = param }}
            title={t.translate('fullName')}
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
            styleTextInput={styles.textInputStyle} />
          <TextInput
            messageError={validateEmail}
            onTouchStart={() => setdropdown(false)}
            type={email}
            getValue={(param) => { _email = param }}
            styleView={styles.viewTextInputStyle()}
            title={t.translate('email')}
            styleTextInput={styles.textInputStyle}
          />
          <TextInput
            messageError={validateIDNumber}
            onTouchStart={() => setdropdown(false)}
            getValue={(param) => { _idNumber = param }}
            styleView={styles.viewTextInputStyle()}
            title={t.translate('idNumber')}
            type={email}
            styleTextInput={styles.textInputStyle}
          />
          <PrimaryButton style={styles.buttonRegister()} title={t.translate('saveInfo')} onPress={navigateGoBack} />
        </TouchableOpacity>
      </ScrollView>
    </SafeContainer >
  );
};

const styles = StyleSheet.create({
  buttonFullViewStyle: { width: WINDOW_WIDTH, height: WINDOW_HEIGHT, alignItems: 'flex-start' },
  container: theme => ({
    backgroundColor: theme.colors.white,
    // paddingHorizontal: scale(19.25),
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
    marginTop: scale(18),
  }),
  textInputStyle: { marginTop: 0 },
  fieldFullName: { marginTop: scale(20) },
});
