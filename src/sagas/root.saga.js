import { all, takeLatest } from 'redux-saga/effects';
import {
  LOGIN,
} from '../actions/types';
import * as AuthSaga from './auth.saga';

export default function* rootSaga() {
  yield all([
    yield takeLatest(LOGIN, AuthSaga.LoginSaga),
  ]);
}
