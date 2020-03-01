import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit, MdVisibility } from 'react-icons/md';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import { Item, List } from '~/components/ListItens/styles';
import { Container, Status, ActionsContainer, Actions, Action } from './styles';
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
      />

      <List>
        <Item>
          <strong>ID</strong>
          <strong>Destinatário</strong>
          <strong>Entregador</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <ActionsContainer>Ações</ActionsContainer>
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
                  <MdVisibility size={16} color="#8E5BE8" />
                  <p>Visualizar</p>
                </Action>
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
