import {Image} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {useDispatch, useSelector} from 'react-redux';

import logo from '~/assets/logo.png';
import {signInRequest} from '~/store/modules/auth/actions';
import {Container, Content, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();

  const [idDeliveryman, setIdDeliveryman] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    try {
      dispatch(signInRequest({id: idDeliveryman}));
    } catch (error) {
      Snackbar.show({
        text: 'Falha ao efetuar o login!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#e50000',
      });
    }
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
            keyboardType="number-pad"
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
