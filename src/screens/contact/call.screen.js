import React, { useContext, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import ic_arrowDown from '../../assets/images/icons/svg/ic_arrowDown.svg';
import ic_inSpeaker from '../../assets/images/icons/svg/ic_inSpeaker.svg';
import ic_outSpeaker from '../../assets/images/icons/svg/ic_outSpeaker.svg';
import ic_phoneDown from '../../assets/images/icons/svg/ic_phoneDown.svg';
import img_female from '../../assets/images/images/img_female.jpg';
import IconMaterialOrImageOrSvg, { IconType } from '../../components/common/IconMaterialOrImageOrSvg';
import SafeContainer from '../../components/common/SafeContainer';
import { headline2, headline6, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
const CallScreen = ({ route, navigation }) => {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const [button, setButton] = useState(false);
    const prevScreen = route.params?.screenName;
    let count = Number(route.params?.count);
    count++;
    const navigateBack = () => {
        navigation.goBack();
    };
    const formButton = () => {
        const handleClick = () => {
            setButton(!button);
        }
        return (
            <View style={styles.viewFormButtonStyle()}>
                <TouchableOpacity style={styles.buttonStyle()} onPress={handleClick}>
                    <IconMaterialOrImageOrSvg
                        size={scale(70)}
                        type={IconType.Svg}
                        SVGIcon={button ? ic_outSpeaker : ic_inSpeaker}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle()} onPress={navigateBack}>
                    <IconMaterialOrImageOrSvg
                        size={scale(70)}
                        type={IconType.Svg}
                        SVGIcon={ic_phoneDown}
                    />
                </TouchableOpacity>
            </View>
        );
    };
    const formText = ({ user, state }) => {
        return (
            <View style={styles.viewTextStyle()}>
                <Text style={styles.txtStyle(theme)} type={headline2}>{user}</Text>
                <Text style={styles.txtStyle(theme)} type={headline6}>{state}</Text>
            </View>
        );
    };
    const navigationScreen = (name, params) => () => {
        navigation.navigate(name, params);
      };
    const user = { user: "Mei", state: "Connecting..." };
    return (
        <SafeContainer style={styles.container(theme)}>
            <ToolBar
                style={styles.toolbarStyle(theme)}
                left={
                    <TouchableOpacity style={styles.leftToolbarStyle()} onPress={navigationScreen(prevScreen, { count: count, screen: true })}>
                        <IconMaterialOrImageOrSvg
                            type={IconType.Svg}
                            size={scale(20)}
                            SVGIcon={ic_arrowDown}
                        />
                    </TouchableOpacity>
                }
                barStyle="dark-content"
            />
            <View style={styles.viewAvatarStyle(theme)}>
                <Image
                    style={styles.imgAvartarStyle()}
                    source={img_female}
                    size={scale(131)}
                    resizeMode='cover'
                />
                {formText(user)}
                {formButton()}
            </View>
        </SafeContainer>
    );
};

const styles = StyleSheet.create({
    container: theme => ({
        backgroundColor: theme.colors.white,
        flex: 1,
    }),
    viewFormButtonStyle: () => ({
        flexDirection: 'row',
        top: scale(300),
    }),
    buttonStyle: () => ({ margin: scale(30) }),
    toolbarStyle: (theme) => ({ backgroundColor: theme.colors.white }),
    leftToolbarStyle: () => ({
        top: scale(20),
        left: scale(20),
        right: scale(20),
        bottom: scale(20),
        marginBottom: scale(30),
    }),
    viewAvatarStyle: (theme) => ({
        flex: 1,
        backgroundColor: theme.colors.backgroundCall,
        alignItems: 'center',
    }),
    imgAvartarStyle: () => ({ top: scale(140) }),
    viewTextStyle: () => ({
        top: scale(160),
        alignItems: 'center',
    }),
    txtStyle: (theme) => ({ color: theme.colors.white }),
});


const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default React.memo(
    connect(mapStateToProps, mapDispatchToProps)(CallScreen),
);