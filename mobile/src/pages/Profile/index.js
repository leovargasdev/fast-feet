import React from 'react';
import {useDispatch} from 'react-redux';

import {signOut} from '~/store/modules/auth/actions';
import {Container, Content, Avatar, Label, Info, BtnLogout} from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Avatar
          source={{
            uri: `https://api.adorable.io/avatars/50/fastfeet.png`,
          }}
        />

        <Label>Nome completo</Label>
        <Info>Gaspar Antunes</Info>

        <Label>Email</Label>
        <Info>example@rocketseat.com.br</Info>

        <Label>Data de cadastro</Label>
        <Info>10/01/2020</Info>

        <BtnLogout onPress={handleLogout}>Sair do Sistema</BtnLogout>
      </Content>
    </Container>
  );
}
