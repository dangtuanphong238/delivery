import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../theme';
import { verticalScale } from '../../theme/dimens';

function DotPagination({ numberOfPage, size, activePage, style }) {
  const theme = useContext(ThemeContext);
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {new Array(numberOfPage).fill(null).map((_, index) => (
          <View
            key={index}
            style={[styles.dotStyle(activePage === index, size, theme), style]}
          />
        ))}
      </View>
    );
  };

  return activePage < 2 && <View style={styles.container}>{renderPagination()}</View>;
}

const styles = StyleSheet.create({
  dotStyle: (active, size, theme) => ({
    backgroundColor: active ? theme.colors.orangeDark : theme.colors.greyLight1,
    width: size ?? 10,
    height: size ?? 10,
    borderRadius: size ?? 10,
    marginHorizontal: 12,
  }),
  paginationContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    height: verticalScale(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default React.memo(DotPagination);
