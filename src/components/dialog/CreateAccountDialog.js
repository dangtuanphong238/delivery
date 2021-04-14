import React, { useContext } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import ic_close from '../../assets/images/images/svg/ic_close';
import ic_success from '../../assets/images/images/svg/ic_success';
import IconMaterialOrImageOrSvg, {
    IconType,
} from '../../components/common/IconMaterialOrImageOrSvg';
import {
    body1,
    headline4,
    Text,
} from '../../components/common/Text';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function CreateAccountDialog(props, { isVisible }) {
    const t = useTranslation();
    const theme = useContext(ThemeContext);
    const closeModal = () => {
        props.handleClickParent(true);
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
                        <TouchableOpacity style={styles.viewClose} onPress={closeModal}>
                            <IconMaterialOrImageOrSvg
                                type={IconType.Svg}
                                size={scale(18)}
                                SVGIcon={ic_close}
                            />
                        </TouchableOpacity>
                        <IconMaterialOrImageOrSvg
                            type={IconType.Svg}
                            size={scale(50)}
                            SVGIcon={ic_success}
                        />
                        <Text type={body1} style={{ marginHorizontal: scale(25), marginTop: scale(15) }}>
                            {t.translate('successfullyCreatedAccount')}
                        </Text>
                        <Text type={body1} style={{ marginHorizontal: scale(25) }}>
                            {t.translate('welcomeToExperienceTheApp')}
                        </Text>
                        <Text type={headline4} style={styles.txtThanks(theme)}>{t.translate('deliveryApp')}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    txtThanks: theme => ({
        marginBottom: scale(15),
        color: theme.colors.black,
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
        marginHorizontal: scale(20),
        paddingBottom: scale(20),
    }),
    viewClose: {
        marginTop: scale(15),
        alignSelf: 'flex-end',
        marginRight: scale(20),
    },
});

