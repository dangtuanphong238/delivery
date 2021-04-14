import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import BackIcon from '../../components/common/BackIcon';
import PrimaryButton from '../../components/common/PrimaryButton';
import SafeContainer from '../../components/common/SafeContainer';
import { caption, headline2, Text } from '../../components/common/Text';
import { email, TextInput } from '../../components/common/TextInput';
import ToolBar from '../../components/common/Toolbar';
import ValidateTextInput from '../../components/common/ValidateTextInput';
import useTranslation from '../../i18n';
import { OTP_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
const ForgotPasswordScreen = ({ route, navigation }) => {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    useEffect(() => { }, []);
    const [phone, setPhone] = useState('');
    const _subForm = t.translate('advice_SubWarning');
    let _value;//Phone number or email
    const [error, setError] = useState({ name: '', check: false })
    let type;
    const validateEmailORPhoneNumber = () => {
        let validate = ValidateTextInput({ type: email, value: _value });
        if (validate?.check) {
            type = 'phonenumber';
            if (_value.length < 10) {
                // alert("Số điện thoại hoặc email không hợp lệ. Vui lòng thử lại! ");
                setError({ name: "Số điện thoại hoặc email không hợp lệ. Vui lòng thử lại! ", check: true });
                return false
            } else {
                if (Number.isInteger(Number(_value))) return true
                else {
                    // alert("Số điện thoại hoặc email không hợp lệ. Vui lòng thử lại! ");
                    setError({ name: "Số điện thoại hoặc email không hợp lệ. Vui lòng thử lại! ", check: true });
                    return false;
                }
            }
        } else { type = 'email'; return true }
    }

    const navigateOTP = ({ route, param }) => {
        if (validateEmailORPhoneNumber()) {
            if (type === 'email') {
                navigation.navigate(route, { phone: param })
            } else {
                navigation.navigate(route, { email: param })
            }
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
                        {t.translate('forgot_password_screen')}
                    </Text>
                }
            />
            <View style={styles.containerContent()}>
                <Text type={caption} style={styles.txtSubForm()}>{_subForm}</Text>
                <TextInput
                    messageError={error}
                    type={email}
                    getValue={(param) => { _value = param }}
                    title={t.translate('email_phoneNumber')}
                    placeholder={t.translate('placeholder_Email_PhoneNumber')}
                    widthUnderLine={scale(330)}
                    styleView={styles.viewTextStyle}
                    styleTextInput={styles.textInputStyle}
                />
                <PrimaryButton
                    style={styles.btnChangeStyle()}
                    title={t.translate('change_password')}
                    onPress={() => navigateOTP({ route: OTP_SCREEN, param: _value })} />
            </View>
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
    titleToolBar: theme => ({
        color: theme.colors.orangeDark
    }),
    txtSubForm: () => ({
        width: scale(350),
        alignSelf: 'center',
        textAlign: 'left',
        fontSize: scale(14),
        paddingHorizontal: scale(32),
        marginTop: scale(60),
    }),
    btnChangeStyle: () => ({
        width: scale(250),
        alignSelf: 'center',
        marginTop: scale(56)
    }),
    viewTextStyle: {
        marginTop: scale(32),
    },
    textInputStyle: {
        marginTop: scale(20),
    },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
    connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen),
);
