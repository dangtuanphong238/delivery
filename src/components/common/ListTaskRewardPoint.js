import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { scale } from '../../theme/dimens';
import TaskRewardPointItem from './TaskRewardPointItem';

const ListTaskRewardPoint = ({ data }) => {
  const renderItem = ({ item, index }) => {
    return <TaskRewardPointItem item={item} />;
  };
  const keyExtractor = (item, index) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default React.memo(ListTaskRewardPoint);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(8),
    paddingTop: scale(8),
  },
});
