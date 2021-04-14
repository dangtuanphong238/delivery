import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { connect } from 'react-redux';
import { scale } from '../../theme/dimens';
import { ThemeContext } from '../../theme';

function SkeletonListHistoryIncome({numOfArray}) {
    const theme = useContext(ThemeContext);

    return new Array(numOfArray).fill(0).map((_, index) => (
        <SkeletonPlaceholder key={index.toString()}>
            <View style={styles.container(theme)}>
                <View style={styles.viewLeft}>
                    <View style={styles.viewLeftTop} />
                    <View
                        style={styles.viewLeftBot}
                    />
                </View>
                <View style={styles.viewCenter}>
                    <View style={styles.viewCenterTop} />
                    <View
                        style={styles.viewCenterBot}
                    />
                </View>
                <View style={styles.viewCenter}>
                    <View style={styles.viewRight} />
                </View>
            </View>
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

export default connect(null, null)(SkeletonListHistoryIncome);
