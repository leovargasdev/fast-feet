import React, { useEffect, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import { Item, List } from '~/components/ListItens/styles';

import { Container, Avatar, ActionsContainer, Actions, Action } from './styles';
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
          <ActionsContainer>Ações</ActionsContainer>
        </Item>
        {recipients.map(recipient => (
          <Item key={recipient.id}>
            <span>#{recipient.id}</span>
            <span>{recipient.name}</span>
            <span>{recipient.adress}</span>
            <ActionsContainer>
              <button
                type="button"
                onClick={() =>
                  setActionsDisplay({
                    ...actionsDisplay,
                    [recipient.id]: !actionsDisplay[recipient.id],
                  })
                }
              >
                ...
              </button>
              <Actions visible={actionsDisplay[recipient.id]}>
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
