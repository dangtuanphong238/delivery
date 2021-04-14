import React, { useContext } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
    headline4,
    headline5,
    Text,
} from '../../components/common/Text';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function CancelOrderDialog(props, { isVisible }) {
    const t = useTranslation();
    const theme = useContext(ThemeContext);
    const closeModal = () => {
        props.handleClickCommunication(true);
    };
    const navigateToHome = () => {
        props.handleClickCancel(true);
    };
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="none"
                transparent={true}
                visible={isVisible}
                onRequestClose={
                    closeModal
                }
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView(theme)}>
                        <Text type={headline4} style={{ marginTop: scale(20), marginBottom: scale(15), color: theme.colors.orangeDark }}>
                            {t.translate('confirmCancelOrder')}
                        </Text>
                        <Text type={headline5} style={styles.txtThanks(theme)}>{t.translate('areYouSureCancelThisOrder')}</Text>
                        <View style={styles.viewButtonBot(theme)}>
                            <TouchableOpacity style={[styles.btnCancel, { backgroundColor: theme.colors.greyDark2 }]} onPress={navigateToHome}>
                                <Text type={headline5} style={styles.txtCancel(theme)}>{t.translate('cancelOrder')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnCancel, { backgroundColor: theme.colors.orangeDark }]} onPress={closeModal}>
                                <Text type={headline5} style={styles.txtCancel(theme)}>{t.translate('communication')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    txtCancel: theme => ({
        paddingHorizontal: scale(30),
        paddingVertical: scale(10),
        color: theme.colors.white,
    }),
    btnCancel: {
        marginHorizontal: scale(10),
        borderRadius: scale(12),
    },
    viewButtonBot: theme => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: scale(30),
    }),
    txtThanks: theme => ({
        marginBottom: scale(30),
        color: theme.colors.black,
        paddingHorizontal: scale(25),
    }),
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingHorizontal: scale(40),
    },
    modalView: theme => ({
        backgroundColor: theme.colors.white,
        borderRadius: scale(10),
        alignItems: 'center',
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }),

});

