import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { connect } from 'react-redux';
import { scale } from '../../theme/dimens';
import { ThemeContext } from '../../theme';

function SkeletonListHomeOrder({ numOfArray, screenType }) {
  const theme = useContext(ThemeContext);

  return new Array(screenType === 1 ? numOfArray : 3).fill(0).map((_, index) => (
    <SkeletonPlaceholder key={index.toString()}>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginVertical={scale(10)}>
        <SkeletonPlaceholder.Item width={80} height={80} borderRadius={10} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={180} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={120}
            height={20}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  ));

}
const styles = StyleSheet.create({
  viewLeftBot: { marginTop: 15, width: '90%', height: 20, borderRadius: 4 },
  viewLeftTop: { width: '70%', height: 20, borderRadius: 4 },
  viewCenterBot: { marginTop: 15, width: 50, height: 20, borderRadius: 4 },
  viewCenterTop: { width: 50, height: 20, borderRadius: 4 },
  viewRight: { width: 20, height: 15, borderRadius: 4 },
  viewCenter: { flex: 1, alignItems: 'center' },
  viewLeft: { flex: 3 },
  container: theme => ({
    height: scale(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  }),

});

export default connect(null, null)(SkeletonListHomeOrder);
