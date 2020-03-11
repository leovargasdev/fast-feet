import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '~/components/Form/Header';
import Input from '~/components/Form/Input';
import Select from '~/components/Form/Select';
import { Container, GroupInputs } from './styles';
import api from '~/services/api';
import { deliveryRequest } from '~/store/modules/delivery/actions';

export default function DeliveryForm({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDelivery() {
      const {
        data: { product, recipient, deliveryman },
      } = await api.get(`/delivery/${id}`);

      formRef.current.setData({
        product,
      });
      formRef.current.setFieldValue('recipient_id', {
        value: recipient.id,
        label: recipient.name,
      });
      formRef.current.setFieldValue('deliveryman_id', {
        value: deliveryman.id,
        label: deliveryman.name,
      });
    }

    async function loadDeliverymen() {
      const response = await api.get('/deliverymen?name');
      setDeliverymen(
        response.data.map(deliveryman => {
          return { value: deliveryman.id, label: deliveryman.name };
        })
      );
    }

    async function loadRecipients() {
      const response = await api.get('/recipients-select');
      setRecipients(response.data);
    }
    loadRecipients();
    loadDeliverymen();
    if (id) loadDelivery();
  }, [deliverymen, id]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        recipient_id: Yup.string().required('O destinatário é obrigatório!'),
        deliveryman_id: Yup.number().required('O entragador é obrigatório!'),
        product: Yup.string().required('O nome do produto é obrigatório!'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(deliveryRequest(data));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header content="Cadastro de encomendas" />
        <GroupInputs>
          <Select name="recipient_id" options={recipients} label="Entragador" />
          <Select
            name="deliveryman_id"
            options={deliverymen}
            label="Entragador"
          />
        </GroupInputs>
        <Input name="product" label="Nome do Produto" />
      </Form>
    </Container>
  );
}
DeliveryForm.propTypes = {
  // eslint-disable-next-line
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
