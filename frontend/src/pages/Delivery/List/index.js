import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import { Item, List } from '~/components/ListItens/styles';
import { Container, Status } from './styles';
import api from '~/services/api';

export default function DeliveryList() {
  const [deliveries, setDeliveries] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`/deliveries?product=${searchProduct}`);

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [searchProduct]);

  return (
    <Container>
      <Title content="Gerenciando Encomendas" />

      <BuscarCadastro
        placeholder="Buscar por encomendas"
        onChange={e => setSearchProduct(e.target.value)}
      />

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
            <Status color={del.status}>
              <span>{del.status}</span>
            </Status>
            <span>...</span>
          </Item>
        ))}
      </List>
    </Container>
  );
}
