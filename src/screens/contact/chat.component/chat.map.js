import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import useTranslation from '../../../i18n';
import { ThemeContext } from '../../../theme';
import IconMaterialOrImageOrSvg, { IconType } from '../../../components/common/IconMaterialOrImageOrSvg'
import { Text, headline4, caption, headline6 } from '../../../components/common/Text';
//maps:
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { scale, WINDOW_WIDTH } from '../../../theme/dimens';
import ic_place from '../../../assets/images/icons/svg/ic_place.svg'
import ic_setting_map from '../../../assets/images/icons/svg/ic_setting_map.svg'
const Map = () => {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const width = WINDOW_WIDTH * 5 / 6

    const buttonMap = ({ icon }) => {
        return (
            <TouchableOpacity style={{
                height: scale(30),
                width: scale(30),
                backgroundColor: theme.colors.orangeDark,
                borderRadius: scale(16),
                padding: scale(6),
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'flex-start',
                margin: scale(5)
            }}>
                <IconMaterialOrImageOrSvg
                    type={IconType.Svg}
                    size={scale(12)}
                    SVGIcon={icon}
                />
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ height: scale(270), justifyContent: 'flex-end' }}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ ...StyleSheet.absoluteFillObject }}
                region={region}
            >
                <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
            </MapView>
            <View style={{ alignItems: 'flex-end', justifyContent: 'space-between', }}>
                <View style={{ justifyContent: 'flex-end', top: -scale(90) }}>
                    {buttonMap({ icon: ic_place })}
                    {buttonMap({ icon: ic_setting_map })}
                </View>
            </View>
            <TouchableOpacity style={{
                backgroundColor: '#37B753',
                alignItems: 'center',
                justifyContent: 'center',
                width: width,
                height: scale(44),
                borderRadius: scale(20),
                alignSelf: 'center',
                marginBottom: scale(24)
            }}>
                <Text type={headline6}
                    style={{ color: theme.colors.white }}
                >
                    {t.translate('Bắt đầu chia sẻ vị trí của bạn trong 60 phút')}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Map