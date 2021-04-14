import _ from 'lodash';
import { put } from 'redux-saga/effects';
import { hideLoading, showLoading } from '../actions/loading.action';

export function* LoginSaga(action) {
  try {
    yield put(showLoading());
    yield put(hideLoading());
  } catch (error) {
    yield put(hideLoading());
  }
}
