import React, {useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import logo from '~/assets/logo.png';

import {signInRequest} from '~/store/modules/auth/actions';
import {Container, Content, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [idDeliveryman, setIdDeliveryman] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest({id: idDeliveryman}));
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
            onSubmitEditing={handleSubmit}
            value={idDeliveryman}
            onChangeText={setIdDeliveryman}
          />
          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
}
