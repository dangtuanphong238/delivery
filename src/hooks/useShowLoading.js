import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../actions/loading.action';

export default function useShowLoading() {
  const dispatch = useDispatch();
  const show = useCallback(() => {
    dispatch(showLoading());
  }, []);

  const hide = useCallback(() => {
    dispatch(hideLoading());
  }, []);
  return [show, hide];
}
