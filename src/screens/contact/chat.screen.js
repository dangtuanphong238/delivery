import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import icon_phone from '../../assets/images/icons/svg/ic_phone.svg';
import img_person1 from '../../assets/images/images/img_person1.png';
import img_person2 from '../../assets/images/images/img_person2.png';
import BackIcon from '../../components/common/BackIcon';
import CardCall from '../../components/common/CardCall';
import IconMaterialOrImageOrSvg, { IconType } from '../../components/common/IconMaterialOrImageOrSvg';
import SafeContainer from '../../components/common/SafeContainer';
import { body2, headline2, headline4, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { CALL_SCREEN, CHAT_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import BottomBar from './chat.component/chat.bottom_bar';
import ChatCard from './chat.component/chat.card';
const ChatScreen = ({ route, navigation }) => {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    let smallScreen = route.param?.screen;
    let smallCount = route.params?.count;
    const [openCallView, setopenCallView] = useState(false);
    let _count = 0;
    useEffect(() => {
        smallCount && setopenCallView(true);
    }, [smallCount]);

    const _user = { name: "Mei", order: 'OR3021' };
    const titleToolBar = (user) => {
        return (
            <View>
                <Text style={styles.titleStyle(theme)} type={headline2}>{user.name}</Text>
                <View style={styles.svTitleToolbarStyle()}>
                    <Text style={styles.contentCenter()} type={body2}>Đơn hàng: </Text>
                    <Text style={styles.contentCenter()} type={headline4}>{user.order}</Text>
                </View>
            </View>
        );
    };
    const navigateToCallSreen = () => {
        setopenCallView(false);
        navigation.navigate(CALL_SCREEN, { screenName: CHAT_SCREEN, count: smallCount ? smallCount : _count });
    };
    const rightToolBar = () => {
        return (
            <TouchableOpacity onPress={navigateToCallSreen}>
                <IconMaterialOrImageOrSvg
                    style={styles.rightToolBarStyle}
                    type={IconType.Svg}
                    size={scale(20)}
                    SVGIcon={icon_phone}
                />
            </TouchableOpacity>
        );
    };
    let _date = '22/09/2021'
    let _contentDemo = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Occaecat cupidatat non proident.';
    return (
        <SafeContainer style={styles.container(theme)}>
            <ToolBar
                style={styles.toolBarStyle(theme)}
                left={<BackIcon color={theme.colors.orangeDark} />}
                barStyle="dark-content"
                center={
                    titleToolBar(_user)
                }
                right={
                    rightToolBar()
                }
                rightStyle={styles.rightToolBarStyle}
            />
            <View style={styles.containerStyle(theme)}>
                <Text style={styles.txtTime(theme)} type={headline4}>{_date}</Text>
                <ScrollView >
                    <ChatCard side={true} content={_contentDemo} />
                    <ChatCard side={true} content={_contentDemo} />
                    <ChatCard side={true} image={img_person2} content={_contentDemo} time={'11:00 PM'} />
                    <ChatCard image={img_person1} content={_contentDemo} time={'11:30 PM'} />
                </ScrollView>
                <BottomBar />
            </View>
            {openCallView && <CardCall getStatus={(param) => { setopenCallView(false); }} />}
        </SafeContainer>
    );
};

const styles = StyleSheet.create({
    contentCenter: () => ({
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }),
    titleStyle: (theme) => ({
        color: theme.colors.orangeDark,
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }),
    rightToolBarStyle: {
        paddingRight: scale(24),
    },
    container: theme => ({
        backgroundColor: theme.colors.white,
        flex: 1,
    }),
    containerStyle: (theme) => ({
        flex: 1,
        flexDirection: 'column',
        backgroundColor: theme.colors.backgroundChat,
        overflow: 'hidden',
    }),
    txtTime: (theme) => ({
        textAlign: 'center',
        color: theme.colors.gray,
        marginTop: scale(10),
    }),
    svTitleToolbarStyle: () => ({ flexDirection: 'row' }),
    toolBarStyle: (theme) => ({
        backgroundColor: theme.colors.white,
        marginBottom: scale(10),
    }),
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
    connect(mapStateToProps, mapDispatchToProps)(ChatScreen),
);