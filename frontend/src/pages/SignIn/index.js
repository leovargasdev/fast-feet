import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';
import Input from '~/components/Form/Input';
import logo from '~/assets/logo.png';
import { BtnLogin } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    // console.tron.log(email, password);
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Fast Feet" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          label="Seu E-mail"
          name="email"
          type="email"
          placeholder="exemplo@email.com"
        />

        <Input
          label="Sua Senha"
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
