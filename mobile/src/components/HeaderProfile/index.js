import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Profile, Avatar, Info, Welcome, Name} from './styles';
import {signOut} from '~/store/modules/auth/actions';

export default function HeaderProfile() {
  const {avatar, name} = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const uri = useMemo(
    () =>
      avatar ? avatar.url : `https://api.adorable.io/avatars/60/${name}.png`,
    [avatar, name],
  );

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Profile>
        <Avatar source={{uri}} />
        <Info>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{name}</Name>
        </Info>
      </Profile>
      <TouchableOpacity onPress={handleLogout}>
        <Icon name="exit-to-app" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
