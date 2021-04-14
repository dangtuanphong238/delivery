import React, { useContext } from 'react';
import { Linking, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import ic_arrow_right from '../../assets/images/images/svg/ic_arrow_right_gray';
import ic_create_req from '../../assets/images/images/svg/ic_create_req';
import ic_history_req from '../../assets/images/images/svg/ic_history_req';
import ic_tele_person from '../../assets/images/images/svg/ic_tele_person';
import BackIcon from '../../components/common/BackIcon';
import IconMaterialOrImageOrSvg, {
    IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import { body2, headline2, headline3, headline4, headline5, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { CONTACT_SCREEN, SUPPORT_HISTORY_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import RequestButton from './component/button.request';
import SuggestionsButton from './component/button.suggestions';

export default function SupportScreen({ navigation }) {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const navigationScreen = (name) => () => {
        navigation.navigate(name);
    };
    const _renderItem = (title, onPress) => (
        <TouchableOpacity style={styles.item(theme)} onPress={onPress}>
            <Text type={headline4} style={styles.txtFaqItem}>{title}</Text>
            {/* <TouchableOpacity> */}
            <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(35)}
                SVGIcon={ic_arrow_right}
            />
            {/* </TouchableOpacity> */}
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.container}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2}>
                        {t.translate('support')}
                    </Text>
                }
            />
            <View style={styles.viewTop(theme)}>
                <View style={styles.viewHi}>
                    <Text type={headline3} style={styles.txtHi(theme)}>{t.translate('hello')}</Text>
                    <Text type={body2} style={styles.txtHi(theme)}>{t.translate('OODCanHelpYou')}</Text>
                </View>
                <IconMaterialOrImageOrSvg
                    type={IconType.Svg}
                    size={scale(79)}
                    SVGIcon={ic_tele_person}
                />
            </View>
            <ScrollView>
                <View style={styles.viewButtonRequest(theme)}>
                    <RequestButton icon={ic_create_req} title={t.translate('createRequest')} onPress={navigationScreen(CONTACT_SCREEN)} />
                    <RequestButton icon={ic_history_req} title={t.translate('historyRequest')} onPress={navigationScreen(SUPPORT_HISTORY_SCREEN)} />
                </View>
                <Text type={headline3} style={styles.txtDriverInterested(theme)}>{t.translate('driverMayBeInterested')}</Text>

                <View style={styles.viewSuggestions(theme)}>
                    <View style={styles.viewButtonSuggestions}>
                        <SuggestionsButton title={'Khẩn cấp: Xe hỏng; Tôi gặp tai nạn trong...'} />
                        <SuggestionsButton title={'Báo cáo chuyến giao bấm hoàn thành nhưng vấn đề về chuyện gấp'} />
                    </View>
                    <View style={styles.viewButtonSuggestions}>
                        <SuggestionsButton title={'Thông báo định vị sai vị trí vấn đề về ứng dụng'} />
                        <SuggestionsButton title={'Tôi cần hỗ trợ về việc thu hộ phí hủy xe không; Vấn đề về chuyến giao'} />
                    </View>
                    <View style={styles.viewButtonSuggestions}>
                        <SuggestionsButton title={'Khách không nhận đơn; Vấn đề về khách'} />
                        <SuggestionsButton title={'Tôi không nhận được đơn mới'} />
                    </View>
                </View>
                <Text type={headline3} style={styles.txtDriverInterested(theme)}>{t.translate('otherProblems')}</Text>
                <View style={styles.contentView(theme)}>
                    {/* <FaqScreen/> */}
                    {_renderItem(t.translate('accidentAndSafety'))}
                    {_renderItem(t.translate('receiptProblem'))}
                    {_renderItem(t.translate('deliveryProblem'))}
                    {_renderItem(t.translate('recordsAccountsFacilities'))}
                    {_renderItem(t.translate('incomeAndWallet'))}
                    {_renderItem(t.translate('bonusPointsProgram'))}
                    {_renderItem(t.translate('applicationProblem'))}
                    {_renderItem(t.translate('findOutMoreAboutTheRestaurant'))}
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.viewCallButton(theme)} onPress={() => {
                Linking.openURL(`tel:${'(+84) 898 300 056'}`);
            }}>
                <Text type={headline5} style={styles.txtCallToRestaurant(theme)}>{t.translate('callToRestaurant')}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    viewTop: theme => ({
        backgroundColor: theme.colors.orangeDark,
        height: scale(110),
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: scale(42),
    }),
    viewHi: { marginLeft: scale(31), marginVertical: scale(30), flex: 1 },
    txtHi: theme => ({
        color: theme.colors.white,
    }),
    viewButtonRequest: theme => ({
        height: scale(150),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderBottomColor: theme.colors.border,
        borderBottomWidth: 1,
    }),
    txtDriverInterested: theme => ({
        color: theme.colors.orangeDark,
        marginLeft: scale(38),
        marginTop: scale(30),
        marginBottom: scale(17),
    }),
    viewButtonSuggestions: {
        marginHorizontal: scale(37),
        marginBottom: scale(14),
        flexDirection: 'row',
    },
    item: theme => ({
        height: scale(62),
        width: '100%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: scale(28),
        paddingRight: scale(20.25),
        borderBottomColor: theme.colors.gray1,
        borderBottomWidth: 0.5,
    }),
    contentView: theme => ({
        alignItems: 'center',
        marginHorizontal: scale(29),
        borderRadius: scale(12),
        backgroundColor: theme.colors.white,
        height: 'auto',
        elevation: 3,
        marginBottom: scale(80),
    }),
    txtFaqItem: { flex: 1 },
    viewSuggestions: theme => ({
        paddingBottom: scale(35),
        borderBottomColor:
            theme.colors.border,
        borderBottomWidth: 1,
    }),
    viewCallButton: theme => ({
        marginBottom: scale(32),
        marginTop: scale(18),
        marginHorizontal: scale(88),
        backgroundColor: theme.colors.orangeDark,
        alignItems: 'center',
        borderRadius: scale(12),
    }),
    txtCallToRestaurant: theme => ({
        marginTop: scale(16),
        marginBottom: scale(11),
        color: theme.colors.white,
    }),
});
