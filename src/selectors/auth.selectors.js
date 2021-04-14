import { createSelector } from 'reselect';

const authSelector = state => state.authState;

export const isLoginSelector = createSelector(authSelector, item => {
  return item.isLogedIn ?? false;
});