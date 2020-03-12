import React, { useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { ContainerForm } from '~/components/Form/Container/styles';
import Header from '~/components/Form/Header';
import Input from '~/components/Form/Input';
import AvatarInput from './AvatarInput';
import { deliverymanRequest } from '~/store/modules/deliveryman/actions';
import { Container, ContainerAvatar } from './styles';

export default function DeliverymenForm() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        avatar_id: Yup.number().required('A foto do entregador é obrigatória!'),
        name: Yup.string().required('O nome do entregador é obrigatório!'),
        email: Yup.string()
          .email('Insira um email válido!')
          .required('O email do entragador é obrigatório!'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(deliverymanRequest(data));
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
        <Header content="Cadastro de entregadores" voltarLink="/deliverymen"/>
        <ContainerForm>
          <ContainerAvatar>
            <AvatarInput name="avatar_id" />
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
