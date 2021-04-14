import { CHANGE_INITIAL_ROUTER, SAVE_SETTINGS } from '../actions/types';

const settingsState = {
  isFirstInstall: true,
  settings: {},
};

export const settingsReducer = (state = settingsState, action) => {
  switch (action.type) {
    case CHANGE_INITIAL_ROUTER:
      return { ...state, isFirstInstall: false };
    case SAVE_SETTINGS:
      return {
        ...state,
        settings: action.settings,
      };
    default:
      return state;
  }
};
