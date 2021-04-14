import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import BackIcon from '../../components/common/BackIcon';
import ListTaskRewardPoint from '../../components/common/ListTaskRewardPoint';
import { headline2, headline5, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { WINDOW_WIDTH } from '../../theme/dimens';

export default function TaskPoint({ navigation }) {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const initialLayout = { width: WINDOW_WIDTH };
    const dataTab1 = [
        {
            id: '1',
            month: 'Tháng 9',
            day: '8',
            dayOfWeek: 'Thứ ba',
            coin: '20',
            money: '50.000',
            target1: 'success',
            target2: 'success',
            target3: 'success',
            target4: 'success',
            title: 'Đã đạt mục tiêu hôm nay',
        },
        {
            id: '2',
            month: 'Tháng 9',
            day: '7',
            dayOfWeek: 'Thứ hai',
            coin: '20',
            money: '50.000',
            target1: 'error',
            target2: 'error',
            target3: 'error',
            target4: 'lock',
            title: 'Chưa đạt mục tiêu hôm nay',
        },
    ];
    const dataTab2 = [
        {
            id: '1',
            month: 'Tháng 9',
            day: '9',
            dayOfWeek: 'Thứ tư',
            coin: '6',
            money: '50.000',
            target1: 'success',
            target2: 'lock',
            target3: 'lock',
            target4: 'lock',
            title: 'Mục tiêu hôm nay',
        },
    ];
    const dataTab3 = [
        {
            id: '1',
            month: 'Tháng 9',
            day: '10',
            dayOfWeek: 'Thứ năm',
            coin: '20',
            money: '50.000',
            target1: 'lock',
            target2: 'lock',
            target3: 'lock',
            target4: 'lock',
            title: 'Mục tiêu sắp tới',
        },
        {
            id: '2',
            month: 'Tháng 9',
            day: '11',
            dayOfWeek: 'Thứ sáu',
            coin: '20',
            money: '50.000',
            target1: 'lock',
            target2: 'lock',
            target3: 'lock',
            target4: 'lock',
            title: 'Mục tiêu sắp tới',
        },
    ];
    const FirstRoute = () => <ListTaskRewardPoint data={dataTab1} />;
    const SecondRoute = () => <ListTaskRewardPoint data={dataTab2} />;
    const ThirdRoute = () => <ListTaskRewardPoint data={dataTab3} />;
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: t.translate('history_screen') },
        { key: 'second', title: t.translate('today') },
        { key: 'third', title: t.translate('coming') },

    ]);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });
    const renderTabBar = props => (
        <TabBar
            {...props}
            renderLabel={({ route, focused, color }) => (
                <View style={styles.containerTab}>
                    <Text type={headline5} style={styles.titleTab(focused, theme)}>
                        {route.title}
                    </Text>
                </View>
            )}
            indicatorStyle={styles.indicatorStyle(theme)}
            style={{ backgroundColor: theme.colors.backgroundHome }}
        />
    );
    return (
        <SafeAreaView style={styles.container}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2}>
                        {t.translate('taskPointReward')}
                    </Text>
                }
            />
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    titleTab: (focused, theme) => ({
        color: focused ? theme.colors.orangeDark : theme.colors.greyDark2,
    }),
    indicatorStyle: theme => ({
        backgroundColor: theme.colors.orangeDark,
        height: 4,
    }),
});
