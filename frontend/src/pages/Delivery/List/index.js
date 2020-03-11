import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import { Item, List } from '~/components/ListItens/styles';
import { Container, Status } from './styles';
import ActionsDrop from '~/components/Form/ActionsDrop';
import api from '~/services/api';

export default function DeliveryList() {
  const [actionsDisplay, setActionsDisplay] = useState({});
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
        linkBtn="/delivery/new"
      />

      <List>
        <Item>
          <strong>ID</strong>
          <strong>Destinatário</strong>
          <strong>Entregador</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <strong style={{ textAlign: 'right' }}>Ações</strong>
        </Item>
        {deliveries.map(del => (
          <Item key={del.id}>
            <span>{del.id}</span>
            <span>{del.recipient.name}</span>
            <span>{del.deliveryman.name}</span>
            <span>{del.recipient.city}</span>
            <span>{del.recipient.state}</span>
            <Status color={del.status}>
              <span>{del.status}</span>
            </Status>
            <ActionsDrop
              onClick={() =>
                setActionsDisplay({
                  ...actionsDisplay,
                  [del.id]: !actionsDisplay[del.id],
                })
              }
              visible={!!actionsDisplay[del.id]}
              actions={{
                del: `http://localhost:3000/deliveries`,
                edit: `/delivery/${del.id}/edit`,
                view: `/deliverymen`,
              }}
              positionLeft={42}
            />
          </Item>
        ))}
      </List>
    </Container>
  );
}
