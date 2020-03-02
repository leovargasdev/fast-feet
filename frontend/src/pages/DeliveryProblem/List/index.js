import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

import Title from '~/components/Title';
import { Item, List } from '~/components/ListItens/styles';

import { Container, ActionsContainer, Actions, Action } from './styles';
import api from '~/services/api';

export default function DeliveryProblemList() {
  const [actionsDisplay, setActionsDisplay] = useState({});
  const [deliveryProblems, setDeliveryProblems] = useState([]);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('/delivery/problems');
      setDeliveryProblems(response.data);
    }

    loadDeliveryProblems();
  }, []);

  return (
    <Container>
      <Title content="Problemas na entrega" />
      <List>
        <Item>
          <strong>Encomenda</strong>
          <strong>Problema</strong>
          <ActionsContainer>Ações</ActionsContainer>
        </Item>
        {deliveryProblems.map(delProblem => (
          <Item key={delProblem.id}>
            <span>#{delProblem.id}</span>
            <span>{delProblem.description}</span>
            <ActionsContainer>
              <button
                type="button"
                onClick={() =>
                  setActionsDisplay({
                    ...actionsDisplay,
                    [delProblem.id]: !actionsDisplay[delProblem.id],
                  })
                }
              >
                ...
              </button>
              <Actions visible={actionsDisplay[delProblem.id]}>
                <Action>
                  <MdEdit size={16} color="#4D85EE" />
                  <p>Visualizar</p>
                </Action>
                <Action>
                  <MdDelete size={16} color="#DE3B3B" />
                  <p>Cancelar Encomenda</p>
                </Action>
              </Actions>
            </ActionsContainer>
          </Item>
        ))}
      </List>
    </Container>
  );
}
