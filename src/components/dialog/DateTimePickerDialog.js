import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import dayjs, {
  formatDateTime,
  getRoundedDate,
} from '../../helpers/datetime.helper';
import { scale } from '../../theme/dimens';
import I18n from '../../i18n/i18n';
import colors from '../../theme/colors';
import typography from '../../theme/typography';
import PrimaryButton from '../common/PrimaryButton';

const DateTimePickerDialog = ({
  onCancelClick,
  onConfirmClick,
  initialDate,
}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate ?? '');
  const isVaid = useRef(false);

  const onConfirm = () => {
    if (isVaid.current) {
      onConfirmClick(selectedDate);
    }
  };

  const onSelectedChange = date => {
    const dateFormat = formatDateTime(date, 'YYYY/MM/DD HH:mm');
    setSelectedDate(dateFormat);
  };
  const current = new dayjs(getRoundedDate(5));
  const currentDate = current.format('YYYY-MM-DD HH:mm');

  const selectedDateFormat = !!selectedDate
    ? dayjs(selectedDate, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm')
    : currentDate;

  isVaid.current =
    dayjs(selectedDate, 'DD/MM/YYYY HH:mm').unix() >= current.unix();

  return (
    <View style={styles.container}>
      <DatePicker
        onSelectedChange={onSelectedChange}
        current={selectedDateFormat}
        minimumDate={currentDate}
        selected={selectedDateFormat}
        minuteInterval={5}
        language={I18n.locale}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          style={[styles.confirmButton, { backgroundColor: colors.secondary }]}
          onPress={onCancelClick}
          title={I18n.t('cancel')}
          textStyle={[styles.buttonTextStyle, styles.whiteColor]}
        />
        <PrimaryButton
          style={[
            styles.confirmButton,
            {
              backgroundColor: isVaid.current
                ? colors.primary
                : colors.grayBlur,
            },
          ]}
          onPress={onConfirm}
          title={I18n.t('confirm')}
          textStyle={[styles.buttonTextStyle, styles.whiteColor]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteColor: { color: colors.white },
  confirmButton: {
    backgroundColor: colors.grayBlack + '1A',
    flex: 1,
    marginHorizontal: scale(5),
  },

  buttonTextStyle: { ...typography.headline5, textTransform: undefined },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: scale(10),
    paddingBottom: scale(18),
    paddingTop: scale(18),
    flexDirection: 'row',
  },

  container: {
    width: scale(320),
    backgroundColor: 'white',
    maxWidth: 375,
    minHeight: 150,
    borderRadius: scale(8),
    paddingTop: scale(40),
  },
});
export default DateTimePickerDialog;
