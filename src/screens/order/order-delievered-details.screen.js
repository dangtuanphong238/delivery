import React, { useContext, useEffect } from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import icLocation from '../../assets/images/icons/svg/ic_location.svg';
import point from '../../assets/images/images/svg/point.svg';
import BackIcon from '../../components/common/BackIcon';
import IconMaterialOrImageOrSvg, {
    IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import PrimaryButton from '../../components/common/PrimaryButton';
import RowMoney from '../../components/common/RowMoney';
import SafeContainer from '../../components/common/SafeContainer';
import {
    body3,
    headline3,
    headline4,
    headline5,
    headline6,
    Text
} from '../../components/common/Text';
import Timeline from '../../components/common/TimeLine';
import ToolBar from '../../components/common/Toolbar';
import { formatDefaultVND } from '../../helpers/format.helper';
import useOrderStatus from '../../hooks/useOrderStatus';
import useTranslation from '../../i18n';
import {
    HOME_SCREEN,

    MAPS_SCREEN, PROCESS_SCREEN
} from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale, WINDOW_WIDTH } from '../../theme/dimens';
// import Tooltip from 'rn-tooltip';
import Tooltip from 'react-native-walkthrough-tooltip';
import Dash from 'react-native-dash';
import colors from '../../theme/colors';


const OrderDeliveredDetailsScreen = ({ route, navigation }) => {
    const theme = useContext(ThemeContext);
    const item = route.params.item;
    const orderStatus = useOrderStatus()(item.status);
    const t = useTranslation();
    // const [isShowToolTip, setIsShowToolTip] = useState(false);

    useEffect(() => { }, []);

    const date = '09/09/2020'
    const time = '17:57'
    const status = item.status
    const widthLine = WINDOW_WIDTH - scale(30) * 2
    return (
        <SafeContainer style={styles.container(theme)}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white, }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={<Text type={headline3}>{t.translate('detailsOfTheTrip')}</Text>}
            />
            <ScrollView style={styles.containerContent(theme)}>
                <Text style={styles.txtTimeStyle(theme)} bold={true} type={headline6}>{date} - {time}</Text>
                <Timeline
                    delivered={status}
                    containerStyle={styles.timeLineStyle}
                    rowContainer={styles.rowTimeLineContainer}
                    data={item.data}
                />
                <View style={styles.distanceContainer(theme)}>
                    <Dash
                        dashColor={theme.colors.greyDark2}
                        style={styles.dashStyle(widthLine)}
                        dashGap={scale(6)} dashLength={5}
                        dashThickness={1} />
                    <View style={styles.rowDistance}>
                        <Text type={body3} style={styles.greyLightStyle(theme)}>
                            {t.translate('route') + ' - '}
                        </Text>
                        <Text type={headline4}>{item.distance}</Text>
                    </View>
                </View>
                <View style={styles.cardInfo(theme)}>
                    <View style={styles.rowStatus(theme)}>
                        <View style={styles.viewIDStyle}>
                            <Text type={headline4}>{item.id}</Text>
                            <View style={styles.pointDetail}>
                                <IconMaterialOrImageOrSvg
                                    type={IconType.Svg}
                                    size={scale(16)}
                                    SVGIcon={point}
                                />
                                <Text type={body3} >
                                    {t.translate('accumulated') +
                                        ' +' +
                                        item.pointReceive +
                                        'đ ' +
                                        t.translate('từ đơn hàng')}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.statusStyle(orderStatus?.color)}>
                            <Text type={headline6} style={styles.textWhite(theme)}>
                                {orderStatus?.text}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.groupPrice(theme)}>
                        <RowMoney
                            noInfo
                            title={t.translate('totalDeliveryFee')}
                            value1={item.newCost ? item.cost : null}
                            value2={item.newCost ?? item.cost}
                        />
                        <RowMoney
                            noInfo
                            title={t.translate('totalCollectionFee')}
                            containerStyle={styles.containerCollect}
                            value2={item.price}
                        />
                        <RowMoney
                            title={t.translate('serviceSurcharge')}
                            rightStyle={styles.rightServiceStyle(theme)}
                            noInfo
                            value2={0}
                        />
                    </View>
                    <View style={styles.rightTotalStyle(theme)}>
                        <Text type={headline5} style={styles.redStyle(theme)}>
                            {t.translate('totalOrders')}
                        </Text>
                        <Text type={headline5} style={styles.redStyle(theme)}>
                            {formatDefaultVND((item.newCost ?? item.cost) + item.price)}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeContainer >
    );
};
const styles = StyleSheet.create({
    txtTimeStyle: theme => ({
        marginVertical: scale(20),
        marginHorizontal: scale(30),
        color: theme.colors.greyDark2,
    }),
    dashStyle: widthLine => ({
        //marginHorizontal: scale(16),
        width: widthLine,
        alignSelf: 'center',
    }),
    container: theme => ({
        flex: 1,
    }),
    containerContent: theme => ({
        flex: 1,
        backgroundColor: theme.colors.white,
    }),
    rowStatus: theme => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(16),
        paddingVertical: scale(20),
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    }),
    textWhite: theme => ({
        color: theme.colors.white,
    }),
    greyLightStyle: theme => ({
        color: theme.colors.greyD2,
    }),
    statusStyle: colors => ({
        height: scale(30),
        paddingHorizontal: scale(20),
        borderRadius: scale(7),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors,
        flexDirection: 'column',
    }),
    groupPrice: theme => ({
        flexDirection: 'column',
        paddingHorizontal: scale(16),
        paddingVertical: scale(10),
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
    }),
    rightServiceStyle: theme => ({
        backgroundColor: theme.colors.greyLight2,
        paddingLeft: scale(40),
        borderRadius: scale(4),
    }),
    rightTotalStyle: theme => ({
        paddingHorizontal: scale(16),
        paddingVertical: scale(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }),
    distanceContainer: theme => ({
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: scale(10),
        marginTop: scale(24),
        marginBottom: scale(16),
    }),
    containerCollect: {
        marginVertical: scale(15),
    },
    redStyle: theme => ({
        paddingVertical: scale(10),
        color: theme.colors.textRed,
    }),
    rowDistance: {
        marginTop: scale(25),
        marginHorizontal: scale(30),
        flexDirection: 'row',
        alignItems: 'center',
    },
    pointDetail: {
        flexDirection: 'row',
        marginTop: scale(5),
    },
    timeLineStyle: {
        marginTop: scale(8),
        marginHorizontal: scale(14),
        paddingHorizontal: 0,
    },
    rowTimeLineContainer: {
        //height: scale(60),
        paddingHorizontal: 0,
        marginHorizontal: 0,
    },
    cardInfo: theme => ({
        marginHorizontal: scale(16),
        backgroundColor: theme.colors.backgroundFeeCard,
        borderRadius: scale(8),
        marginBottom: scale(20),
    }),
    viewIDStyle: {
        alignItems: 'flex-start',
    },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
    connect(mapStateToProps, mapDispatchToProps)(OrderDeliveredDetailsScreen),
);
