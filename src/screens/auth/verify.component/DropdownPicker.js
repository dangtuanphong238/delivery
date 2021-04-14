import React from 'react';
import { useState, useContext } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import Flag from 'react-native-flags';
import IconMaterialOrImageOrSvg, {
    IconType,
} from '../../../components/common/IconMaterialOrImageOrSvg';
import icClose from '../../../assets/images/icons/svg/ic_close.svg';
import icArrowDown from '../../../assets/images/icons/svg/ic_arrow_down.svg';
import icArrowUp from '../../../assets/images/icons/svg/ic_arrow_up.svg';
import { scale } from '../../../theme/dimens';
import { theme, ThemeContext } from '../../../theme';
import useTranslation from '../../../i18n';
export default function DropdownPicker() {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const countries = [
        {
            value: 'Afghanistan',
            dial_code: '+93',
            code: 'AF',
            label: 'Afghanistan',
        },
        {
            value: 'Albania',
            dial_code: '+355',
            code: 'AL',
            label: 'Albania',
        },
        {
            value: 'Algeria',
            dial_code: '+213',
            code: 'DZ',
            label: 'Algeria',
        },
        {
            value: 'AmericanSamoa',
            dial_code: '+1 684',
            code: 'AS',
            label: 'AmericanSamoa',
        },
        {
            value: 'Andorra',
            dial_code: '+376',
            code: 'AD',
            label: 'Andorra',
        },
        {
            value: 'Angola',
            dial_code: '+244',
            code: 'AO',
            label: 'Angola',
        },
        {
            value: 'Anguilla',
            dial_code: '+1 324',
            code: 'AI',
            label: 'Anguilla',
        },
        {
            value: 'Viet Nam',
            dial_code: '+84',
            code: 'VN',
            label: 'Viet Nam',
        },
    ];
    const country_default = countries[1];
    //handle's use state country
    const handleCountryDefault = (item) => {
        const result = countries.filter((x) => x === item);
        let tempt;
        const vietNam = {
            value: 'Viet Nam',
            dial_code: '+84',
            code: 'VN',
            label: 'Viet Nam',
        };
        //alert(JSON.stringify(result,null,2));
        result ? (tempt = item) : (tempt = vietNam);
        return tempt;
    };
    //Use to choice country when list be scrolled
    const [country, setCountry] = useState(handleCountryDefault(country_default));

    //Use to open or close list country to choice
    const [listChoice, setListChoice] = useState(false);
    //handle's use state list choice
    const handleListChoice = () => {
        setListChoice(!listChoice);
    };

    /**
     *When you choice 1 country this action will do ST...  process in this.
     */
    const choiceCountry = (item) => {
        //alert("TEST: "+JSON.stringify(item,null,2))
        setCountry(item);
        setListChoice(!listChoice);
    };
    /**
     * Reset field input phone number
     */
    const [phone, setPhone] = useState('');
    const onResetPhone = () => {
        setPhone('');
    };
    const dropdown = () => {

        const itemRender = (item) => {
            return (
                <TouchableOpacity
                    onPress={() => choiceCountry(item)}
                    style={styles.btnItemRenderStyle}>
                    <View style={styles.viewItemRenderStyle}>
                        <Flag code={item.code} size={32} />
                        <View
                            style={styles.viewText}>
                            <Text style={{ color: theme.colors.white }} numberOfLines={1}>
                                ({item.dial_code})
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.txtLabel(theme)}>{item.label}</Text>
                </TouchableOpacity>
            );
        };

        const listCountry = () => {
            return (
                <View
                    style={styles.viewListCountry(theme)}>
                    <FlatList
                        style={styles.flatlistStyle}
                        keyExtractor={(item) => item.value}
                        data={countries}
                        renderItem={({ item }) => itemRender(item)}
                    />
                </View>
            );
        };

        const itemActive = (item) => {
            return (
                <View
                    style={styles.viewItemActive(listChoice, theme)}>
                    <View
                        style={styles.viewLeft}>
                        <TouchableOpacity
                            onPress={handleListChoice}
                            style={styles.btnLeft}>
                            <View>
                                <Flag code={item.code} size={32} />
                            </View>
                            <View
                                style={styles.viewTextItemActive}>
                                <Text
                                    style={styles.txtLabelButton(theme)}
                                    numberOfLines={1}>
                                    {item.dial_code}
                                </Text>
                            </View>
                            <View style={styles.viewRightIcon}>
                                <IconMaterialOrImageOrSvg
                                    type={IconType.Svg}
                                    size={scale(12)}
                                    SVGIcon={listChoice ? icArrowUp : icArrowDown}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewCenter}>
                        <TextInput
                            style={styles.textInputStyle}
                            value={phone}
                            keyboardType={'phone-pad'}
                            underlineColorAndroid={'transparent'}
                            onChangeText={setPhone}
                        />
                    </View>
                    <View style={{ alignItems: 'flex-end', maxWidth: '10%', flex: 1 }}>
                        <TouchableOpacity
                            style={styles.btnClear}
                            onPress={onResetPhone}
                        >
                            <IconMaterialOrImageOrSvg
                                type={IconType.Svg}
                                size={scale(24)}
                                SVGIcon={icClose}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        };
        return (
            <View style={styles.overViewStyle}>
                {itemActive(country)}
                {listChoice ? listCountry() : null}
            </View>
        );
    };
    return (
        <View>{dropdown()}</View>
    );
}

const styles = StyleSheet.create({
    btnItemRenderStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: scale(10),
    },
    viewItemRenderStyle: {
        flexDirection: 'row',
        flex: 1
    },
    viewText: {
        margin: scale(10),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    txtLabel: (theme) => ({
        color: theme.colors.black,
        flex: 1
    }),
    viewListCountry: (theme) => ({
        marginTop: scale(-5),
        backgroundColor: theme.colors.backgroundViewListCountry,
        borderBottomEndRadius: scale(12),
        borderBottomStartRadius: scale(12),
        height: scale(200),
    }),
    viewItemActive: (listChoice, theme) => ({
        width: scale(320),
        height: scale(50),
        borderRadius: 12,
        borderBottomEndRadius: listChoice ? 0 : scale(12),
        borderBottomStartRadius: listChoice ? 0 : scale(12),
        padding: scale(10),
        alignSelf: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.backgroundDropdown,
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    viewLeft: {
        flex: 3,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    btnLeft: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewCenter: {
        alignItems: 'center',
        maxWidth: '60%',
        flex: 4
    },
    viewTextItemActive: {
        marginLeft: scale(10),
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flatlistStyle: { zIndex: 999 },
    txtLabelButton: (theme) => ({ color: theme.colors.black }),
    viewRightIcon: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: scale(15)
    },
    textInputStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 30,
        paddingVertical: 5,
    },
    btnClear: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    overViewStyle: { zIndex: 5 },
});
