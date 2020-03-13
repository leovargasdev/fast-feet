import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import { Item, List } from '~/components/ListItens/styles';
import ActionsDrop from '~/components/Form/ActionsDrop';

import { Container, Avatar } from './styles';
import api from '~/services/api';

export default function DeliverymenList() {
  const [actionsDisplay, setActionsDisplay] = useState({});
  const [deliverymen, setDeliverymen] = useState([]);
  const [searchDeliveryman, setSearchDeliveryman] = useState('');

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`/deliverymen?name=${searchDeliveryman}`);
      setDeliverymen(response.data);
    }

    loadDeliveries();
  }, [searchDeliveryman]);

  return (
    <Container>
      <Title content="Gerenciando Entregadores" />
      <BuscarCadastro
        placeholder="Buscar por entregador"
        onChange={e => setSearchDeliveryman(e.target.value)}
        linkBtn="/deliveryman/new"
      />

      <List>
        <Item>
          <strong>ID</strong>
          <strong>Foto</strong>
          <strong>Nome</strong>
          <strong>Email</strong>
          <strong style={{ textAlign: 'right' }}>Ações</strong>
        </Item>
        {deliverymen.map(del => (
          <Item key={del.id}>
            <span>#{del.id}</span>
            <Avatar src={del.avatar.url} />
            <span>{del.name}</span>
            <span>{del.email}</span>
            <ActionsDrop
              onClick={() =>
                setActionsDisplay({
                  ...actionsDisplay,
                  [del.id]: !actionsDisplay[del.id],
                })
              }
              visible={!!actionsDisplay[del.id]}
              actions={{
                del: `/link`,
                edit: `/deliveryman/${del.id}/edit`,
              }}
              positionLeft={65}
            />
          </Item>
        ))}
      </List>
    </Container>
  );
}
