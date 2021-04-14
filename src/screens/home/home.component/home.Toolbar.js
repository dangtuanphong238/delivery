import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Switch } from 'react-native-switch';
import Tooltip from 'react-native-walkthrough-tooltip';
import { connect } from 'react-redux';
import { changeInitialRouteState } from '../../../actions/main.action';
import ic_notification from '../../../assets/images/icons/svg/ic_notification.svg';
import IconMaterialOrImageOrSvg, {
  IconType
} from '../../../components/common/IconMaterialOrImageOrSvg';
import { headline4, Text } from '../../../components/common/Text';
import useTranslation from '../../../i18n';
import { NOTIFICATION_SCREEN } from '../../../navigations/route-name';
import { isFirstInstallSelector } from '../../../selectors/settings.selectors';
import { ThemeContext } from '../../../theme';
import { scale, TOOL_BAR_HEIGHT } from '../../../theme/dimens';
const HomeToolBar = ({ isFirstInstall, changeInitialRouteState }) => {
  const t = useTranslation();
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const [stateSwitch, setStateSwitch] = useState(true);
  // alert(isFirstInstall)

  // //Set first time join app
  // const initialFirstTime = Number(window.localStorage.getItem('firstTime') || -1)
  // const [firstTime, setFirstTime] = useState(initialFirstTime)
  // useEffect(window.localStorage.setItem('firstTime', 1), [])  const [stateSwitch, setStateSwitch] = useState(false);
  const onChangeSwitch = () => {
    setStateSwitch(state => !state);
  };

  const navigationScreen = (name, params) => () => {
    navigation.navigate(name, params);
  };

  const _switch = () => {
    return <Switch
      value={stateSwitch}
      onValueChange={onChangeSwitch}
      disabled={false}
      activeText={t.translate('turnOnTooltip')}
      inActiveText={t.translate('turnOffTooltip')}
      activeTextStyle={styles.activeTextSwitchStyle}
      inactiveTextStyle={styles.inactiveTextSwitchStyle}
      innerCircleStyle={{ height: scale(20), width: scale(20) }}
      switchLeftPx={scale(4)}
      switchRightPx={scale(4)}
      circleSize={30}
      circleBorderWidth={0}
      containerStyle={{ width: scale(20) }}
      backgroundActive={theme.colors.orangeDark}
      backgroundInactive={theme.colors.greyDark2}
      circleBorderActiveColor={theme.colors.transparent}
      circleActiveColor={'#fff'}
      barHeight={scale(22)}
      circleInActiveColor={'#fff'}
    />
  }
  const toolTip = () => {
    return <Tooltip
      arrowStyle={{ marginTop: -scale(50) }}
      // tooltipStyle={{right:5,}}
      contentStyle={styles.contentTooltipStyle}
      isVisible={stateSwitch}
      content={
        <Text>{t.translate('statusTooltip')}</Text>
      }
      onClose={() => {
        changeInitialRouteState();
        //setStateSwitch(false);
      }}
      placement="bottom"
      // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight + 20 : 0}
      showChildInTooltip={false}
    >
      {isFirstInstall ? _switch() : toolTip()}
    </Tooltip>
  }
  return (
    <View style={styles.container}>
      {/* {changeInitialRouteState()} */}
      <View style={styles.left}>
        {<Text type={headline4}>{t.translate('hi') + ', SoftWorld VN'}</Text>}
      </View>
      <View style={styles.center}>
        <View style={styles.bViewStyle}>
          {isFirstInstall ? toolTip() : _switch()}
        </View>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={navigationScreen(NOTIFICATION_SCREEN)}>
          <IconMaterialOrImageOrSvg
            type={IconType.Svg}
            size={scale(24)}
            SVGIcon={ic_notification}
          />
        </TouchableOpacity>
      </View>
    </View >
  );
};
// const mapStateToProps = state => ({
//   isFirstInstall: isFirstInstallSelector(state),
// });


const styles = StyleSheet.create({
  contentTooltipStyle: {
    width: scale(220),
    height: scale(100),
    marginTop: -scale(50),
    borderRadius: scale(12),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(20),
    paddingHorizontal: scale(20)
  },
  inactiveTextSwitchStyle: { fontSize: 12 },
  activeTextSwitchStyle: { fontSize: 12 },
  container: {
    height: TOOL_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: scale(8),
    paddingHorizontal: scale(16),
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapStateToProps = state => ({
  isFirstInstall: isFirstInstallSelector(state),
});
const mapDispatchToProps = { changeInitialRouteState };
export default connect(mapStateToProps, mapDispatchToProps)(HomeToolBar);
// export default React.memo(HomeToolBar);