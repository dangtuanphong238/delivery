import React, { useEffect, useContext, useState, useRef } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { connect } from 'react-redux';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import SafeContainer from '../../components/common/SafeContainer';
import ToolBar from '../../components/common/Toolbar';
import BackIcon from '../../components/common/BackIcon';
import { headline2, Text, headline3, headline5, headline6 } from '../../components/common/Text';
import PrimaryButton from '../../components/common/PrimaryButton';
import { scale } from '../../theme/dimens';
import { password, TextInput } from '../../components/common/TextInput';
import Validate from '../../components/common/ValidateTextInput';
import { BOTTOM_TAB, OTP_SCREEN, RESET_PASSWORD_SCREEN, LOGIN_SCREEN } from '../../navigations/route-name';
const ResetPasswordScreen = ({ route, navigation }) => {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const [newPassValidate, setNewPassValidate] = useState({ name: '', check: false })
    const [confirmPassValidate, setConfirmPassValidate] = useState({ name: '', check: false })
    let newPassValue = '';
    let confirmPassValue = '';
    const screen = route.params?.screen;
    const validate = () => {
        let checkNewPass = Validate({ type: password, value: newPassValue });
        let checkConfirmPass = Validate({ type: password, value: confirmPassValue });
        if (checkNewPass.check || checkConfirmPass.check) {
            setNewPassValidate(checkNewPass);
            setConfirmPassValidate(checkConfirmPass);
            return false;
        }
        if (newPassValue !== confirmPassValue) {
            setConfirmPassValidate({ name: 'Mật khẩu nhập lại không đúng', check: true });
            return false;
        }
        else if (newPassValue === confirmPassValue && newPassValidate.check && confirmPassValidate)
            return true;
    };

    const navigate = ({ route, param }) => () => {
        if (validate())
            navigation.navigate(route);
    }
    return (
        <SafeContainer style={styles.container(theme)}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2} style={styles.titleToolBar(theme)}>
                        {t.translate('reset_password_screen')}
                    </Text>
                }
            />
            <View style={styles.containerContent()}>
                {screen &&
                    <TextInput
                        messageError={newPassValidate}
                        getValue={(param) => { newPassValue = param; }}
                        title={t.translate('currentPassword')}
                        placeholder={t.translate('placeholderCurrentPassword')}
                        type={password}
                        typeTitle={headline5}
                        styleView={styles.viewTextInputStyle}
                        styleTextInput={styles.textInputStyle}
                    />}
                <TextInput
                    messageError={newPassValidate}
                    getValue={(param) => { newPassValue = param; }}
                    title={t.translate('newPassword')}
                    placeholder={t.translate('placeholderNewPassword')}
                    type={password}
                    typeTitle={headline5}
                    styleView={styles.viewTextInputStyle}
                    styleTextInput={styles.textInputStyle}
                />
                <TextInput
                    messageError={confirmPassValidate}
                    getValue={(param) => { confirmPassValue = param; }}
                    title={t.translate('confirmPassword')}
                    placeholder={t.translate('placeholderConfirmPassword')}
                    type={password}
                    typeTitle={headline5}
                    styleView={styles.viewTextInputStyle}
                    styleTextInput={styles.textInputStyle}
                />
                <PrimaryButton
                    style={styles.buttonChangePassword()}
                    title={t.translate('change_password')}
                    onPress={navigate({ route: LOGIN_SCREEN })} />
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
        marginTop: scale(30),
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
    }),
    titleToolBar: theme => ({
        color: theme.colors.orangeDark
    }),
    buttonChangePassword: () => ({
        width: scale(200),
        marginTop: scale(36),
    }),
    viewTextInputStyle: {
        marginTop: scale(20),
    },
    textInputStyle: {
        marginTop: scale(7),
    },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
    connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen),
);
