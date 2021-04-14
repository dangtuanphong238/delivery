import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  headline5,
  headline7,
  overline,
  Text,
} from '../../../components/common/Text';
import useTranslation from '../../../i18n';
import { scale } from '../../../theme/dimens';
import { FlatList } from 'react-native-gesture-handler';
import { ThemeContext } from '../../../theme';

const HomeOrderHistory = () => {
  const t = useTranslation();
  const theme = useContext(ThemeContext);
  const data = [
    {
      id: 1,
      title: t.translate('pointOrder'),
      value: 0,
      compared: 0,
      background: theme.colors.backgroundTabOrderHistoryHome1,
    },
    {
      id: 2,
      title: t.translate('pointOrderSuccess'),
      value: 0,
      compared: 0,
      background: theme.colors.backgroundTabOrderHistoryHome2,
    },
    {
      id: 3,
      title: t.translate('pointTotalCost'),
      value: 0 + ' đ',
      compared: 0,
      background: theme.colors.backgroundTabOrderHistoryHome3,
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.containerItem(item, index, data.length, theme)}>
        <Text type={headline7} style={styles.textWhite(theme)}>
          {item.title}
        </Text>
        <Text type={headline5} style={styles.textWhite(theme)}>
          {item.value}
        </Text>
        <Text type={overline} style={styles.textWhite(theme)}>
          {t.translate('compareWeek') + ': ' + item.compared + '%'}
        </Text>
      </View>
    );
  };

  const keyExtractor = (item, index) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={data}
        horizontal={true}
        renderItem={renderItem}
      />
    </View>
  );
};

export default React.memo(HomeOrderHistory);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(8),
    marginVertical: scale(10),
  },
  textWhite: theme => ({
    color: theme.colors.white,
  }),
  containerItem: (item, index, length, theme) => ({
    width: scale(200),
    height: scale(65),
    padding: scale(8),
    backgroundColor: item.background,
    borderRadius: scale(8),
    marginRight: index !== length - 1 ? scale(12) : scale(0),
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  }),
});
