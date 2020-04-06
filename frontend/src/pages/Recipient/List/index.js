import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import BoxEmpty from '~/components/BoxEmpty';
import { Item, List } from '~/components/ListItens/styles';
import ActionsDrop from '~/components/Form/ActionsDrop';
import Paginate from '~/components/Paginate';

import { Container } from './styles';
import api from '~/services/api';

export default function RecipientList() {
  const [recipients, setRecipients] = useState([]);
  const [searchRecipient, setSearchRecipient] = useState('');
  const [page, setPage] = useState(1);
  const [reloadList, setReloadList] = useState(false);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(
        `/recipients?name=${searchRecipient}&page=${page}`
      );
      setRecipients(response.data);
    }

    loadDeliveries();
  }, [searchRecipient, reloadList, page]);

  return (
    <Container>
      <Title content="Gerenciando Destinatários" />
      <BuscarCadastro
        placeholder="Buscar por destinatário"
        onChange={e => setSearchRecipient(e.target.value)}
        linkBtn="/recipient/new"
      />
      {recipients.length > 0 ? (
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
                setReloadList={setReloadList}
                actions={{
                  del: {
                    url: `/recipient/${recipient.id}`,
                    type: 'Destinatário',
                  },
                  edit: `/recipient/${recipient.id}/edit`,
                }}
              />
            </Item>
          ))}
        </List>
      ) : (
        <BoxEmpty content="Lista de destinatários está vazia" />
      )}
      <Paginate page={page} setPage={setPage} sizeItens={recipients.length} />
    </Container>
  );
}
