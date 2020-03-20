import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import ActionsDrop from '~/components/Form/ActionsDrop';
import { Item, List } from '~/components/ListItens/styles';
import { Container } from './styles';
import api from '~/services/api';

export default function DeliveryProblemList() {
  const [actionsDisplay, setActionsDisplay] = useState({});
  const [deliveryProblems, setDeliveryProblems] = useState([]);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('/delivery-problems');
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
          <strong style={{ textAlign: 'right' }}>Ações</strong>
        </Item>
        {deliveryProblems.map(delProblem => (
          <Item key={delProblem.id}>
            <span>#{delProblem.id}</span>
            <span>{delProblem.description}</span>
            <ActionsDrop
              onClick={() =>
                setActionsDisplay({
                  ...actionsDisplay,
                  [delProblem.id]: !actionsDisplay[delProblem.id],
                })
              }
              visible={!!actionsDisplay[delProblem.id]}
              actions={{
                view: `/problem/${delProblem.id}/view`,
                del: `/link`,
              }}
            />
          </Item>
        ))}
      </List>
    </Container>
  );
}
