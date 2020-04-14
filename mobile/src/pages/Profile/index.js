import pt from 'date-fns/locale/pt';
import React, {useMemo} from 'react';
import {StatusBar} from 'react-native';
import {format, parseISO} from 'date-fns';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {signOut} from '~/store/modules/auth/actions';
import {Container, Content, Avatar, Label, Info, BtnLogout} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const {avatar, name, email, createdAt} = useSelector(
    state => state.user.profile,
  );

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#FFF');
    }, []),
  );

  const dateFormatted = useMemo(
    () =>
      format(parseISO(createdAt), "d 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    [createdAt],
  );

  const uri = useMemo(
    () =>
      avatar ? avatar.url : `https://api.adorable.io/avatars/150/${name}.png`,
    [avatar, name],
  );

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Avatar source={{uri}} />

        <Label>Nome completo</Label>
        <Info>{name}</Info>

        <Label>Email</Label>
        <Info>{email}</Info>

        <Label>Data de cadastro</Label>
        <Info>{dateFormatted}</Info>

        <BtnLogout onPress={handleLogout}>Sair do Sistema</BtnLogout>
      </Content>
    </Container>
  );
}
