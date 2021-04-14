import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { body2, Text } from '../../../components/common/Text';
import { ThemeContext } from '../../../theme';
import { scale } from '../../../theme/dimens';

export default function SuggestionsButton({ title, onPress }) {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity style={styles.viewButton}>
            <Text type={body2} style={styles.txtRequest(theme)}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    txtRequest: theme => ({
        marginTop: scale(10),
        marginHorizontal: scale(16),
        color: theme.colors.black,

    }),
    viewButton: {
        justifyContent: 'flex-start',
        width: scale(140),
        height: scale(110),
        backgroundColor: '#fff',
        borderRadius: scale(12),
        marginRight: scale(18),
        elevation: 3,
    },
});