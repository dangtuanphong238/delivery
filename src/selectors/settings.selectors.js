import { createSelector } from 'reselect';

const settingsState = state => state.settingsState;

export const isFirstInstallSelector = createSelector(settingsState, data => {
  return data?.isFirstInstall ?? false;
});