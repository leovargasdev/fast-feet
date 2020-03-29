import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
  const deliveryman = useSelector(state => state.user.profile);
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
              uri: deliveryman.avatar
                ? deliveryman.avatar.url
                : `https://api.adorable.io/avatars/60/${deliveryman.id}.png`,
            }}
          />
          <Info>
            <Welcome>Bem vindo de volta,</Welcome>
            <Name>{deliveryman.name}</Name>
          </Info>
        </Profile>
        <TouchableOpacity onPress={handleLogout}>
          <Icon name="exit-to-app" size={20} color="#f64c75" />
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
