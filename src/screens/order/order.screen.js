import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { useContext } from 'react';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import SafeContainer from '../../components/common/SafeContainer';
import OrderAllOrder from './order.component/order.AllOrder';

const OrderScreen = ({ route, navigation }) => {
  const theme = useContext(ThemeContext);
  const t = useTranslation();

  useEffect(() => {}, []);

  return (
    <SafeContainer style={styles.container(theme)}>
      <OrderAllOrder />
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

const mapDispatchToProps = {};

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(OrderScreen),
);
