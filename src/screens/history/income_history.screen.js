/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import BackIcon from '../../components/common/BackIcon';
import SafeContainer from '../../components/common/SafeContainer';
import { body2, headline2, headline4, headline5, headline6, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import SkeletonListHistoryIncome from '../../components/common/SkeletonListHistoryIncome';

function DeliveredScreen({ route, navigation }) {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    useEffect(() => { }, []);
    const [data, setData] = useState([]);
    setTimeout(() => {
        setData([
            {
                id: 'OR2150',
                title: 'Giao nhanh',
                status: 5,
                distance: '2.5 km',
                cost: 30000,
                newCost: 20000000,
                price: 1000000,
                pointReceive: 10,
                payment: 'Thu hộ',
                date: '09/09/2020',
                time: '17:57',
                description: 'Đơn hàng bánh giò lúc 17:57, Thứ hai ngày 09 tháng 09',
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
                id: 'OR2151',
                title: 'Giao 4h',
                status: 5,
                distance: '5.5 km',
                cost: 26000,
                price: 800000,
                pointReceive: 8,
                payment: 'Momo',
                date: '09/09/2020',
                time: '17:57',
                description: 'Đơn hàng bánh giò lúc 17:00, Thứ hai ngày 09 tháng 09',
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
                id: 'OR2152',
                title: 'Giao nhanh',
                status: 5,
                distance: '1.5 km',
                cost: 10000,
                newCost: 200000,
                price: 500000,
                pointReceive: 5,
                payment: 'Momo',
                date: '09/09/2020',
                time: '17:57',
                description: 'Đơn hàng bánh giò lúc 17:57, Thứ hai ngày 09 tháng 09',
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
            {
                id: 'OR2153',
                title: 'Giao nhanh',
                status: 5,
                distance: '2.5 km',
                cost: 30000,
                newCost: 20000000,
                price: 1000000,
                pointReceive: 10,
                payment: 'Thu hộ',
                date: '09/09/2020',
                time: '17:57',
                description: 'Đơn hàng bánh giò lúc 17:57, Thứ hai ngày 09 tháng 09',
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
                id: 'OR2154',
                title: 'Giao 4h',
                status: 5,
                distance: '5.5 km',
                cost: 26000,
                price: 800000,
                pointReceive: 8,
                payment: 'Momo',
                date: '09/09/2020',
                time: '17:57',
                description: 'Đơn hàng bánh giò lúc 17:00, Thứ hai ngày 09 tháng 09',
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
                id: 'OR2155',
                title: 'Giao nhanh',
                status: 5,
                distance: '1.5 km',
                cost: 10000,
                newCost: 200000,
                price: 500000,
                pointReceive: 5,
                payment: 'Momo',
                date: '08/08/2020',
                time: '17:57',
                description: 'Đơn hàng bánh giò lúc 17:57, Thứ hai ngày 09 tháng 09',
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
        ]);
    }, 600);

    const colorCollect = theme.colors.itemCollect;
    const colorMomo = theme.colors.itemMomo;
    const getItemColor = (item) => {
        switch (item.payment) {
            case 'Momo': return colorMomo;
            case 'Collect': return colorCollect;
            default:
                return colorCollect;
        }
    };

    const tranferCostIntoPrice = (cost) => {
        let price;
        if (cost.length > 3) {
            price = cost.substring(0, cost.length - 3)
                + '.' + cost.substring(cost.length - 3, cost.length) + 'Đ';
        }
        if (cost.length > 6) {
            price = cost.substring(0, cost.length - 6)
                + '.' + cost.substring(cost.length - 6, cost.length - 3)
                + '.' + cost.substring(cost.length - 3, cost.length) + 'Đ';
        }
        if (cost.length > 9) {
            price = cost.substring(0, cost.length - 9)
                + '.' + cost.substring(cost.length - 9, cost.length - 6)
                + '.' + cost.substring(cost.length - 6, cost.length - 3)
                + '.' + cost.substring(cost.length - 3, cost.length) + 'Đ';
        }
        return price;
    };
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
        newMonth = item.date;
        let check;
        if (newMonth !== oldMonth) {
            oldMonth = newMonth;
            check = true;
        }
        else { check = false; }
        const cost = item?.newCost ? item.newCost : item.cost;
        return (
            <>
                {check && itemMonth(time)}
                <View style={styles.overViewStyle(theme)}>
                    <View style={styles.viewTopStyle}>
                        <View style={styles.viewDateStyle}>
                            <Text style={{ color: theme.colors.txtDateIncomeHistory }} type={headline5}>{item?.date + ' - ' + item?.time}</Text>
                        </View>
                        <View style={styles.cardCollectStyle}>
                            <View style={styles.containerCardStyle}>
                                <View style={styles.smallContainerCardStyle(getItemColor(item))}>
                                    <Text
                                        type={headline5}
                                        style={styles.txtCardCollectStyle(theme)}>{item.payment}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewCenterStyle}>
                        <View style={styles.viewIDStyle}>
                            <Text type={headline4} style={styles.txtColorNormalStyle(theme)}>{item?.id}</Text>
                        </View>
                        <View style={styles.viewCostStyle}>
                            <View style={styles.viewTxtCostStyle}>
                                <Text
                                    type={headline5}
                                    style={styles.txtCostStyle(theme)}>{tranferCostIntoPrice(cost + '')}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewBottomStyle}>
                        <Text type={headline6} bold={true} style={styles.txtColorNormalStyle(theme)}>{item.description}</Text>
                        <View style={styles.viewTotalStyle}>
                            <Text type={body2} style={styles.txtColorNormalStyle(theme)}>Tổng đơn: </Text>
                            <Text type={headline5} style={styles.txtColorNormalStyle(theme)}>{tranferCostIntoPrice((item?.price + cost) + '')}</Text>
                        </View>
                    </View>
                </View>
            </>
        );
    };
    const keyExtractor = (item, index) => item.id.toString();
    return (
        <SafeContainer style={styles.container(theme)} >
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2} style={styles.titleToolBar(theme)}>
                        {t.translate('income_history_screen')}
                    </Text>
                }
            />
            <View style={styles.viewFlatlist}>
                <FlatList
                    data={data}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    ListEmptyComponent={
                        <View style={{ marginHorizontal: scale(20) }}>
                            <SkeletonListHistoryIncome numOfArray={7} />
                        </View>}
                />
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
        color: theme.colors.txtTitleDeliveredScreen,
    }),
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
    overViewStyle: theme => ({
        paddingTop: scale(30),
        paddingBottom: scale(20),
        borderBottomColor: theme.colors.line,
        borderBottomWidth: 1,
        width: '100%',
        paddingHorizontal: scale(40),
        flexDirection: 'column',
    }),
    viewTopStyle: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    viewDateStyle: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    cardCollectStyle: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    containerCardStyle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallContainerCardStyle: (color) => ({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: scale(10),
        height: scale(28),
        width: scale(70),
    }),
    txtCardCollectStyle: theme => ({
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        color: theme.colors.white,
    }),
    viewCenterStyle: {
        marginTop: scale(6),
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    viewIDStyle: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    txtColorNormalStyle: theme => ({ color: theme.colors.txtNormalIncomHistory }),
    txtCostStyle: theme => ({
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        color: theme.colors.txtNormalIncomHistory,
    }),
    viewCostStyle: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '30%',
    },
    viewTxtCostStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
    },
    viewBottomStyle: {
        width: '80%',
        marginTop: scale(6),
    },
    viewTotalStyle: {
        flexDirection: 'row',
        marginTop: scale(6),
    },
    viewFlatlist: {
        flex: 1,
    },
});

export default connect(null, null)(DeliveredScreen);
