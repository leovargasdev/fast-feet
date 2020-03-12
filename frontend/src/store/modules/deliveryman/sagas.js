import { all, call, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { deliverymanSuccess, deliverymanFailure } from './actions';

export function* deliveryman({ payload }) {
  try {
    const { avatar_id, name, email } = payload;
    yield call(api.post, 'deliveryman', {
      avatar_id,
      name,
      email,
    });
    yield put(deliverymanSuccess());
    toast.success('Entregador criado com sucesso"');
    history.push('/deliverymen');
  } catch (err) {
    toast.error('Falha ao cadastrar entregador!');
    yield put(deliverymanFailure());
  }
}

export default all([
  takeLatest('@deliveryman/DELIVERYMAN_REQUEST', deliveryman),
]);
