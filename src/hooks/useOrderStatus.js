import useTranslation from '../i18n';
import { ORDER_STATUS } from '../configs/app.config';
import { useContext } from 'react';
import { ThemeContext } from '../theme';

export default function useOrderStatus() {
  const t = useTranslation();
  const theme = useContext(ThemeContext);
  const getOrderStatus = status => {
    switch (status) {
      case ORDER_STATUS.LOOKING_FOR:
        return {
          text: t.translate('lookingFor'),
          color: theme.colors.greyDark2,
        };
      case ORDER_STATUS.DELIVERING:
        return {
          text: t.translate('delivering'),
          color: theme.colors.orangeDark,
        };
      case ORDER_STATUS.COMPLETE:
        return {
          text: t.translate('complete'),
          color: theme.colors.greenLight,
        };
      default:
        break;
    }
  };

  return getOrderStatus;
}
