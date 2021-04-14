import React, { useContext, useState } from 'react';
import { LayoutAnimation, Platform, StyleSheet, TouchableOpacity, UIManager, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import ic_satellite from '../../../assets/images/images/svg/ic_satellite';
import ic_shipper from '../../../assets/images/images/svg/ic_shipper';
import ic_zoom_map from '../../../assets/images/images/svg/ic_zoom_map';
import IconMaterialOrImageOrSvg, {
  IconType
} from '../../../components/common/IconMaterialOrImageOrSvg';
import { ThemeContext } from '../../../theme';
import { scale } from '../../../theme/dimens';
// import MapViewDirections from 'react-native-maps-directions';

// if (
//   Platform.OS === "android" &&
//   UIManager.setLayoutAnimationEnabledExperimental
// ) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }
export default function ProcessMaps(props) {
  const theme = useContext(ThemeContext);
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  // const GOOGLE_MAPS_APIKEY = 'AIzaSyA2tX85OOkbMzgokfOP6Gr2L39HlPNSoko';

  const [mapType, setMapType] = useState('standard');
  const toggleMapType = () => {
    setMapType(mapType === 'standard' ? 'hybrid' : 'standard');
  };
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    props.handleClickParent(true);
  };


  return (
    <View style={styles.container}>
      <MapView
        mapType={mapType}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ ...StyleSheet.absoluteFillObject }}
        region={{
          latitude: 10.811813874052032,
          longitude: 106.66845243253832,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
        /> */}
        <Marker
          coordinate={{
            latitude: 10.811813874052032,
            longitude: 106.66845243253832,
          }}
        >
          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(48)}
            SVGIcon={ic_shipper}
          />
        </Marker>

      </MapView>
      <View style={styles.viewButtonToggle}>
        {props.isShowZoom && <TouchableOpacity style={styles.btnMapType(theme)} onPress={handleClick}>
          {/* {props.isShowZoom && <TouchableOpacity style={styles.btnMapType(theme)} onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
          handleClick();
        }}> */}

          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(25)}
            SVGIcon={ic_zoom_map}
          />
        </TouchableOpacity>}
        {props.isShowSatellite && <TouchableOpacity style={styles.btnMapType(theme)} onPress={toggleMapType}>
          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(25)}
            SVGIcon={ic_satellite}
          />
        </TouchableOpacity>}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  btnMapType: theme => ({
    borderRadius: scale(50),
    backgroundColor: theme.colors.white,
    height: scale(40),
    width: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    margin: scale(5),
  }),
  container: { flex: 1 },
  viewButtonToggle: {
    position: 'absolute',
    bottom: scale(10),
    right: scale(10),
  },
});

