import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import SafeContainer from '../../components/common/SafeContainer';
import { verticalScale } from '../../theme/dimens';
import Calendar from './dilievered.component/calendar'
import { scale } from '../../theme/dimens';
import { theme, ThemeContext } from '../../theme';
import useTranslation from '../../i18n';
import ToolBar from '../../components/common/Toolbar';
import BackIcon from '../../components/common/BackIcon';
import { Text, headline2, headline4, headline5 } from '../../components/common/Text'
import ListOrder from '../../components/common/ListOrder'
function DeliveredScreen({ route, navigation }) {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    useEffect(() => { }, []);
    const data = [
        {
            id: '#OR2150',
            title: 'Giao nhanh',
            status: 5,
            distance: '2.5 km',
            cost: 30000,
            newCost: 20000,
            price: 1000000,
            pointReceive: 10,
            payment: 'Thu hộ',
            data: [
                {
                    //time: '09:00',
                    title: '330 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q. 1, TP. Hồ Chí Minh',
                    address_name: 'Bánh giò A&B Trần Hưng Đạo',
                    circleColor: theme.colors.dotActive,
                },
                {
                    //time: '10:45',
                    address_name: 'Mei Chung (Nhận bên ngoài)',
                    title:
                        'ACV - Tòa nhà TCT Cảng Hàng Không Việt Nam - 58 Trường Sơn, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
                    circleColor: theme.colors.dotComplete,
                },
            ],
        },
        {
            id: '#OR2151',
            title: 'Giao 4h',
            status: 5,
            distance: '5.5 km',
            cost: 26000,
            price: 800000,
            pointReceive: 8,
            payment: 'Momo',
            data: [
                {
                    //time: '09:00',
                    title: '330 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q. 1, TP. Hồ Chí Minh',
                    address_name: 'Bánh giò A&B Trần Hưng Đạo',
                    circleColor: theme.colors.dotActive,
                },
                {
                    //time: '10:45',
                    address_name: 'Mei Chung (Nhận bên ngoài)',
                    title:
                        'ACV - Tòa nhà TCT Cảng Hàng Không Việt Nam - 58 Trường Sơn, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
                    circleColor: theme.colors.dotComplete,
                },
                {
                    //time: '10:45',
                    address_name: 'Ly Nguyễn (Tầng 1 - Văn phòng Softworld)',
                    title:
                        'ACV - Tòa nhà TCT Cảng Hàng Không Việt Nam - 58 Trường Sơn, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
                    circleColor: theme.colors.dotComplete,
                },
            ],
        },
        {
            id: '#OR2152',
            title: 'Giao nhanh',
            status: 5,
            distance: '1.5 km',
            cost: 10000,
            newCost: 20000,
            price: 500000,
            pointReceive: 5,
            payment: 'Momo',
            data: [
                {
                    //time: '09:00',
                    address_name: 'Quốc Tồ Tầng 3s',
                    title: '330 Trần Hưng Đạo, P. Nguyễn Cư Trinh, Q. 1, TP. Hồ Chí Minh',
                    circleColor: theme.colors.dotActive,
                },
                {
                    //time: '10:45',
                    address_name: 'Quốc Tồ Tầng 2',
                    title:
                        '56 Yên thế, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
                    circleColor: theme.colors.dotComplete,
                },
                {
                    //time: '10:45',
                    address_name: 'Quốc Tồ Tầng 1',
                    title:
                        '100 Yên thế, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
                    circleColor: theme.colors.dotComplete,
                },
                {
                    //time: '10:45',
                    address_name: 'Quốc Tồ',
                    title:
                        'ACV - Tòa nhà TCT Cảng Hàng Không Việt Nam - 58 Trường Sơn, P. 2, Q. Tân Bình, TP. Hồ Chí Minh',
                    circleColor: theme.colors.dotComplete,
                },
            ],
        },
    ];
    //This card notification used to annouce for user know to point and income added for 1 item.
    const cardNotification = ({ title, value }) => {
        return (
            <View style={styles.viewCardNotificationStyle(theme)}>
                <View style={styles.viewCardTitleStyle(theme)}>
                    <Text style={styles.txtTitleCardStyle(theme)} type={headline5}>{title}</Text>
                </View>
                <Text style={styles.txtCardValueStyle(theme)} type={headline2}>{value}</Text>
            </View>
        )
    }
    return (
        <SafeContainer style={styles.container(theme)} >
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2} style={styles.titleToolBar(theme)}>
                        {t.translate('delivery_screen')}
                    </Text>
                }
            />
            <View style={styles.overViewStyle}>
                <Calendar />
                <View style={styles.viewSub}>
                    <Text style={styles.txtNoBold(theme)} type={headline5}>{t.translate('Ngày') + ": "}</Text>
                    <Text style={styles.txtBold(theme)} type={headline5}>09/09/2020</Text>
                </View>
                <View style={styles.viewCardStyle}>
                    {cardNotification({ title: t.translate("Thu nhập"), value: "100.000Đ" })}
                    {cardNotification({ title: t.translate("Điểm tích lũy"), value: "+20" })}
                </View>
                <View style={styles.viewSub}>
                    <Text style={styles.txtNoBold(theme)} type={headline5}>{t.translate('Chuyến giao hoàn thành')}: </Text>
                    <Text style={styles.txtBold(theme)} type={headline5}>3 {t.translate('đơn')}</Text>
                </View>
                <View style={styles.viewListProduct(theme)}>
                    <ListOrder data={data} />
                </View>
            </View>
        </SafeContainer>
    );
}
const styles = StyleSheet.create({
    container: theme => ({
        backgroundColor: theme.colors.white,
        flex: 1,
    }),
    titleToolBar: theme => ({
        color: theme.colors.txtTitleDeliveredScreen
    }),
    overViewStyle: {
        flexDirection: 'column',
        flex: 1
    },
    viewSub: {
        flexDirection: 'row',
        marginHorizontal: scale(15),
        marginTop: scale(16),
        marginBottom: scale(5)
    },
    txtNoBold: theme => ({ color: theme.colors.txtDate }),
    txtBold: theme => ({ color: theme.colors.txtContentTime }),
    viewCardStyle: {
        paddingHorizontal: scale(15),
        alignItems: 'center',
        flexDirection: 'row'
    },
    viewListProduct: theme => ({
        flex: 1,
        backgroundColor: theme.colors.greyLight3,
    }),
    viewCardNotificationStyle: theme => ({
        elevation: 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.backgroundNotificationCard,
        borderRadius: scale(10),
        height: scale(75), margin: scale(5)
    }),
    viewCardTitleStyle: theme => ({
        borderBottomColor: theme.colors.lineCardNotification,
        borderBottomWidth: 1,
        width: '70%', alignItems: 'center'
    }),
    txtTitleCardStyle: (theme) => ({ color: theme.colors.txtCardTitle }),
    txtCardValueStyle: theme => ({
        color: theme.colors.txtCardValue,
        fontSize: scale(24)
    })
});

export default connect(null, null)(DeliveredScreen);
