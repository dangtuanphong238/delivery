import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ic_error from '../../assets/images/images/svg/ic_error';
import ic_jam_coin from '../../assets/images/images/svg/ic_jam_coin';
import ic_lock from '../../assets/images/images/svg/ic_lock';
import ic_success_green from '../../assets/images/images/svg/ic_success_green';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import IconMaterialOrImageOrSvg, { IconType } from './IconMaterialOrImageOrSvg';
import { body2, body3, headline2, headline3, headline4, headline5, Text } from './Text';

const TaskRewardPointItem = ({ item }) => {
    const t = useTranslation();
    const theme = useContext(ThemeContext);
    const navigation = useNavigation();
    // const orderStatus = useOrderStatus()(item.status);
    // const newData = item.data
    //     ? item.data.length > 2
    //         ? getNewData(item.data)
    //         : item.data
    //     : null;

    // function getNewData(data) {
    //     if (data) {
    //         var tempData = [];
    //         tempData.push(data[0]);
    //         tempData.push({
    //             title: '+ ' + (data.length - 2) + ' điểm dừng ...',
    //             titleStyle: { color: theme.colors.greyDark2 },
    //         });
    //         tempData.push(data[data.length - 1]);
    //         return tempData;
    //     }
    // }

    // const navigateToDetails = () => {
    //     navigation.navigate(ORDER_DETAILS_SCREEN, { item: item });
    // };

    // const navigateToDeliveredDetails = () => {
    //     navigation.navigate(ORDER_DELIVERED_DETAILS_SCREEN, { item: item });
    // }
    // const handleNavigation = (status) => {
    //     switch (status) {
    //         case ORDER_STATUS.COMPLETE:
    //             return navigateToDeliveredDetails()
    //         default:
    //             return navigateToDetails()
    //     }
    // }

    const handleIcon = (target) => {
        if (target === 'success') {
            return ic_success_green;
        }
        else if (target === 'error') {
            return ic_error;
        } else {
            return ic_lock;
        }
    };
    const handleColor = (text) => {
        if (text === 'success' || text === 'Đã đạt mục tiêu hôm nay') {
            return theme.colors.success;
        }
        else if (text === 'error' || text === 'Chưa đạt mục tiêu hôm nay') {
            return theme.colors.error;
        } else {
            return theme.colors.gray;
        }
    };

    const renderItemTarget = (target, number) => (
        <View style={styles.viewItemCenterRight(handleColor(target))}>
            <Text type={body2} style={styles.txtTarget(theme)}>{number}</Text>
            <View style={styles.icStatus(theme)}>
                <View style={styles.viewRadius(theme, target)}>
                    <IconMaterialOrImageOrSvg
                        type={IconType.Svg}
                        size={scale(17)}
                        SVGIcon={handleIcon(target)}
                    />
                </View>
            </View>
        </View>
    );
    return (
        // <TouchableOpacity onPress={() => handleNavigation(item.status)}>
        <TouchableOpacity>
            <View style={styles.container(theme)}>
                <View style={styles.viewItemTop(theme)}>
                    <View style={styles.viewItemTopLeft(theme)}>
                        <Text type={body3} style={{ color: theme.colors.gray1 }}>{item.month}</Text>
                        <Text type={headline3} style={styles.txtDay(theme)}>{item.day}</Text>
                        <Text type={body3} style={{ color: theme.colors.gray1 }}>{item.dayOfWeek}</Text>
                    </View>
                    <View style={styles.viewItemTopRight}>
                        <View style={styles.txtPick(theme)}>
                            <Text type={headline5}>{t.translate('take')}</Text>
                            <Text type={headline4}>{item.coin} {t.translate('coin')}</Text>
                        </View>
                        <View style={{ paddingVertical: scale(5), paddingLeft: scale(10), paddingRight: scale(30) }}>
                            <Text type={headline5}>{t.translate('getMore')}</Text>
                            <Text type={headline4}>{item.money}Đ</Text>
                        </View>
                    </View>
                </View>
                {/* center */}
                <View style={styles.viewItemCenter(theme)}>
                    <View style={styles.viewItemCenterLeft}>
                        <Text type={headline5}>{t.translate('coinsReceived')}</Text>
                        <View style={styles.viewCoin}>
                            <Text type={headline2} style={{ color: theme.colors.txtCoin, marginRight: scale(3) }}>{item.coin}</Text>
                            <IconMaterialOrImageOrSvg
                                type={IconType.Svg}
                                size={scale(20)}
                                SVGIcon={ic_jam_coin}
                            />
                        </View>
                    </View>
                    <View style={styles.alignCenter}>
                        <Text type={headline5}>{t.translate('target')}</Text>
                        <View style={styles.viewItemTopRight}>
                            {renderItemTarget(item.target1, 5)}
                            {renderItemTarget(item.target2, 10)}
                            {renderItemTarget(item.target3, 15)}
                            {renderItemTarget(item.target4, 20)}
                        </View>
                    </View>
                </View>
                <View style={styles.viewItemBot(theme)}>
                    <Text type={body3} style={styles.txtBottomLeft(theme, handleColor(item.title))}>{item.title}</Text>
                    <View style={styles.alignCenter}>
                        <Text type={body3} style={{ color: theme.colors.txtTitleTime }}>{t.translate('rewards')}</Text>
                        <Text type={headline4}>50.000Đ</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: theme => ({
        flexDirection: 'column',
        margin: 8,
        backgroundColor: theme.colors.white,
        borderRadius: scale(8),
        shadowColor: theme.colors.black,
        elevation: 3,
    }),
    viewItemBot: theme => ({
        paddingHorizontal: scale(20),
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
        backgroundColor: theme.colors.gray4,
        height: scale(55),
        flexDirection: 'row', justifyContent: 'space-between',
    }),
    txtBottomLeft: (theme, handleColor) => ({
        alignSelf: 'center',
        color: handleColor,
    }),
    alignCenter: { alignItems: 'flex-start', justifyContent: 'center' },
    viewItemTop: theme => ({
        paddingHorizontal: scale(20),
        alignItems: 'center',
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
        backgroundColor: theme.colors.white,
        height: scale(100), flexDirection: 'row', justifyContent: 'space-between',
    }),
    viewItemTopLeft: theme => ({
        elevation: 1.5,
        alignItems: 'center',
        backgroundColor: theme.colors.white1,
        borderRadius: scale(10),
        paddingHorizontal: scale(5),
        paddingVertical: scale(10),
    }),
    viewItemTopRight: { flexDirection: 'row', marginTop: scale(5) },
    viewItemCenter: theme => ({
        borderTopColor: theme.colors.border,
        borderTopWidth: 0.5,
        backgroundColor: theme.colors.white,
        height: scale(81), flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(20),
    }),
    viewItemCenterLeft: { justifyContent: 'center' },
    viewCoin: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: scale(5),
    },
    txtDay: theme => ({
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingHorizontal: scale(15),
        borderTopColor: theme.colors.line,
        borderBottomColor: theme.colors.line,
    }),
    txtPick: theme => ({
        paddingVertical: scale(5),
        borderEndColor: theme.colors.border,
        borderEndWidth: 0.8,
        paddingRight: scale(10),
    }),
    viewItemCenterRight: (handleBackground) => ({
        borderRadius: scale(30),
        justifyContent: 'center',
        backgroundColor: handleBackground,
        height: scale(30),
        width: scale(30),
        marginRight: scale(5),
    }),
    txtTarget: theme => ({
        alignSelf: 'center',
        color: theme.colors.white,
    }),
    icStatus: (theme) => ({
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: '65%',
        left: '65%',

    }),
    viewRadius: (theme, target) => ({
        width: scale(17),
        height: scale(17),
        alignItems: 'center',
        justifyContent: 'center',
    }),
});

export default TaskRewardPointItem;
