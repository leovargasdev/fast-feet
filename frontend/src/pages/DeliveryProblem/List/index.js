import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import BoxEmpty from '~/components/BoxEmpty';
import { Item, List } from '~/components/ListItens/styles';
import ActionsDrop from '~/components/Form/ActionsDrop';

import api from '~/services/api';
import { Container, ProblemDescription, Canceled } from './styles';

export default function DeliveryProblemList() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);
  const [reloadList, setReloadList] = useState(false);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('/delivery-problems');
      setDeliveryProblems(response.data);
    }

    loadDeliveryProblems();
  }, [reloadList]);

  return (
    <Container>
      <Title content="Problemas na entrega" />

      {deliveryProblems.length > 0 ? (
        <List>
          <Item>
            <strong>Encomenda</strong>
            <strong>Problema</strong>
            <strong style={{ textAlign: 'right' }}>Ações</strong>
          </Item>
          {deliveryProblems.map(delProblem => (
            <Item key={delProblem.id}>
              <span>
                #{delProblem.delivery.id}
                {delProblem.delivery.canceled_at && (
                  <Canceled>CANCELADA</Canceled>
                )}
              </span>
              <ProblemDescription>{delProblem.description}</ProblemDescription>
              <ActionsDrop
                setReloadList={setReloadList}
                actions={{
                  view: {
                    url: `/problem/${delProblem.id}/view`,
                    type: 'deliveryProblem',
                  },
                  cancel: {
                    disabled: !!delProblem.delivery.canceled_at,
                    url: `/problem/${delProblem.id}/cancel-delivery`,
                    type: 'Problema',
                  },
                }}
              />
            </Item>
          ))}
        </List>
      ) : (
        <BoxEmpty content="Sem nenhum problema registrado" />
      )}
    </Container>
  );
}
