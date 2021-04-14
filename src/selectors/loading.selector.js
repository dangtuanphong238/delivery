import { createSelector } from 'reselect';

const loadingState = state => state.loadingState;

export const isLoadingSelector = createSelector(loadingState, item => {
  return item.loading ?? false;
});
