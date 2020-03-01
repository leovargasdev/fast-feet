import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import { Item, List } from '~/components/ListItens/styles';
import { Container } from './styles';
import api from '~/services/api';

export default function DeliveryList() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/deliveries');

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  return (
    <Container>
      <Title content="Gerenciando Encomendas" />

      <BuscarCadastro />

      <List>
        <Item>
          <strong>ID</strong>
          <strong>Destinatário</strong>
          <strong>Entregador</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </Item>
        {deliveries.map(del => (
          <Item key={del.id}>
            <span>{del.id}</span>
            <span>{del.recipient.name}</span>
            <span>{del.deliverymen.name}</span>
            <span>{del.recipient.city}</span>
            <span>{del.recipient.state}</span>
            <span>PENDENTE</span>
            <span>...</span>
          </Item>
        ))}
      </List>
    </Container>
  );
}
