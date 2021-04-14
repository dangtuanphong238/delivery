import React from 'react';
import { useContext, useState, useRef } from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import {
    Text,
    headline5,
    overline
} from '../../components/common/Text';
import IconMaterialOrImageOrSvg, { IconType } from './IconMaterialOrImageOrSvg';
import ic_eye_on from '../../assets/images/icons/svg/ic_eye_on.svg'
import ic_eye_off from '../../assets/images/icons/svg/ic_eye_off.svg'
import { TouchableOpacity } from 'react-native-gesture-handler';
const TextInput = ({
    /*========================== Text ===========================*/
    /*References file './Text' to know detail */
    typeTitle,
    bold,
    styleText,
    /*======================= TextInput ========================*/
    holderPlace,
    styleTextInput,
    styleView,
    /*======================= Common ========================*/
    type,
    title,
    require, // default = false
    placeholder,
    widthUnderLine,
    colorUnderLine,
    getValue,//Function
    messageError,
    ...props
}) => {
    const theme = useContext(ThemeContext);
    let secureTextEntry = false;
    type === password ? secureTextEntry = true : null;
    const [btnVisible, setBtnVisible] = useState(secureTextEntry);
    const handleBtnVisible = () => {
        setBtnVisible(!btnVisible)
    }
    const butonVisiblePassword = () => {
        return (
            <TouchableOpacity onPress={handleBtnVisible} style={styles.buttonVisibleStyle}>
                <IconMaterialOrImageOrSvg
                    type={IconType.Svg}
                    size={scale(18)}
                    SVGIcon={btnVisible ? ic_eye_on : ic_eye_off}
                />
            </TouchableOpacity>
        )
    }
    const [textInput, settextInput] = useState('');
    getValue?.(textInput);
    return (
        <View>
            <View
                style={StyleSheet.flatten([styles.viewStyle(messageError?.check, theme), styleView])} >
                <View style={styles.titleStyle}>
                    <Text
                        bold={bold}
                        type={typeTitle ? typeTitle : headline5}>
                        {title}
                    </Text>
                    {require ? <Text
                        style={styles.requireStyle(theme)}
                        type={typeTitle ? typeTitle : headline5}
                    >
                        *
                </Text> : null}
                </View>
                <View style={styles.formInputStyle}>
                    <View style={styles.inputStyle}>
                        <RNTextInput
                            {...props}
                            //onBlur={() => handleValidate(textInput)}
                            onChangeText={(text) => { settextInput(text); }}
                            value={textInput}
                            keyboardType={type ? type === password ? 'default' : type : 'default'}
                            secureTextEntry={btnVisible}
                            underlineColorAndroid={theme.colors.transparent}
                            placeholderTextSize={scale(12)}
                            style={StyleSheet.flatten([styles.textInputStyle, styleTextInput])}
                            placeholder={placeholder}
                        />
                    </View>
                    {secureTextEntry ? butonVisiblePassword() : null}
                </View >
            </View>
            {messageError?.check && <Text type={overline} style={styles.checkFieldStyle}>{messageError?.name}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    viewStyle: (error, theme) => ({
        width: scale(282),
        paddingLeft: scale(6),
        borderWidth: scale(1),
        borderColor: theme.colors.transparent,
        borderBottomColor: error ? theme.colors.error : theme.colors.greyLight4,
        alignSelf: 'center',
    }),
    titleStyle: {
        flexDirection: 'row',
    },
    requireStyle: theme => ({
        paddingLeft: scale(5),
        color: theme.colors.orangeDark,
    }),
    textInputStyle: {
        margin: 0,
        padding: 0,
        fontSize: scale(14),
        width: '100%',
    },
    formInputStyle: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    inputStyle: {
        width: '100%',
    },
    buttonVisibleStyle: {
        alignItems: 'flex-end',
        paddingTop: scale(16),
        paddingLeft: scale(5),
    },
    checkFieldStyle: {
        alignSelf: 'flex-start',
        color: 'red',
        marginLeft: scale(10),
    },
});
export const password = 'password', number = 'numeric', email = 'email-address';
// const TextInput = React.forwardRef(_TextInput)
export { TextInput }