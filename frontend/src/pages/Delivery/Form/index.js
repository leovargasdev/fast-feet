import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Header from '~/components/Form/Header';
import Input from '~/components/Form/Input';
import Select from '~/components/Form/Select';
import { Container, GroupInputs } from './styles';
import api from '~/services/api';

export default function DeliveryForm() {
  const formRef = useRef(null);
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('/recipients-select');
      const responseD = await api.get('/deliverymen');
      setRecipients(response.data);
      // const aix = responseD.data.map(deliveryman => {
      //   return { value: deliveryman.id, label: deliveryman.name };
      // });
      console.log(responseD.data);
    }
    loadRecipients();
  }, []);

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
      console.log(data);
      // dispatch(signInRequest(data));
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
      <Header content="Cadastro de encomendas" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <GroupInputs>
          <Select
            name="recipient_id"
            options={recipients}
            label="Entragador"
            // defaultValue={options[1]}
          />
          <Select
            name="deliveryman_id"
            options={deliverymen}
            label="Entragador"
            // defaultValue={options[1]}
          />
          {/* <Input name="deliveryman_id" label="Entragador" /> */}
        </GroupInputs>
        <Input name="product" label="Nome do Produto" />

        <button type="submit">enviar</button>
      </Form>
    </Container>
  );
}
