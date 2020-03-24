import {all, call, takeLatest, put} from 'redux-saga/effects';
import {Alert} from 'react-native';
// import history from '~/services/history';
import api from '~/services/api';
import {signInSuccess, signFailure} from './actions';

export function* singIn({payload}) {
  try {
    const {email, password} = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const {user, token} = response.data;

    if (user.provider) {
      Alert.alert(
        'Erro no Login',
        'O usuários não pode ser prestador de serviços',
      );
      return;
    }

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Houve um erro no Login');
    yield put(signFailure());
  }
}

export function* singUp({payload}) {
  try {
    const {name, email, password} = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    Alert.alert('Sucesso no Cadastro', 'Cadastro criado com sucesso');
    // history.push('/');
  } catch (err) {
    Alert.alert('Falha na Cadastro', 'Houve um erro ao criar o Cadastro');
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function singOut() {
  Alert.alert('Sessão', 'Logout feito com sucesso');
  // history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_UP_REQUEST', singUp),
  takeLatest('@auth/SIGN_OUT', singOut),
]);
