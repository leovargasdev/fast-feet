import {Alert} from 'react-native';
import {all, call, takeLatest, put} from 'redux-saga/effects';

import {signInSuccess, signInFailure} from './actions';
import api from '~/services/api';

export function* singIn({payload}) {
  try {
    const {id} = payload;
    const response = yield call(api.post, 'sessions-mobile', {id});
    const {deliveryman: user, token} = response.data;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Falha ao entrar no Sistema');
    yield put(signInFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
]);
