import React, { useContext } from 'react';
import { FlatList, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import ic_maps_black from '../../assets/images/images/svg/ic_maps_black';
import IconMaterialOrImageOrSvg, {
    IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import {
    body2,

    headline3,
    headline4,
    headline5,
    Text
} from '../../components/common/Text';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function NoteDialog(props, { isVisible }) {
    const t = useTranslation();
    const theme = useContext(ThemeContext);
    const closeModal = () => {
        props.handleClickParent(true);
    };
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'Mei',
            idOrder: 'OR3021',
            note: 'Đến cổng tòa nhà ACV thì gọi tôi',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571f29d72',
            name: 'Ly',
            idOrder: 'OR3022',
            note: 'Gửi xe ở B1, không tốn phí',
        },

    ];

    const renderItem = ({ item }) => (
        <Item
            name={item.name}
            idOrder={item.idOrder}
            note={item.note}
        />
    );
    const Item = ({ name, idOrder, note }) => (
        <View style={styles.containerItem(theme)}>
            <View style={styles.viewRow}>
                <IconMaterialOrImageOrSvg
                    type={IconType.Svg}
                    size={scale(18)}
                    SVGIcon={ic_maps_black}
                />
                <Text type={headline4} style={{ marginHorizontal: scale(5) }}>{name}</Text>
            </View>
            <View style={styles.viewRow}>
                <Text type={headline5}>{t.translate('pointOrder')}: </Text>
                <Text type={headline5} style={{ color: theme.colors.textRed }}>{idOrder}</Text>
            </View>
            <View style={styles.viewRow}>
                <Text type={headline5}>{t.translate('note1')}: </Text>
                <Text type={body2} style={styles.txtNote(theme)}>{note}</Text>
            </View>
        </View>
    );
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
                        <Text type={headline3} style={styles.txtTitle(theme)}>{t.translate('noteFromCustomer')}</Text>
                        <View style={{ height: scale(195) }}>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <TouchableOpacity style={styles.btnUnderstand(theme)} onPress={closeModal}>
                            <Text type={headline4} style={{ color: theme.colors.white }}>{t.translate('understaned')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    txtTitle: theme => ({
        alignSelf: 'center',
        color: theme.colors.orangeDark,
    }),
    btnUnderstand: theme => ({
        marginHorizontal: scale(60),
        borderRadius: scale(12),
        backgroundColor: theme.colors.orangeDark,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: scale(12),
        marginTop: scale(12),
    }),
    txtNote: theme => ({
        alignSelf: 'center',
        marginRight: scale(30),
        color: theme.colors.gray,
    }),
    containerItem: theme => ({
        marginHorizontal: scale(20),
        borderBottomColor: theme.colors.border,
        borderBottomWidth: 1,
        paddingVertical: scale(10),
    }),
    viewRow: { flexDirection: 'row', marginVertical: scale(3), alignItems: 'center' },
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
        paddingVertical: scale(20),
        width: '80%',
        backgroundColor: theme.colors.white,
        borderRadius: scale(10),
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }),

});

