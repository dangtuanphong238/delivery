import React from 'react';
import useStorage from '../hooks/useStorage';
import ThemeContext from './theme-context';

export const modeTypes = {
  LIGHT_MODE: 'light_mode',
  DARK_MODE: 'dark_mode',
};

const ThemeProvider = ({ theme, children }) => {
  const [themeMode, setThemeMode] = useStorage(modeTypes.LIGHT_MODE);

  function getCurrentTheme() {
    switch (themeMode) {
      case modeTypes.LIGHT_MODE:
        return theme.lightTheme;
      case modeTypes.DARK_MODE:
        return theme.darkTheme;
      default:
        return theme.lightTheme;
    }
  }

  function toggleThemeMode() {    
    switch (themeMode) {
      case modeTypes.LIGHT_MODE:
        return setThemeMode(modeTypes.DARK_MODE);
      case modeTypes.DARK_MODE:
        return setThemeMode(modeTypes.LIGHT_MODE);
      default:
        return setThemeMode(modeTypes.LIGHT_MODE);
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        themeMode: themeMode,
        ...getCurrentTheme(),
        setThemeMode: toggleThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
