import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import IconMaterialOrImageOrSvg, {
    IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import { body2, Text } from '../../components/common/Text';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function ProcessButton({ icon, title, onPress }) {
    const t = useTranslation();
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity style={styles.button(theme)} onPress={onPress}>
            <IconMaterialOrImageOrSvg
                type={IconType.Svg}
                size={scale(25)}
                SVGIcon={icon}
            />
            <Text type={body2} style={styles.text}>{t.translate(title)}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    button: theme => ({
        flex: 1, alignItems: 'center', borderColor: theme.colors.border1, borderWidth: 1.5, width: '100%',
        height: '100%', justifyContent: 'center', backgroundColor: theme.colors.greyLight3,
    }),

    text: theme => ({
        color: theme.colors.gray1,
    }),
})