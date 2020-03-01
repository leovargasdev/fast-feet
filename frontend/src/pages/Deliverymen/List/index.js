import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import { Item, List } from '~/components/ListItens/styles';

import { Container, Avatar, ActionsContainer, Actions, Action } from './styles';
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
      />

      <List>
        <Item>
          <strong>ID</strong>
          <strong>Foto</strong>
          <strong>Nome</strong>
          <strong>Email</strong>
          <ActionsContainer>Ações</ActionsContainer>
        </Item>
        {deliverymen.map(del => (
          <Item key={del.id}>
            <span>{del.id}</span>
            <Avatar src={del.avatar.url} />
            <span>{del.name}</span>
            <span>{del.email}</span>
            <ActionsContainer>
              <button
                type="button"
                onClick={() =>
                  setActionsDisplay({
                    ...actionsDisplay,
                    [del.id]: !actionsDisplay[del.id],
                  })
                }
              >
                ...
              </button>
              <Actions visible={actionsDisplay[del.id]}>
                <Action>
                  <MdEdit size={16} color="#4D85EE" />
                  <p>Editar</p>
                </Action>
                <Action>
                  <MdDelete size={16} color="#DE3B3B" />
                  <p>Excluir</p>
                </Action>
              </Actions>
            </ActionsContainer>
          </Item>
        ))}
      </List>
    </Container>
  );
}
