import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DialogHelper from '../../helpers/dialog.helper';
import { scale, verticalScale } from '../../theme/dimens';
import colors from '../../theme/colors';
import Button from '../common/Button';
import { headline4, headline5, Text } from '../common/Text';
const PickerDialog = ({ title, onSelectItem, data }) => {
  const keyExtractor = (item, index) => item?.value + index.toString();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.selectItem}
        onPress={() => {
          DialogHelper.dismiss();
          if (onSelectItem) {
            onSelectItem(item);
          }
        }}
      >
        <Text type={headline5} style={styles.itemTitle}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.iconButtonContainer} />
          <Text type={headline4} style={styles.titleText}>
            {title}
          </Text>
          <Button
            style={styles.iconButtonContainer}
            onPress={DialogHelper.dismiss}
          >
            <Icon name="close" style={styles.iconButton} />
          </Button>
        </View>
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    fontSize: scale(25),
    color: colors.white,
  },
  iconButtonContainer: {
    width: '15%',
  },
  itemTitle: { textAlign: 'center' },
  selectItem: {
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(10),
    borderBottomColor: colors.opacityBorderGray,
  },
  titleContainer: {
    backgroundColor: colors.primary,
    borderBottomColor: colors.opacityBorderGray,
    paddingVertical: scale(5),
    flexDirection: 'row',
  },

  listContainer: { paddingBottom: scale(16) },

  titleText: {
    textAlign: 'center',
    marginVertical: scale(9),
    color: colors.white,
    flex: 1,
  },
  container: {
    width: scale(320),
    backgroundColor: 'white',
    maxWidth: 375,
    minHeight: 150,
    maxHeight: verticalScale(500),
    borderRadius: scale(8),
    overflow: 'hidden',
  },
});
export default PickerDialog;
