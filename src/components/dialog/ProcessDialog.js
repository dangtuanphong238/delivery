import React, { useContext } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import ic_close from '../../assets/images/images/svg/ic_close';
import ic_shipper2 from '../../assets/images/images/svg/ic_shipper2';
import IconMaterialOrImageOrSvg, {
    IconType,
} from '../../components/common/IconMaterialOrImageOrSvg';
import {
    body1,
    headline5,
    Text,
} from '../../components/common/Text';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';
import useTranslation from '../../i18n';

export default function ProcessDialog(props, { isVisible }) {
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
                        <Text type={body1} style={{ paddingHorizontal: scale(40), marginBottom: scale(10) }}>{t.translate('orderHasBeenCompleted')}</Text>
                        <IconMaterialOrImageOrSvg
                            type={IconType.Svg}
                            size={scale(50)}
                            SVGIcon={ic_shipper2}
                        />
                        <Text type={headline5} style={styles.txtThanks(theme)}>{t.translate('titleOnboarding1')}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    txtThanks: theme => ({
        marginBottom: scale(15),
        marginTop: scale(10),
        color: theme.colors.orangeDark,
        fontStyle: 'italic',
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
    }),
    viewClose: {
        marginTop: scale(10),
        alignSelf: 'flex-end',
        marginRight: scale(10),
    },
});

