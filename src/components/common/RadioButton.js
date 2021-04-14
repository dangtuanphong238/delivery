import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { headline5, Text } from '../../components/common/Text';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function RadioButton({ PROP }) {
    const theme = useContext(ThemeContext);
    const [value, setValue] = useState(PROP[0].key);

    return (
        <View>
            {PROP.map(res => {
                return (
                    <TouchableOpacity key={res.key} style={styles.container} onPress={() => {
                        setValue(res.key);
                    }}>
                        <View style={styles.radioCircle(theme)}>
                            {value === res.key && <View style={styles.selectedRb(theme)} />}
                        </View>
                        <Text type={headline5} style={{ color: value === res.key ? theme.colors.orangeDark : theme.colors.black }}>{res.text}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: scale(11),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    radioCircle: theme => ({
        marginRight: scale(15),
        height: scale(20),
        width: scale(20),
        borderRadius: scale(100),
        borderWidth: 2,
        borderColor: theme.colors.orangeDark,
        alignItems: 'center',
        justifyContent: 'center',
    }),
    selectedRb: theme => ({
        width: scale(10),
        height: scale(10),
        borderRadius: scale(50),
        backgroundColor: theme.colors.orangeDark,
    }),
});