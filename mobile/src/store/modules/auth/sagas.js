import {all, call, takeLatest, put} from 'redux-saga/effects';
import api from '~/services/api';
import {signInSuccess, signInFailure} from './actions';

export function* singIn({payload}) {
  try {
    const {idDeliveryman} = payload;
    // const response = yield call(api.post, 'sessions', {
    //   email,
    //   password,
    // });
    // const { user, token } = response.data;

    // yield put(signInSuccess(token, user));
  } catch (err) {
    toast.error('Falha ao entrar no Sistema');
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
