export function recipientRequest({
  name,
  cep,
  street,
  state,
  city,
  number,
  complement,
}) {
  return {
    type: '@recipient/ADD_RECIPIENT_REQUEST',
    payload: { name, cep, street, state, city, number, complement },
  };
}

export function recipientSuccess() {
  return {
    type: '@recipient/ADD_RECIPIENT_SUCCESS',
    payload: {},
  };
}

export function recipientFailure() {
  return {
    type: '@recipient/ADD_RECIPIENT_FAILURE',
  };
}
