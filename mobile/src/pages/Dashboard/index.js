import React from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {signOut} from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Profile,
  Avatar,
  Info,
  Welcome,
  Name,
} from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Profile>
          <Avatar
            source={{
              uri: `https://api.adorable.io/avatars/50/fastfeet.png`,
            }}
          />
          <Info>
            <Welcome>Bem vindo de volta,</Welcome>
            <Name>Gaspar Antunes</Name>
          </Info>
        </Profile>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="exit-to-app" size={20} color="#f64c75" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
