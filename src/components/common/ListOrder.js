import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { scale } from '../../theme/dimens';
import OrderItem from './OrderItem';
import SkeletonListHomeOrder from './SkeletonListHomeOrder';

const ListOrder = ({ data, screenType }) => {
  const renderItem = ({ item, index }) => {
    return <OrderItem item={item} />;
  };
  const keyExtractor = (item, index) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={{ marginHorizontal: scale(20) }}>
            <SkeletonListHomeOrder numOfArray={6} screenType={screenType}/>
          </View>}
      />
    </View>
  );
};

export default React.memo(ListOrder);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(8),
    paddingTop: scale(8),
  },
});
