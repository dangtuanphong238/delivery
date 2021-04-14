import React, { useContext } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import BackIcon from '../../components/common/BackIcon';
import { body2, headline2, headline4, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function SupportHistory() {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const data = [
        {
            id: 1,
            requestID: '#200924000724',
            status: t.translate('processing'),
            date: '07:31 - 24/09/2020',
            progress: 60,
            content: 'Tôi không nhận được đơn',
        },
        {
            id: 2,
            requestID: '#200924000465',
            status: t.translate('processing'),
            date: '21:30 - 22/09/2020',
            progress: 60,
            content: 'Thu nhập và ví...',
        },
        {
            id: 3,
            requestID: '#200924000218',
            status: t.translate('processed'),
            date: '09:36 - 24/08/2020',
            progress: 100,
            content: 'Tôi không nhận được đơn',
        },
        {
            id: 4,
            requestID: '#200924000492',
            status: t.translate('processed'),
            date: '14:18 - 24/07/2020',
            progress: 100,
            content: 'Tôi không nhận được đơn',
        },
    ];
    const Item = ({ item, index }) => (
        <View style={styles.containerItem(theme)}>
            <View style={styles.viewTop}>
                <ProgressCircle
                    percent={item.progress}
                    radius={30}
                    borderWidth={8}
                    color={item.progress === 100 ? theme.colors.success : theme.colors.orangeDark}
                    shadowColor="#999"
                    bgColor="#fff"
                >
                    <Text type={body2}>{item.progress}%</Text>
                </ProgressCircle>
                <View style={styles.viewTopRight}>
                    <Text type={headline4}>{t.translate('request')}{item.requestID}</Text>
                    <Text type={body2} style={{ color: theme.colors.txtUnderLine }}>{item.content}</Text>
                </View>
            </View>
            <View style={styles.viewBottom(theme)}>
                <Text type={body2} style={styles.txtStatus(theme, item, t)}>
                    {item.status}</Text>
                <Text type={body2} style={{ paddingLeft: scale(19), color: theme.colors.gray }}>{item.date}</Text>
            </View>
        </View>
    );

    const keyExtractor = (item, index) => item.id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2}>
                        {t.translate('historyRequest')}
                    </Text>
                }
            />
            <View style={styles.containerList(theme)}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    data={data}
                    horizontal={false}
                    renderItem={Item}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    containerItem: theme => ({
        backgroundColor: theme.colors.white,
        marginHorizontal: scale(29),
        marginVertical: scale(18),
        borderRadius: scale(12),
        elevation: 3,
    }),
    viewTop: {
        flexDirection: 'row',
        paddingLeft: scale(19),
        marginTop: scale(12),
    },
    viewBottom: theme => ({
        marginTop: scale(12),
        paddingVertical: scale(9),
        backgroundColor: theme.colors.gray3,
        borderBottomEndRadius: scale(12),
        borderBottomStartRadius: scale(12),
    }),
    viewTopRight: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: scale(14),
    },
    txtStatus: (theme, item, t) => ({
        paddingLeft: scale(19),
        fontStyle: 'italic',
        color: item.status === t.translate('processed') ? theme.colors.success : theme.colors.orangeDark,
    }),
    containerList: theme => ({
        flex: 1,
        backgroundColor: theme.colors.supportBackground,
    }),
});