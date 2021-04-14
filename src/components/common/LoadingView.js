import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { headline5, Text } from '../../components/common/Text';
import useTranslation from '../../i18n';
import { isLoadingSelector } from '../../selectors/loading.selector';
import { scale } from '../../theme/dimens';

const LoadingView = ({ loading }) => {
  const t = useTranslation();

  if (loading) {
    return (
      <View style={styles.Loading}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={colors.white}
          />
          <Text type={headline5} style={styles.textStyle}>
            {t.translate('processing')}
          </Text>
        </View>
      </View>
    );
  }
  return <View />;
};

const styles = StyleSheet.create({
  Loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0C2A6455',
    zIndex: 10,
  },
  loadingContainer: {
    // flexDirection: 'row',
    backgroundColor: '#00000080',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 8,
    // width: scale(230),
    padding: scale(12),
    // height: verticalScale(100),
  },
  textStyle: {
    color: '#FFFFFFCC',
    marginTop: 8,
  },
});

const mapStateToProps = state => ({
  loading: isLoadingSelector(state),
});

export default connect(mapStateToProps)(LoadingView);
