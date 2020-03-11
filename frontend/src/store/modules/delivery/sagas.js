import { all, call, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { deliverySuccess, deliveryFailure } from './actions';

export function* addDelivery({ payload }) {
  try {
    const { recipient_id, deliveryman_id, product } = payload;
    yield call(api.post, 'delivery', {
      recipient_id,
      deliveryman_id,
      product,
    });
    yield put(deliverySuccess());
    toast.success('Entrega criada com sucesso"');
    history.push('/deliveries');
  } catch (err) {
    toast.error('Falha ao entrar no Sistema');
    yield put(deliveryFailure());
  }
}

export default all([takeLatest('@delivery/ADD_DELIVERY_REQUEST', addDelivery)]);
