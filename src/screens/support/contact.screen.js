import React, { useContext, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-easy-toast';
import * as ImagePicker from 'react-native-image-picker';
import ic_choose_picture from '../../assets/images/images/svg/ic_choose_picture';
import BackIcon from '../../components/common/BackIcon';
import IconMaterialOrImageOrSvg, {
    IconType
} from '../../components/common/IconMaterialOrImageOrSvg';
import { body2, body3, headline2, headline4, headline5, Text } from '../../components/common/Text';
import ToolBar from '../../components/common/Toolbar';
import useTranslation from '../../i18n';
import { ThemeContext } from '../../theme';
import { scale } from '../../theme/dimens';

export default function ContactScreen({ navigation }) {
    const theme = useContext(ThemeContext);
    const t = useTranslation();
    const [textCount, setTextCount] = useState(0);
    const [textValue, setTextValue] = useState('');
    const toastRef = useRef();


    const GetValueFunction = (ValueHolder) => {
        var Value = ValueHolder.length;
        setTextCount(Value);
        setTextValue(ValueHolder);
    };

    const showToastWithGravity = () => {
        if (textCount !== 0) {
            setTextValue('');
            toastRef.current.show(t.translate('sentRequested'), 2000);
        }
        else {
            toastRef.current.show('Chưa nhập nội dung', 2000);
        }
    };

    const openGallery = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose file from Custom Option',
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (res) => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                let source = res;
                // this.setState({
                //   photo: source.uri,
                // });
            }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ToolBar
                style={{ backgroundColor: theme.colors.white }}
                left={<BackIcon />}
                barStyle="dark-content"
                center={
                    <Text type={headline2}>
                        {t.translate('doYouNeedSupport')}
                    </Text>
                }
            />
            <ScrollView>
                <Text type={body2} style={styles.txtNoteSupport}>
                    {t.translate('noteSupport')}
                </Text>
                <Text type={headline4} style={styles.titleNote(theme)}>
                    {t.translate('note1')}
                </Text>
                <View style={styles.contentView(theme)}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        multiline={true}
                        placeholder={'Nhập lời nhắn'}
                        style={styles.inputMessage}
                        maxLength={1000}
                        value={textValue}
                        onChangeText={ValueHolder => GetValueFunction(ValueHolder)} />
                    <Text type={body3} style={styles.txtTextCount(theme)}>{textCount}/1000</Text>
                </View>
                <Text type={body2} style={styles.txtAttachPictures(theme)}>{t.translate('attachPhotoIfAny')}</Text>
                <TouchableOpacity style={styles.btnChoosePic(theme)} onPress={openGallery}>
                    <IconMaterialOrImageOrSvg
                        type={IconType.Svg}
                        size={scale(42)}
                        SVGIcon={ic_choose_picture}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSend(theme)} onPress={showToastWithGravity}>
                    <Text type={headline5} style={styles.txtSend(theme)}>{t.translate('sendRequest')}</Text>
                </TouchableOpacity>
            </ScrollView>
            <Toast
                // ref={(toast) => this.toast = toast}
                ref={toastRef}
                style={{ backgroundColor: theme.colors.orangeDark, borderRadius: scale(30), paddingVertical: scale(12), paddingHorizontal: scale(17), }}
                position='bottom'
                positionValue={scale(70)}
                textStyle={{ fontSize: scale(14), color: theme.colors.white }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtNoteSupport: {
        marginTop: scale(41),
        marginHorizontal: scale(44),
        marginBottom: scale(34),
    },
    titleNote: theme => ({
        marginLeft: scale(34),
        marginBottom: scale(7),
        color: theme.colors.orangeDark,
    }),
    contentView: theme => ({
        marginHorizontal: scale(28),
        borderRadius: scale(12),
        backgroundColor: theme.colors.white,
        height: scale(113),
        elevation: 3,
        marginBottom: scale(37),
    }),
    inputMessage: {
        paddingHorizontal: scale(20),
        marginBottom: scale(15),
    },
    txtTextCount: theme => ({
        marginRight: scale(14),
        top: '80%',
        left: '80%',
        position: 'absolute',
        color: theme.colors.border,
    }),
    txtAttachPictures: theme => ({
        marginLeft: scale(34),
        color: theme.colors.gray2,
        marginBottom: scale(7),
    }),
    btnChoosePic: theme => ({
        marginLeft: scale(34),
        backgroundColor: theme.colors.white,
        width: scale(58),
        height: scale(58),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: scale(106),
    }),
    btnSend: theme => ({
        alignItems: 'center',
        backgroundColor: theme.colors.orangeDark,
        marginHorizontal: scale(88),
        borderRadius: scale(13),
    }),
    txtSend: theme => ({
        color: theme.colors.white,
        marginVertical: scale(15),
    }),
});
