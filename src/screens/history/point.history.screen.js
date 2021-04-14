import React, { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import BackIcon from '../../components/common/BackIcon';
import SkeletonListHistoryIncome from '../../components/common/SkeletonListHistoryIncome';
import { body2, headline2, headline4, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function IncomeHistoryScreen() {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const [data, setData] = useState([]);
    setTimeout(() => {
        setData([
            {
                id: 1,
                date: '09/09/2020 - 17:57',
                code: 'OR3022',
                content: 'Đơn hàng bánh giò lúc 17:57, Thứ hai ngày 09 tháng 09',
            },
            {
                id: 2,
                date: '09/09/2020 - 17:00 ',
                code: 'OR3021',
                content: 'Đơn hàng bánh giò lúc 17:00, Thứ hai ngày 09 tháng 09',
            },
            {
                id: 3,
                date: '09/10/2020 - 17:57',
                code: 'OR3022',
                content: 'Đơn hàng bánh giò lúc 17:57, Thứ hai ngày 09 tháng 09',
            }]);
    }, 600);
    const itemMonth = (time) => {
        return (
            <View style={styles.viewMonthTitleStyle(theme)}>
                <Text
                    type={body2}
                    style={styles.txtMonthTitleStyle(theme)}>Tháng {time}</Text>
            </View>
        );
    };
    let oldMonth = 0, newMonth;
    const renderItem = ({ item, index }) => {
        let time = item.date.substring(3, 10);
        newMonth = time;
        let check;
        if (newMonth !== oldMonth) {
            oldMonth = newMonth;
            check = true;
        }
        else { check = false; }
        return (
            <>
                {check && itemMonth(time)}
                <View style={styles.viewItem(theme, index, data.length)}>
                    <View style={styles.viewItemTop}>
                        <Text type={headline4} style={{}}>{item.date}</Text>
                        <Text type={headline4} style={{ color: theme.colors.orangeDark }}>+ 5 xu</Text>
                    </View>
                    <Text type={headline4} style={{ marginBottom: scale(6), color: theme.colors.textRed }}>{item.code}</Text>
                    <Text type={body2} style={styles.txtDescription}>{item.content}</Text>
                </View>
            </>
        );
    };
    const keyExtractor = (item, index) => item.id.toString();

    const renderView = () => {
        return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={keyExtractor}
                data={data}
                horizontal={false}
                renderItem={renderItem}
                ListEmptyComponent={
                    <View style={{ marginHorizontal: scale(20) }}>
                        <SkeletonListHistoryIncome numOfArray={7} />
                    </View>}
            />
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2}>
                        {t.translate('historyRewardPoint')}
                    </Text>
                }
            />
            {/* <ScrollView> */}
            {renderView()}
            {/* </ScrollView> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    viewItem: (theme, index, length) => ({
        borderBottomColor: theme.colors.border,
        borderBottomWidth: index < length - 1 ? 1 : 0,
        marginHorizontal: scale(36),
        paddingTop: scale(36),
        paddingBottom: scale(26),
    }),
    viewItemTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scale(6),
    },
    txtDescription: { marginRight: '20%' },
    // txtTitleDate: theme => ({
    //     alignSelf: 'center',
    //     paddingVertical: scale(9),
    //     fontStyle: 'italic',
    //     color: theme.colors.gray2,
    // }),
    txtMonthTitleStyle: theme => ({
        marginVertical: scale(9),
        color: theme.colors.txtNormalIncomHistory,
        fontStyle: 'italic',
    }),
    viewMonthTitleStyle: theme => ({
        width: '100%',
        backgroundColor: theme.colors.backgroundTimeIncomeHistory,
        alignItems: 'center',
    }),
});
