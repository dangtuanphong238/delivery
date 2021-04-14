import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import BackIcon from '../../components/common/BackIcon';
import { headline2, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';

export default function RewardPointScreen() {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    return (
        <SafeAreaView style={styles.container}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2} style={styles.titleToolBar(theme)}>
                        {t.translate('historyRewardPoint')}
                    </Text>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleToolBar: theme => ({
        color: theme.colors.black,
    }),
});
