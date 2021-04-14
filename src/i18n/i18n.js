import I18n from 'i18n-js';
import { LOCALES } from '../configs/app.config';

//default locale
I18n.defaultLocale = LOCALES.ENGLISH.name;

// Enable fallbacks  to `en`
I18n.fallbacks = true;

//current locale
I18n.locale = LOCALES.ENGLISH.name;

I18n.translations = {
  en: require('./languages/en.json'),
  vi: require('./languages/vi.json'),
};

export default I18n;
