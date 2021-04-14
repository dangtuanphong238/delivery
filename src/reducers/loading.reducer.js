import {
  ACTION_SHOW_LOADING,
  ACTION_HIDE_LOADING,
  HIDE_GET_SETTINGS,
} from '../actions/types';

const loadingState = {
  loading: false,
  showGetSettings: true,
};

export const loadingReducer = (state = loadingState, action) => {
  switch (action.type) {
    case ACTION_SHOW_LOADING:
      return { ...state, loading: true };
    case ACTION_HIDE_LOADING:
      return { ...state, loading: false };
    case HIDE_GET_SETTINGS:
      return {
        ...state,
        showGetSettings: false,
      };
    default:
      return state;
  }
};
