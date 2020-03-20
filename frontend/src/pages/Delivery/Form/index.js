import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { ContainerForm } from '~/components/Form/Container/styles';
import Header from '~/components/Form/Header';
import Input from '~/components/Form/Input';
import Select from '~/components/Form/Select';
import { Container, GroupInputs } from './styles';
import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  recipient_id: Yup.number().required('O destinatário é obrigatório!'),
  deliveryman_id: Yup.number().required('O entragador é obrigatório!'),
  product: Yup.string().required('O nome do produto é obrigatório!'),
});

export default function DeliveryForm({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);

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
      const response = await api.get('/deliverymen-select');
      setDeliverymen(response.data);
    }

    async function loadRecipients() {
      const response = await api.get('/recipients-select');
      setRecipients(response.data);
    }

    loadRecipients();
    loadDeliverymen();
    if (id) loadDelivery();

  }, [id]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/delivery/${id}`, { ...data });
        toast.info('Encomenda atualizada com sucesso!');
      } else {
        await api.post('/delivery', { ...data });
        toast.success('Encomenda criada com sucesso!');
      }
      history.push('/deliveries');

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
        <Header content="Cadastro de encomendas" voltarLink="/deliveries" />
        <ContainerForm>
          <GroupInputs>
            <Select
              name="recipient_id"
              options={recipients}
              label="Destinatário"
            />
            <Select
              name="deliveryman_id"
              options={deliverymen}
              label="Entragador"
            />
          </GroupInputs>
          <Input name="product" label="Nome do Produto" />
        </ContainerForm>
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
