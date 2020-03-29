import React, {useState} from 'react';
import {Image} from 'react-native';
import {useDispatch} from 'react-redux';
import logo from '~/assets/logo.svg';

import {signInSuccess} from '~/store/modules/auth/actions';
import {Container, Content, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [idDeliveryman, setIdDeliveryman] = useState('');

  function handleSubmit() {
    dispatch(signInSuccess());
  }

  return (
    <Container>
      <Content>
        <Image source={logo} color="#fff" />
        <Form>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            value={idDeliveryman}
            onChangeText={setIdDeliveryman}
          />
          <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
