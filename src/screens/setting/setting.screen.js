import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import ic_arrow_right from '../../assets/images/images/svg/ic_arrow_right_gray';
import BackIcon from '../../components/common/BackIcon';
import IconMaterialOrImageOrSvg, {
    IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import RadioButton from '../../components/common/RadioButton';
import { body2, headline2, headline4, headline5, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { RESET_PASSWORD_SCREEN, SETTING_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function SettingScreen({ navigation }) {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigationScreen = (name, params) => () => {
        navigation.navigate(name, params);
    };
    const PROP = [
        {
            key: 'vi',
            text: 'Tiếng Việt',
        },
        {
            key: 'en',
            text: 'English',
        },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2} style={styles.titleToolBar(theme)}>
                        {t.translate('setting')}
                    </Text>
                }
            />

            <ScrollView>
                <Text type={headline4} style={styles.txtAccountSecurity(theme)}>{t.translate('accountSecurity')}</Text>
                <View style={styles.contentView(theme)}>
                    <TouchableOpacity style={styles.viewChangePassword(theme)} onPress={navigationScreen(RESET_PASSWORD_SCREEN, { screen: SETTING_SCREEN })}>
                        <Text type={headline5} style={styles.txtChangePassword}>{t.translate('changePassword')}</Text>
                        <IconMaterialOrImageOrSvg
                            type={IconType.Svg}
                            size={scale(35)}
                            SVGIcon={ic_arrow_right}
                        />
                    </TouchableOpacity>
                    <View style={styles.viewTouchID(theme)}>
                        <Text type={headline5} style={styles.txtChangePassword}>{t.translate('fingerprintAuth')}</Text>
                        <Switch
                            // style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                            trackColor={{ false: theme.colors.gray1, true: theme.colors.orangeDark }}
                            thumbColor={isEnabled ? theme.colors.white : theme.colors.border}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
                <View style={styles.viewNote(theme)}>
                    <Text type={headline5} style={styles.txtNote(theme)}>{t.translate('note')}
                        <Text type={body2} style={styles.contentNote(theme)}>{t.translate('noteFingerprint')}</Text>
                    </Text>
                </View>
                <View style={styles.viewLanguage}>
                    <Text type={headline4} style={styles.txtLanguage(theme)}>{t.translate('language')}</Text>
                </View>
                <View style={styles.containerRadioButton}>
                    <View style={styles.radioButton}>
                        <RadioButton PROP={PROP} />
                    </View>
                </View>
                <View style={styles.viewBottom}>
                    <TouchableOpacity>
                        <Text type={body2} style={styles.txtTermsOfUse(theme)}>{t.translate('termsOfUse')}</Text>
                    </TouchableOpacity>
                    <Text type={body2} style={{ color: theme.colors.gray1 }}>{t.translate('copyright')}</Text>
                    <Text type={body2} style={{ color: theme.colors.gray1 }}>Version {DeviceInfo.getBuildNumber()} ({DeviceInfo.getVersion()})</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleToolBar: theme => ({
    }),
    txtAccountSecurity: theme => ({
        color: theme.colors.gray,
        marginLeft: scale(47),
        marginTop: scale(33),
        marginBottom: scale(19),
    }),
    contentView: theme => ({
        marginHorizontal: scale(29),
        borderRadius: scale(12),
        backgroundColor: theme.colors.white,
        marginTop: scale(19),
        height: scale(144),
        elevation: 3,
    }),
    viewChangePassword: theme => ({
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(22),
        paddingHorizontal: scale(23),
        borderBottomColor: theme.colors.gray1,
        borderBottomWidth: 0.3,
        paddingBottom: scale(15),
    }),
    viewTouchID: theme => ({
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(22),
        paddingHorizontal: scale(23),
        paddingBottom: scale(15),
    }),
    txtChangePassword: { flex: 1 },
    contentNote: theme => ({ marginRight: scale(35), color: theme.colors.gray }),
    viewNote: theme => ({
        marginHorizontal: scale(33),
        marginTop: scale(33),
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: scale(30),
    }),
    txtNote: theme => ({
        color: theme.colors.gray1,
    }),
    txtLanguage: theme => ({
        color: theme.colors.gray,
        marginTop: scale(33),
        marginLeft: scale(44),
    }),
    viewLanguage: { borderTopColor: 'gray', borderTopWidth: 0.2 },
    containerRadioButton: {
        marginLeft: scale(50),
        marginTop: scale(14),
    },
    radioButton: { flexDirection: 'row', alignItems: 'center' },

    txtTermsOfUse: theme => ({
        textDecorationLine: 'underline',
        color: theme.colors.info,
        marginBottom: scale(9),
    }),
    viewBottom: {
        marginHorizontal: scale(58),
        alignItems: 'center',
        marginTop: scale(60),
    },
});
