import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import BackIcon from '../../components/common/BackIcon';
import {
  headline5,
  Text
} from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import ProcessMaps from '../process/process.component/process.maps';

export default function MapsScreen({ navigation }) {
  const theme = useContext(ThemeContext);
  const t = useTranslation();
  const navigateToOrderDetails = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ToolBar
        style={{ backgroundColor: theme.colors.white }}
        left={<BackIcon onPress={navigateToOrderDetails} />}
        barStyle="dark-content"
        center={<Text type={headline5}>{t.translate('seeTheRoad')}</Text>}
      />
      <ProcessMaps isShowZoom={false} isShowSatellite={true} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});
