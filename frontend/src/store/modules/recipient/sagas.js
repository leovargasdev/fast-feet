import { all, call, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { recipientSuccess, recipientFailure } from './actions';

export function* recipient({ payload }) {
  try {
    const { name, cep, street, state, city, number, complement } = payload;
    yield call(api.post, 'recipients', {
      name,
      cep,
      street,
      state,
      city,
      number,
      complement,
    });
    yield put(recipientSuccess());
    toast.success('Destinatário criado com sucesso!"');
    history.push('/recipients');
  } catch (err) {
    toast.error('Falha ao cadastrar entregador!');
    yield put(recipientFailure());
  }
}

export default all([takeLatest('@recipient/ADD_RECIPIENT_REQUEST', recipient)]);
