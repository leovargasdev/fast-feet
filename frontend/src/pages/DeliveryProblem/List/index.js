import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import ActionsDrop from '~/components/Form/ActionsDrop';
import { Item, List } from '~/components/ListItens/styles';
import { Container, ProblemDescription } from './styles';
import api from '~/services/api';

export default function DeliveryProblemList() {
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
            <ProblemDescription>{delProblem.description}</ProblemDescription>
            <ActionsDrop
              actions={{
                view: {
                  url: `/problem/${delProblem.id}/view`,
                  type: 'deliveryProblem',
                },
                del: `/link`,
              }}
            />
          </Item>
        ))}
      </List>
    </Container>
  );
}
