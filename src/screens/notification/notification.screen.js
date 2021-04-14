import React, { useContext, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
// import Toast from 'react-native-simple-toast';
import Toast from 'react-native-easy-toast';
import ic_done_task from '../../assets/images/images/svg/ic_done_task';
import ic_new_order from '../../assets/images/images/svg/ic_new_order';
import ic_tick_list from '../../assets/images/images/svg/ic_tick_list';
import ic_tip_money from '../../assets/images/images/svg/ic_tip_money';
import BackIcon from '../../components/common/BackIcon';
import IconMaterialOrImageOrSvg, {
    IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import { body3, headline2, headline4, headline5, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function NotificationScreen({ navigation }) {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const [mark, setMark] = useState(true);
    const toastRef = useRef();

    const seenAllHandle = () => {
        setMark(false);
        toastRef.current.show(t.translate('markAsReadAll'), 2000);
    };

    const _renderItem = (icon, title, content, date, mark, onPress) => (
        <TouchableOpacity style={styles.item(theme)} onPress={onPress}>
            <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(59)}
                SVGIcon={icon}
            />
            <View style={styles.viewRight}>
                <View style={styles.viewTitle}>
                    <Text type={headline4} style={styles.txtItem}>{title}</Text>
                    {mark && <View style={{ width: scale(10), height: scale(10), borderRadius: scale(10), backgroundColor: theme.colors.orangeDark }} />}
                </View>
                <Text type={headline5} style={styles.txtItem}>{content}</Text>
                <Text type={body3} style={styles.txtDateItem(theme)}>{date}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white, paddingVertical: scale(5) }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2} style={styles.titleToolBar(theme)}>
                        {t.translate('notification')}
                    </Text>
                }
                right={
                    <TouchableOpacity style={{ marginRight: scale(10) }} onPress={seenAllHandle}>
                        <IconMaterialOrImageOrSvg
                            type={IconType.Svg}
                            size={scale(30)}
                            SVGIcon={ic_tick_list}
                        />
                    </TouchableOpacity>
                }
            />
            <ScrollView contentContainerStyle={styles.contentView(theme)}>
                {_renderItem(ic_new_order, "Đơn mới", "Bạn nhận được đơn hàng mới!", "12:47 - 28/09/2020", mark)}
                {_renderItem(ic_tip_money, "Tiền tip", "Khách hàng vừa tip cho bạn 10k. Kiểm tra tài khoản ngay!", "19:23 - 27/09/2020", mark)}
                {_renderItem(ic_done_task, "Xong việc", "Bạn vừa hoàn thành đơn hàng OR1028. Cảm ơn nhé!", "19:00 - 25/09/2020")}
            </ScrollView>
            <Toast
                // ref={(toast) => this.toast = toast}
                ref={toastRef}
                style={{ backgroundColor: theme.colors.orangeDark, borderRadius: scale(30), paddingVertical: scale(12), paddingHorizontal: scale(17), }}
                position='bottom'
                positionValue={scale(70)}
                textStyle={{ fontSize: scale(14), color: theme.colors.white }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleToolBar: theme => ({
        color: theme.colors.black,
    }),
    contentView: theme => ({
        alignItems: 'center',
    }),
    item: theme => ({
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(15),
        elevation: 1,
        borderRadius: scale(12),
        width: '90%',
        backgroundColor: theme.colors.white,
        marginTop: scale(9),
        paddingVertical: scale(5),
    }),
    txtDateItem: theme => ({
        color: theme.colors.gray,
        marginBottom: scale(4),
        marginHorizontal: scale(10),
    }),
    txtItem: { marginBottom: scale(4), paddingHorizontal: scale(18) },
    viewRight: { width: '90%', marginRight: scale(15) },
    viewTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: scale(25),
        alignItems: 'center',
    },
});
