import { ACTION_SHOW_LOADING, ACTION_HIDE_LOADING } from './types';

export const showLoading = () => {
  return { type: ACTION_SHOW_LOADING };
};

export const hideLoading = () => {
  return { type: ACTION_HIDE_LOADING };
};
