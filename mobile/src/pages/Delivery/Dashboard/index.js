import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity, StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Delivery from '~/components/Delivery';
import {signOut} from '~/store/modules/auth/actions';
import api from '~/services/api';

import {
  Container,
  Header,
  Profile,
  Avatar,
  Info,
  Welcome,
  Name,
  Content,
  HeaderContent,
  Title,
  Menu,
  ItemMenu,
  ItemMenuText,
  Deliveries,
} from './styles';

export default function Dashboard() {
  const deliveryman = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const [deliveries, setDeliveries] = useState([]);
  const [deliveriesPending, setDeliveriesPending] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#7d40e7');
    }, []),
  );

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(
        `/deliveryman/${deliveryman.id}/deliveries?pending=${deliveriesPending}`,
      );
      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [deliveriesPending]);

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
      <Content>
        <HeaderContent>
          <Title>Entregas</Title>
          <Menu>
            <ItemMenu onPress={() => setDeliveriesPending(!deliveriesPending)}>
              <ItemMenuText selected={deliveriesPending}>
                Pendentes
              </ItemMenuText>
            </ItemMenu>
            <ItemMenu onPress={() => setDeliveriesPending(!deliveriesPending)}>
              <ItemMenuText selected={!deliveriesPending}>
                Entregues
              </ItemMenuText>
            </ItemMenu>
          </Menu>
        </HeaderContent>

        <Deliveries
          data={deliveries}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Delivery data={item} />}
        />
      </Content>
    </Container>
  );
}
