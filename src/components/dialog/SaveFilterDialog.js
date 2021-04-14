import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import DialogHelper from '../../helpers/dialog.helper';
import { scale } from '../../theme/dimens';
import useMergeState from '../../hooks/useMergeState';
import useTranslation from '../../i18n';
import colors from '../../theme/colors';
import typography from '../../theme/typography';
import AuctionTextInput from '../auction-registration/AuctionTextInput';
import PrimaryButton from '../common/PrimaryButton';
import { body2, headline4, Text } from '../common/Text';

const SaveFilterDialog = ({ onConfirmClick }) => {
  const t = useTranslation();
  const [state, setState] = useMergeState({ value: '', error: null });

  const validationSchema = Yup.object().shape({
    content: Yup.string().required(
      t.translate('please_fill', {
        data: '',
      }),
    ),
  });

  const onCancelClick = () => {
    DialogHelper.dismiss();
  };
  const onChangeText = text => {
    setState({ value: text, error: null });
  };

  const onConfirm = async () => {
    const errorValidate = await generatorMessageError();
    if (errorValidate) {
      return setState({ error: errorValidate });
    } else {
      onConfirmClick(state.value);
    }
    DialogHelper.dismiss();
  };

  const generatorMessageError = async () => {
    try {
      await validationSchema.validate(
        { content: state.value },
        { abortEarly: false },
      );
    } catch (error) {
      return error.inner.reduce((obj, item) => {
        obj[item.path] = item.message;
        return obj;
      }, {});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text
            type={headline4}
            style={[styles.titleText, { color: colors.black }]}
          >
            {t.translate('save_filter')}
          </Text>
        </View>
        <View style={{ paddingVertical: scale(16) }}>
          <Text type={body2} style={styles.contentStyle}>
            {t.translate('save_filter_message')}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <AuctionTextInput
            value={state.value}
            label={t.translate('input_save_filter')}
            onChangeText={onChangeText}
            otherTextInputProps={{
              maxLength: 100,
            }}
            textError={state.error?.content}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          style={[styles.button, styles.cancelButton]}
          onPress={onCancelClick}
          title={t.translate('cancel')}
          textStyle={styles.buttonTextStyle}
        />

        <PrimaryButton
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={onConfirm}
          title={t.translate('save')}
          textStyle={[styles.buttonTextStyle, styles.whiteColor]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { height: 70 },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.opacityBorderGray,
    paddingVertical: scale(5),
  },
  whiteColor: { color: colors.white },
  cancelButton: { backgroundColor: colors.grayBlack + '1A' },
  contentContainer: {
    paddingHorizontal: scale(10),
  },
  buttonTextStyle: { ...typography.headline6, textTransform: undefined },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    paddingBottom: scale(16),
    paddingTop: scale(18),
  },
  titleText: {
    textAlign: 'center',
    marginVertical: scale(9),
  },
  container: {
    width: scale(320),
    backgroundColor: 'white',
    maxWidth: 375,
    minHeight: 150,
    borderRadius: scale(4),
  },
  contentStyle: {
    textAlign: 'center',
    minHeight: 30,
  },
  button: { flex: 0.49, height: scale(40) },
});
export default SaveFilterDialog;
