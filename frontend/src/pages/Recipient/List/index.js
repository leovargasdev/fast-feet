import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import { Item, List } from '~/components/ListItens/styles';
import ActionsDrop from '~/components/Form/ActionsDrop';
import { Container } from './styles';
import api from '~/services/api';

export default function RecipientList() {
  const [actionsDisplay, setActionsDisplay] = useState({});
  const [recipients, setRecipients] = useState([]);
  const [searchRecipient, setSearchRecipient] = useState('');

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`/recipients?name=${searchRecipient}`);
      setRecipients(response.data);
    }

    loadDeliveries();
  }, [searchRecipient]);

  return (
    <Container>
      <Title content="Gerenciando Destinatários" />
      <BuscarCadastro
        placeholder="Buscar por destinatário"
        onChange={e => setSearchRecipient(e.target.value)}
      />
      <List>
        <Item>
          <strong>ID</strong>
          <strong>Nome</strong>
          <strong>Endereço</strong>
          <strong style={{ textAlign: 'right' }}>Ações</strong>
        </Item>
        {recipients.map(recipient => (
          <Item key={recipient.id}>
            <span>#{recipient.id}</span>
            <span>{recipient.name}</span>
            <span>{recipient.adress}</span>
            <ActionsDrop
              onClick={() =>
                setActionsDisplay({
                  ...actionsDisplay,
                  [recipient.id]: !actionsDisplay[recipient.id],
                })
              }
              visible={!!actionsDisplay[recipient.id]}
              actions={{
                del: `/link`,
                edit: `/link`,
              }}
              positionLeft={59}
            />
          </Item>
        ))}
      </List>
    </Container>
  );
}
