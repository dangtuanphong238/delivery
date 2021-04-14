import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import BackIcon from '../../components/common/BackIcon';
import { body2, headline2, headline4, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function FaqItemScreen() {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    return (
        <SafeAreaView style={styles.container}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2} style={styles.titleToolBar(theme)}>
                        {t.translate('faq')}
                    </Text>
                }
            />
            <View style={styles.contentView(theme)}>
                <Text type={headline4} style={styles.txtFaqQuestion(theme)}>{t.translate('faqQuestionTitle')}</Text>
                <Text type={body2} style={styles.txtFaqAnswer(theme)}>Ứng dụng tài xế của Đối tác đã được thiết lập đúng để nhận cuốc chưa?</Text>
                <Text type={body2} style={styles.txtFaqAnswer(theme)}>Vui lòng bật nút On/Off để được tự động nhận đơn mới.</Text>
                <Text type={body2} style={styles.txtLinkHelp(theme)}>Tôi cần hỗ trợ</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleToolBar: theme => ({

    }),
    contentView: theme => ({
        alignItems: 'center',
        marginLeft: scale(54),
        marginRight: scale(44),
    }),
    txtFaqQuestion: theme => ({
        color: theme.colors.orangeDark,
        marginTop: scale(49),
        marginBottom: scale(15),
    }),
    txtFaqAnswer: theme => ({
        paddingBottom: scale(10),
        fontWeight: '500',
    }),
    txtLinkHelp: theme => ({
        marginTop: scale(49),
        alignSelf: 'flex-end',
        color: theme.colors.orangeDark,
        textDecorationLine: 'underline',
    }),
});

