export function deliveryRequest({ recipient_id, deliveryman_id, product }) {
  return {
    type: '@delivery/ADD_DELIVERY_REQUEST',
    payload: { recipient_id, deliveryman_id, product },
  };
}

export function deliverySuccess() {
  return {
    type: '@delivery/ADD_DELIVERY_SUCCESS',
    payload: {},
  };
}

export function deliveryFailure() {
  return {
    type: '@delivery/ADD_DELIVERY_FAILURE',
  };
}
