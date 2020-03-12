import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import Header from '~/components/Form/Header';
import Input from '~/components/Form/Input';
import api from '~/services/api';
import AvatarInput from './AvatarInput';
import { deliverymanRequest } from '~/store/modules/deliveryman/actions';
import { Container } from './styles';

export default function DeliverymenForm() {
  // const { id } = match.params;
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
      console.log(data);
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
        <Header content="Cadastro de entregadores" />

        <AvatarInput name="avatar_id" />

        <Input
          name="name"
          label="Nome"
          placeholder="Digite o nome do entregador"
        />
        <Input name="email" label="E-mail" placeholder="example@teste.com" />
      </Form>
    </Container>
  );
}
