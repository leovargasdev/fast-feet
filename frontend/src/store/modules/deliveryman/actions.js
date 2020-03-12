export function deliverymanRequest({ avatar_id, name, email }) {
  return {
    type: '@deliveryman/DELIVERYMAN_REQUEST',
    payload: { avatar_id, name, email },
  };
}

export function deliverymanSuccess() {
  return {
    type: '@deliveryman/DELIVERYMAN_SUCCESS',
    payload: {},
  };
}

export function deliverymanFailure() {
  return {
    type: '@deliveryman/DELIVERYMAN_FAILURE',
  };
}
