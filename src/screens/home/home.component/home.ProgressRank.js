import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../theme';
import { scale, WINDOW_WIDTH } from '../../../theme/dimens';

const lengthProgress = 4;

const HomeProgressRank = () => {
  const theme = useContext(ThemeContext);

  const renderStackBlank = () => {
    return (
      <View style={styles.containerStack}>
        {new Array(lengthProgress).fill(null).map((_, index) => (
          <View key={index} style={styles.stackStyle(theme, index)} />
        ))}
      </View>
    );
  };

  return <View style={styles.container}>{renderStackBlank()}</View>;
};

export default React.memo(HomeProgressRank);

const styles = StyleSheet.create({
  container: {},
  containerStack: { flexDirection: 'row', paddingVertical: scale(4) },
  stackStyle: (theme, index) => ({
    height: 10,
    //16 paddingHorizontal in home point
    //16 padding in home point
    //50 iconWidth
    //16 marginHorizontal with each
    width:
      (WINDOW_WIDTH - scale(16 + 16 + 50 + 4 * (lengthProgress - 2))) /
      lengthProgress,
    backgroundColor: theme.colors.progressBlank,
    marginRight: index === lengthProgress - 1 ? 0 : 2,
    borderBottomLeftRadius: index === 0 ? scale(5) : 0,
    borderTopLeftRadius: index === 0 ? scale(5) : 0,
    borderBottomRightRadius: index === lengthProgress - 1 ? scale(5) : 0,
    borderTopRightRadius: index === lengthProgress - 1 ? scale(5) : 0,
  }),
});
