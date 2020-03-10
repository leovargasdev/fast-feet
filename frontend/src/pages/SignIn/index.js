import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import Input from '~/components/Form/Input';
import logo from '~/assets/logo.png';
import { BtnLogin } from './styles';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  // data: {email, password}
  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(signInRequest(data));
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
    <>
      <img src={logo} alt="Fast Feet" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          label="SEU E-MAIL"
          name="email"
          type="text"
          placeholder="exemplo@email.com"
        />

        <Input
          label="SUA SENHA"
          name="password"
          type="password"
          placeholder="***********"
        />

        <BtnLogin type="submit">
          {loading ? 'Carregando...' : 'Entrar no Sistema'}
        </BtnLogin>
        <Link to="/register">Criar conta</Link>
      </Form>
    </>
  );
}
