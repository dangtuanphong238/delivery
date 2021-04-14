import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import useTranslation from '../../../i18n';
import { ThemeContext } from '../../../theme';
import { scale, WINDOW_WIDTH } from '../../../theme/dimens';
import { Text, headline4, caption } from '../../../components/common/Text';
import IconMaterialOrImageOrSvg, { IconType } from '../../../components/common/IconMaterialOrImageOrSvg'
import ic_attachment from '../../../assets/images/icons/svg/ic_attachment.svg'
import ic_arrowRight from '../../../assets/images/icons/svg/ic_arrowRight.svg'
import ic_microphone from '../../../assets/images/icons/svg/ic_microphone.svg'
import ic_close_attachment from '../../../assets/images/icons/svg/ic_close_attachment.svg'
import ic_capture from '../../../assets/images/icons/svg/ic_capture.svg'
import ic_album from '../../../assets/images/icons/svg/ic_album.svg'
import ic_locate_func from '../../../assets/images/icons/svg/ic_locate_func.svg'
import Map from './chat.map'
const BottomBar = () => {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const DATA = [
        {
            id: 1,
            content: 'Tôi đến rồi bạn ơi',
        },
        {
            id: 2,
            content: 'Cảm ơn bạn nhé!',
        },
        {
            id: 3,
            content: 'Ok bạn, tôi đến rồi',
        },
    ];
    const [getTextInput, setTextInput] = useState('')
    const handleItemClick = (item) => {
        setTextInput(item.content)
    }
    const guessWord = ({ item }) => {
        return (
            <TouchableOpacity style={styles.guessWordStyle(theme)}
                onPress={() => handleItemClick(item)}
            >
                <Text type={caption} style={styles.txtGuessWordStyle(theme)}>{t.translate(item.content)}</Text>
            </TouchableOpacity >
        )
    }
    const guessBar = (theme) => {
        return (
            <View
                style={styles.guessBarStyle(theme)}
            >
                <FlatList
                    horizontal={true}
                    data={DATA}
                    renderItem={guessWord}
                    keyExtractor={item => item.id.toString()}
                />
            </View >
        )
    }
    const [click, setclick] = useState(false)
    const handleOpenBarAttachment = () => {
        setclick(!click)
    }
    const btnAttachment = () => {
        return (
            <TouchableOpacity
                style={styles.btnAttachmentStyle()}
                onPress={handleOpenBarAttachment}
            >
                {click ? <IconMaterialOrImageOrSvg
                    type={IconType.Svg}
                    size={scale(23)}
                    SVGIcon={ic_close_attachment} /> :
                    <IconMaterialOrImageOrSvg
                        type={IconType.Svg}
                        size={scale(23)}
                        SVGIcon={ic_attachment} />}
            </TouchableOpacity>
        )
    }
    const textInput = (theme) => {
        return (
            <View style={styles.viewTextInputStyle(theme)}>
                <TextInput
                    onChangeText={text => setTextInput(text)}
                    value={getTextInput}
                    style={styles.textInputStyle(theme)}
                    placeholder={'Type a message'}
                    underlineColorAndroid={'transparent'} />
                <IconMaterialOrImageOrSvg
                    style={styles.icTextInputStyle()}
                    type={IconType.Svg}
                    size={scale(18)}
                    SVGIcon={ic_microphone} />
            </View>
        )
    }
    const btnSend = (theme) => {
        return (
            <TouchableOpacity style={styles.btnSendStyle()} >
                <View style={styles.bvBtnSendStyle(theme)}>
                    <View style={styles.svBtnSendStyle()}>
                        <Text type={headline4}
                            style={styles.txtBtnSendStyle(theme)}>Gửi</Text>
                    </View>
                    <IconMaterialOrImageOrSvg
                        style={styles.icBtnSend()}
                        type={IconType.Svg}
                        SVGIcon={ic_arrowRight}
                        size={scale(14)}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    const btnFormAttach = ({ color, icon }) => {
        return (
            <TouchableOpacity style={styles.btnFormAttachStyle(color)}>
                <IconMaterialOrImageOrSvg
                    type={IconType.Svg}
                    SVGIcon={icon}
                    size={scale(19)}
                />
            </TouchableOpacity>
        )
    }
    const formAttacthment = (theme) => {
        return (
            <View style={styles.formAttacthmentStyle(theme)}>
                {btnFormAttach({ color: theme.colors.greyDark2, icon: ic_capture })}
                {btnFormAttach({ color: theme.colors.greyDark2, icon: ic_album })}
                {btnFormAttach({ color: theme.colors.orangeDark, icon: ic_locate_func })}
            </View>
        )
    }
    const formInput = (theme) => {
        return (
            <View style={styles.formInputStyle(theme)}>
                {btnAttachment()}
                {textInput(theme)}
                {btnSend(theme)}
            </View >
        )
    }
    const formHandle = (theme) => {
        return (
            <View>
                {formAttacthment(theme)}
                <View style={styles.viewMapStyle()}>
                    <Map />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.viewBottomBarStyle()}>
            {guessBar(theme)}
            {formInput(theme)}
            {click ? formHandle(theme) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    guessWordStyle: (theme) => ({
        backgroundColor: theme.colors.greyLight6,
        borderRadius: scale(30),
        height: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: scale(10),
        marginVertical: scale(14),
        marginHorizontal: scale(7)
    }),
    guessBarStyle: (theme) => ({
        backgroundColor: theme.colors.white
    }),
    btnAttachmentStyle: () => ({
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: scale(10),
        paddingRight: scale(0)
    }),
    viewTextInputStyle: (theme) => ({
        marginLeft: scale(10),
        width: scale(220),
        height: scale(40),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.greyLight6,
        borderColor: theme.colors.backgroundChat,
        borderWidth: scale(1.07),
        borderRadius: scale(25)
    }),
    textInputStyle: () => ({
        width: scale(190),
        height: scale(40),
        paddingLeft: scale(20)
    }),
    txtGuessWordStyle: (theme) => ({
        alignSelf: 'center',
        color: theme.colors.greyLight5,
    }),
    btnSendStyle: () => ({
        marginLeft: scale(10),
        alignItems: 'center'
    }),
    bvBtnSendStyle: (theme) => ({
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.orangeDark,
        width: scale(90),
        height: scale(40),
        borderRadius: scale(30),
        marginRight: scale(6)
    }),
    svBtnSendStyle: () => ({
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    icBtnSend: () => ({
        alignSelf: 'center',
        justifyContent: 'flex-end'
    }),
    icTextInputStyle: () => ({ paddingLeft: scale(10) }),
    txtBtnSendStyle: (theme) => ({
        color: theme.colors.white,
        alignSelf: 'center',
        marginLeft: scale(30),
        marginRight: scale(10)
    }),
    btnFormAttachStyle: (color) => ({
        flex: 1,
        width: scale(77),
        height: scale(34),
        backgroundColor: color,
        marginTop: scale(14),
        marginBottom: scale(21),
        marginHorizontal: scale(10),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(26),
    }),
    formAttacthmentStyle: (theme) => ({
        flexDirection: 'row',
        backgroundColor: theme.colors.white1,
        marginTop: scale(1)
    }),
    formInputStyle: (theme) => ({
        marginTop: scale(1.5),
        height: scale(70),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        width: WINDOW_WIDTH
    }),
    viewMapStyle: () => ({ height: scale(270) }),
    viewBottomBarStyle: () => ({ flexDirection: 'column' })
})

export default BottomBar;