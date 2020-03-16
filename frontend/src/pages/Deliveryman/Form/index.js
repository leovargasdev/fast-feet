import * as Yup from 'yup';
import { Form } from '@unform/web';
import { PropTypes } from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import {toast} from 'react-toastify';

import { ContainerForm } from '~/components/Form/Container/styles';
import Header from '~/components/Form/Header';
import Input from '~/components/Form/Input';
import AvatarInput from './AvatarInput';
import api from '~/services/api';
import history from '~/services/history';
import { Container, ContainerAvatar } from './styles';

const schema = Yup.object().shape({
  avatar_id: Yup.number().required('A foto do entregador é obrigatória!'),
  name: Yup.string().required('O nome do entregador é obrigatório!'),
  email: Yup.string()
    .email('Insira um email válido!')
    .required('O email do entragador é obrigatório!'),
});
// PROBLEMAS AO PEGAR A IMAGEM DO AVATAR
// PQPQPQPQPQ
export default function DeliverymanForm({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get(`/deliveryman/${id}`);
      const { name, email, avatar: aux } = response.data;
      formRef.current.setData({
        name,
        email,
        avatar_id: aux,
      });
      setAvatar(aux);
    }

    if (id) loadDeliveryman();
  }, [id]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/deliveryman/${id}`, { ...data });
        toast.success('Destinatário atualizado com sucesso!');
      } else {
        await api.post('/deliveryman', { ...data });
        toast.success('Destinatário criado com sucesso!');
      }
      history.push('/deliverymen');

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
        <Header content="Cadastro de entregadores" voltarLink="/deliverymen" />
        <ContainerForm>
          <ContainerAvatar>
            <AvatarInput name="avatar_id" defaultValue={avatar}/>
          </ContainerAvatar>

          <Input
            name="name"
            label="Nome"
            placeholder="Digite o nome do entregador"
          />
          <Input name="email" label="E-mail" placeholder="example@teste.com" />
        </ContainerForm>
      </Form>
    </Container>
  );
}

DeliverymanForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
