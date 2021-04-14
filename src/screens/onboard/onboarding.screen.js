import ViewPager from '@react-native-community/viewpager';
import React, { useCallback, useContext, useRef, useState } from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { changeInitialRouteState } from '../../actions/main.action';
import onboarding1 from '../../assets/images/images/svg/onboarding1.svg';
import onboarding2 from '../../assets/images/images/svg/onboarding2.svg';
import onboarding3 from '../../assets/images/images/svg/onboarding3.svg';
import DotPagination from '../../components/common/DotPagination';
import IconMaterialOrImageOrSvg, {
  IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import PrimaryButton from '../../components/common/PrimaryButton';
import SafeContainer from '../../components/common/SafeContainer';
import {
  headline1,
  headline4,
  headline5,
  Text
} from '../../components/common/Text';
import useTranslation from '../../i18n';
import { AUTH_SCREEN, LOGIN_SCREEN } from '../../navigations/route-name';
import { ThemeContext } from '../../theme';
import { scale, verticalScale, WINDOW_WIDTH } from '../../theme/dimens';

function OnboardingScreen({ route, navigation, changeInitialRouteState }) {
  const viewPagerRef = useRef();
  const theme = useContext(ThemeContext);
  const t = useTranslation();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [title, setTitle] = useState(t.translate('titleOnboarding1'));

  const titleOnboarding = [
    { title: t.translate('titleOnboarding1') },
    { title: t.translate('titleOnboarding2') },
    { title: t.translate('titleOnboarding3') },
  ];

  const onPageSelected = useCallback(
    ({ nativeEvent }) => {
      LayoutAnimation.easeInEaseOut();
      setTitle(titleOnboarding[nativeEvent.position].title);
      setCurrentPageIndex(nativeEvent.position);
    },
    [currentPageIndex],
  );

  const navigationScreen = (name, params) => () => {
    navigation.navigate(name, params);
  };

  return (
    <SafeContainer safeTop safeBot style={styles.container(theme)}>
      <View style={styles.backgroundView(theme)} />
      <Text style={styles.txtTitle(theme)} type={headline1}>
        {title}
      </Text>
      <View style={styles.flex(1)} />
      <ViewPager
        ref={viewPagerRef}
        onPageSelected={onPageSelected}
        scrollEnabled={true}
        style={styles.viewPage}
        showPageIndicator={false}
        orientation="horizontal"
      >
        <View style={styles.containerPage(theme)}>
          <View style={styles.flex(1)}>
            <IconMaterialOrImageOrSvg
              type={IconType.Svg}
              size={scale(300)}
              SVGIcon={onboarding1}
            />
            <Text style={styles.txtSubTitle} type={headline5}>
              {t.translate('desOnboarding1')}
            </Text>
          </View>
        </View>
        <View style={styles.containerPage(theme)}>
          <View style={styles.flex(1)}>
            <IconMaterialOrImageOrSvg
              type={IconType.Svg}
              size={scale(300)}
              SVGIcon={onboarding2}
            />
            <Text style={styles.txtSubTitle} type={headline5}>
              {t.translate('desOnboarding2')}
            </Text>
          </View>
        </View>
        <View style={styles.containerPage(theme)}>
          <View style={styles.flex(2)}>
            <IconMaterialOrImageOrSvg
              type={IconType.Svg}
              size={scale(300)}
              SVGIcon={onboarding3}
            />
            <Text style={styles.txtSubTitle} type={headline4}>
              {t.translate('desOnboarding3')}
            </Text>
          </View>
          <View style={[styles.flex(0.7), { width: WINDOW_WIDTH - scale(80) }]}>
            <PrimaryButton
              title={t.translate('login_screen')}
              style={styles.buttonLogin}
              onPress={navigationScreen(LOGIN_SCREEN)}
            />
            <PrimaryButton
              title={t.translate('register_screen')}
              style={styles.buttonRegister(theme)}
              onPress={navigationScreen(AUTH_SCREEN)}
            />
          </View>
        </View>
      </ViewPager>
      <View style={styles.flex(0.2)}>
        <DotPagination
          numberOfPage={3}
          activePage={currentPageIndex}
          size={12}
        />
      </View>
    </SafeContainer>
  );
}
const styles = StyleSheet.create({
  flex: flex => ({ flex: flex }),
  viewPage: {
    flex: 5,
  },
  container: theme => ({
    flex: 1,
    backgroundColor: theme.colors.white,
  }),
  containerPage: theme => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),
  }),
  backgroundView: theme => ({
    position: 'absolute',
    top: 0,
    width: WINDOW_WIDTH,
    height: verticalScale(370),
    backgroundColor: theme.colors.greyLight1,
    borderBottomLeftRadius: scale(30),
    borderBottomRightRadius: scale(30),
  }),
  txtTitle: theme => ({
    paddingHorizontal: scale(30),
    position: 'absolute',
    top: verticalScale(90),
  }),
  txtSubTitle: {
    textAlign: 'center',
    marginTop: verticalScale(30),
  },
  buttonLogin: {
    marginBottom: verticalScale(16),
  },
  buttonRegister: theme => ({ backgroundColor: theme.colors.greyDark2 }),
});
const mapStateToProps = state => ({});

const mapDispatchToProps = { changeInitialRouteState };

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen);
