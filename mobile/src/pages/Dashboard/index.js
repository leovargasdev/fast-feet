import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
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
  Title,
  Deliveries,
} from './styles';

export default function Dashboard() {
  const deliveryman = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveryman-deliveries');

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

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
        <Title>Entregas</Title>

        <Deliveries
          data={deliveries}
          keyExtractor={delivery => String(delivery)}
          renderItem={delivery => <Delivery data={delivery} />}
        />
      </Content>
    </Container>
  );
}
