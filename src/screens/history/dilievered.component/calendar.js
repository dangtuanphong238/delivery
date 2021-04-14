import React from 'react';
import { useState, useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import IconMaterialOrImageOrSvg, {
    IconType,
} from '../../../components/common/IconMaterialOrImageOrSvg';
import { scale } from '../../../theme/dimens';
import { theme, ThemeContext } from '../../../theme';
import useTranslation from '../../../i18n';
import { caption, headline1, headline2, headline3, headline4, headline5, headline7, overline, Text } from '../../../components/common/Text'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
const Calendar = () => {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const [currentIndex, setcurrentIndex] = useState()
    const [refFlatList, setrefFlatList] = useState()
    const getDaysArray = (t) => {
        let names = [t.translate('sun'), t.translate('mon'), t.translate('tue'), t.translate('wed'), t.translate('thu'), t.translate('fri'), t.translate('sat')];
        let year = new Date().getFullYear();
        let monthIndex = new Date().getMonth();
        let date = new Date(year, monthIndex, 1);
        let result = [];
        while (date.getMonth() == monthIndex) {
            result.push({ "names": names[date.getDay()], "day": date.getDate(), "month": date.getMonth() + 1, "year": date.getFullYear() })
            date.setDate(date.getDate() + 1);
        }
        return result;
    }
    const btnSelection = (style, title) => {
        return (
            <TouchableOpacity style={style.btnSelectionStyle}>
                <View style={style.viewBtnSelectionStyle}>
                    <Text type={headline4} style={style.txtTitleBtnSelection}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const itemRender = ({ item }) => {
        // alert(JSON.stringify(item, null, 2))
        const day = new Date().getDate();
        let check = day === item.day
        let style = check ? styles.itemActiveTimeStyle(theme) : styles.itemNormalTimeStyle(theme)
        return (
            <TouchableOpacity style={style.button()}>
                <View style={style.viewAbove()}>
                    <Text type={headline7} style={style.txtTitle()}>{t.translate('Thg') + " " + item.month}</Text>
                </View>
                <View style={style.viewContent}>
                    <Text type={headline3} style={style.txtBigContent()}>{item.day}</Text>
                    <Text type={overline} style={style.txtSmallContent()}>{item.names}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    // useEffect(() => {
    //     setTimeout(onScrollToItem, 2000)
    //     return () => {
    //     }
    // }, [])
    // const onScrollToItem = () => {
    //     refFlatList.scrollToIndex({ index: 20 })
    // }
    // const getItemLayout = (data, index) => (
    //     { length: scale(115), offset: scale(115) * index, index }
    // )
    const listCalendar = () => {
        return (
            <FlatList
                style={styles.flastList}
                horizontal={true}
                data={getDaysArray(t)}
                keyExtractor={item => item.day.toString()}
                renderItem={itemRender}
            // getItemLayout={getItemLayout}
            // ref={(ref) => setrefFlatList(ref)}
            />)
    }

    return (
        <View >
            <View style={styles.formButtonSelection}>
                {btnSelection(styles.btnActive(theme), 'Theo ngày')}
                {btnSelection(styles.btnNormal(theme), 'Theo tháng')}
            </View>
            <View>
                {listCalendar()}
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    itemActiveTimeStyle: (theme) => ({
        button: () => ({
            backgroundColor: theme.colors.buttonTimeActive,
            height: scale(120),
            width: scale(82),
            borderColor: theme.colors.line,
            borderTopWidth: 2,
            borderWidth: 1,
        }),
        viewAbove: () => ({
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'transparent',
            borderBottomColor: theme.colors.line,
            borderBottomWidth: 2
        }),
        txtTitle: () => ({
            marginVertical: scale(10),
            marginHorizontal: scale(26),
            color: theme.colors.white,
        }),
        viewContent: {
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center'
        },
        txtBigContent: () => ({
            color: theme.colors.white,
            marginVertical: scale(15)
        }),
        txtSmallContent: () => ({ color: theme.colors.white })
    }),
    itemNormalTimeStyle: (theme) => ({
        button: () => ({
            backgroundColor: theme.colors.backgroundCalendar,
            height: scale(120),
            width: scale(82),
            borderColor: theme.colors.line,
            borderTopWidth: 2,
            borderWidth: 1,
        }),
        viewAbove: () => ({
            justifyContent: 'center',
            alignItems: 'center',
            //borderColor: 'transparent',
            borderColor: theme.colors.line,
            borderBottomWidth: 2,
        }),
        txtTitle: () => ({
            marginVertical: scale(10),
            marginHorizontal: scale(26),
            color: theme.colors.txtTitleTime,
        }),
        viewContent: {
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center'
        },
        txtBigContent: () => ({
            color: theme.colors.txtContentTime,
            marginVertical: scale(15)
        }),
        txtSmallContent: () => ({ color: theme.colors.txtContentTime })
    }),
    btnActive: (theme) => ({
        btnSelectionStyle: {
            flex: 1,
            alignItems: 'center'
        },
        viewBtnSelectionStyle: {
            borderBottomColor: theme.colors.orangeDark,
            borderBottomWidth: scale(4),
            width: '80%',
            alignItems: 'center',
        },
        txtTitleBtnSelection: {
            color: theme.colors.orangeDark,
            marginVertical: scale(10)
        },
    }),
    btnNormal: (theme) => ({
        btnSelectionStyle: {
            flex: 1,
            alignItems: 'center'
        },
        viewBtnSelectionStyle: {
            width: '80%',
            alignItems: 'center',
        },
        txtTitleBtnSelection: {
            color: theme.colors.txtCardTitle,
            marginVertical: scale(10)
        },
    }),
    flastList: {
        marginTop: -3,
    },
    formButtonSelection: {
        marginTop: 3,
        flexDirection: 'row',
        height: scale(50),
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Calendar;