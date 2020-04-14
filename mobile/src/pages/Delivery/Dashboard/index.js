import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

import Delivery from '~/components/Delivery';
import HeaderProfile from '~/components/HeaderProfile';
import api from '~/services/api';

import {
  Container,
  Content,
  HeaderContent,
  Title,
  Menu,
  ItemMenu,
  ItemMenuText,
  Deliveries,
  WarningListDeliveries,
} from './styles';

export default function Dashboard() {
  const isFocused = useIsFocused();
  // Deliveryman ID
  const {id} = useSelector(state => state.user.profile);

  const [deliveries, setDeliveries] = useState([]);
  const [deliveriesPending, setDeliveriesPending] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#FFF');
    }, []),
  );

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(
        `/deliveryman/${id}/deliveries?pending=${deliveriesPending}`,
      );
      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [isFocused, deliveriesPending, id]);

  return (
    <Container>
      <HeaderProfile />

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
          ListEmptyComponent={
            <WarningListDeliveries>
              Não há nenhuma encomenda
              {deliveriesPending ? ' pendende' : ' para ser entregue'}!
            </WarningListDeliveries>
          }
        />
      </Content>
    </Container>
  );
}
