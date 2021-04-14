import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import IconMaterialOrImageOrSvg, {
    IconType
} from '../../../components/common/IconMaterialOrImageOrSvg';
import { headline5, Text } from '../../../components/common/Text';
import { ThemeContext } from '../../../theme';
import { scale } from '../../../theme/dimens';

export default function RequestButton({ icon, title, onPress }) {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity style={styles.btnRequest} onPress={onPress}>
            <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(46)}
                SVGIcon={icon}
            />
            <Text type={headline5} style={styles.txtRequest(theme)}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    btnRequest: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    txtRequest: theme => ({
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: scale(12),
        color: theme.colors.gray2,
        marginHorizontal: scale(15),
    }),
});