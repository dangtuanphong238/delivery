import React, { useState, useContext, useRef } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, PanResponder } from 'react-native'
import IconMaterialOrImageOrSvg, { IconType } from './IconMaterialOrImageOrSvg'
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import ic_inSpeaker from '../../assets/images/icons/svg/ic_inSpeaker.svg'
import ic_outSpeaker from '../../assets/images/icons/svg/ic_outSpeaker.svg'
import ic_phoneDown from '../../assets/images/icons/svg/ic_phoneDown.svg'
import img_female from '../../assets/images/images/img_person1.png'
import { scale, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../theme/dimens';
import { headline2, headline4, headline6, overline } from './Text';
import flatten from 'lodash.flatten';
export default function CardCall({ getStatus }) {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const [button, setButton] = useState(false)
    const [btnOff, setBtnOff] = useState(true)
    const formButton = () => {
        const handleClick = () => {
            setButton(!button)
        }
        return (
            <View style={styles.formButtonStyle}>
                <TouchableOpacity style={styles.buttonStyle} onPress={handleClick}>
                    <IconMaterialOrImageOrSvg
                        size={scale(30)}
                        type={IconType.Svg}
                        SVGIcon={button ? ic_outSpeaker : ic_inSpeaker}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => { setBtnOff(false); getStatus?.(false) }}>
                    <IconMaterialOrImageOrSvg
                        size={scale(30)}
                        type={IconType.Svg}
                        SVGIcon={ic_phoneDown}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    const user = { user: "Mei", state: "Connecting..." }
    const formText = ({ user, state }) => {
        return (
            <View style={{ alignItems: 'center', marginVertical: scale(15) }}>
                <Text style={{ color: theme.colors.white }} type={headline4}>{user}</Text>
                <Text style={{ color: theme.colors.white }} type={overline}>{state}</Text>
            </View>
        )
    }

    const pan = useRef(new Animated.ValueXY()).current;
    const panx = useRef(pan.x._value).current
    const pany = useRef(pan.y._value).current
    const checkX = (x) => {
        if ((x > -scale(220) && x < -scale(175)) || (x > -scale(95) && x < scale(95)))
            return true
        else return false
    }
    const checkY = (y) => {
        if (y > -scale(400) && y < scale(110))
            return true
        else return false
    }
    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: (evt, gestureState) => {
            if (checkX(pan.x._value) === checkY(pan.y._value))
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                })
            else return false
        },
        onPanResponderMove: Animated.event([
            null,
            {
                dx: checkX(pan.x._value) ? pan.x : { 'x': panx._value }, // x,y are Animated.Value
                dy: checkY(pan.y._value) ? pan.y : { 'y': pany._value },
            },
        ]),
        onPanResponderRelease: () => {
            // console.log("x0: " + pan.x._value + " - y0: " + pan.y._value);
            (checkX(pan.x._value) === checkY(pan.y._value)) ? pan.flattenOffset() :
                Animated.spring(
                    pan, // Auto-multiplexed
                    { toValue: { x: panx, y: pany } } // Back to zero
                ).start();
        },
    })).current;
    return (
        <View style={styles.viewCardCallStyle}>
            <Animated.View
                style={[
                    pan.getLayout(),
                    styles.animatedStyle(theme),
                    { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
                ]}
                {...panResponder.panHandlers}
            >
                <View style={styles.viewAvatarStyle}>
                    <Image
                        style={styles.imgAvartarStyle}
                        source={img_female}
                        size={scale(20)}
                        resizeMode='stretch'
                    />
                </View>
                {formText(user)}
                {formButton()}
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    formButtonStyle: { flexDirection: 'row' },
    buttonStyle: { margin: 3, padding: 5 },
    viewAvatarStyle: {
        height: scale(64),
        width: scale(64),
        alignItems: 'center',
        justifyContent: 'center'
    },
    animatedStyle: theme => ({
        ...StyleSheet.absoluteFillObject,
        width: scale(150),
        height: scale(200),
        backgroundColor: theme.colors.backgroundCall,
        alignItems: 'center',
        justifyContent: 'center'
    }),
    viewCardCallStyle: {
        flex: 1,
        position: 'absolute',
        top: scale(450),
        right: scale(160),
    },
})
