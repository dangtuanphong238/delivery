import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { changeInitialRouteState } from '../../actions/main.action';
import SafeContainer from '../../components/common/SafeContainer';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import HomeAllOrder from './home.component/home.AllOrder';
import HomeOrderHistory from './home.component/home.OrderHistory';
import HomePoint from './home.component/home.Point';
import HomeToolBar from './home.component/home.Toolbar';

const HomeScreen = ({ route, navigation, changeInitialRouteState }) => {
  const theme = useContext(ThemeContext);
  const t = useTranslation();

  // alert(isFirstInstall)
  return (
    <SafeContainer safeTop style={styles.container(theme)}>
      <HomeToolBar />
      <HomePoint />
      <HomeOrderHistory />
      <HomeAllOrder />
    </SafeContainer>
  );
};
const styles = StyleSheet.create({
  container: theme => ({
    backgroundColor: theme.colors.backgroundHome,
    flex: 1,
  }),
});

const mapStateToProps = state => ({});

const mapDispatchToProps = { changeInitialRouteState };

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
// const mapStateToProps = state => ({
//   isFirstInstall: isFirstInstallSelector(state),
// });

// export default connect(mapStateToProps, null)(HomeScreen);