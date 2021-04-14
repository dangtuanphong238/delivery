import React from 'react';
import { LOCALES } from '../configs/app.config';
import useStorage from '../hooks/useStorage';
import I18n from './i18n';
import translateOrFallback from './TranslateFallback';

const LocaleContext = React.createContext();

export const LocaleContextProvider = props => {
  const [locale, changeLocale] = useStorage('@language', LOCALES.VIETNAM);
  I18n.locale = locale.langCode;

  const _changeLocale = locale => {
    I18n.locale = locale.langCode;
    changeLocale(locale);
  };

  return (
    <LocaleContext.Provider
      value={{
        ...I18n,
        localeProvider: locale,
        t: translateOrFallback,
        translate: translateOrFallback,
        changeLocale: _changeLocale,
      }}
    >
      {props.children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
