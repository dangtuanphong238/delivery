import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import ic_arrow_right from '../../assets/images/images/svg/ic_arrow_right_gray';
import BackIcon from '../../components/common/BackIcon';
import IconMaterialOrImageOrSvg, {
    IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import { headline2, headline4, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function FaqScreen({ navigation }) {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const _renderItem = (title, onPress) => (
        <TouchableOpacity style={styles.item(theme)} onPress={onPress}>
            <Text type={headline4} style={styles.txtFaqItem}>{title}</Text>
            <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(35)}
                SVGIcon={ic_arrow_right}
            />
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
                        {t.translate('faq')}
                    </Text>
                }
            />
            <ScrollView contentContainerStyle={styles.contentView(theme)}>
                {_renderItem(t.translate('accidentAndSafety'))}
                {_renderItem(t.translate('receiptProblem'))}
                {_renderItem(t.translate('deliveryProblem'))}
                {_renderItem(t.translate('recordsAccountsFacilities'))}
                {_renderItem(t.translate('incomeAndWallet'))}
                {_renderItem(t.translate('bonusPointsProgram'))}
                {_renderItem(t.translate('applicationProblem'))}
                {_renderItem(t.translate('findOutMoreAboutTheRestaurant'))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    contentView: theme => ({
        alignItems: 'center',
        marginHorizontal: scale(29),
        borderRadius: scale(12),
        backgroundColor: theme.colors.white,
        height: 'auto',
        marginTop: scale(26),
        elevation: 3,
    }),
    item: theme => ({
        height: scale(62),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: scale(28),
        paddingRight: scale(20.25),
        borderBottomColor: theme.colors.gray1,
        borderBottomWidth: 0.5,
    }),
    txtFaqItem: { flex: 1 },
});
