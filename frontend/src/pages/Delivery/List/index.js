import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import Paginate from '~/components/Paginate';
import ActionsDrop from '~/components/Form/ActionsDrop';
import BuscarCadastro from '~/components/BuscarCadastro';
import BoxEmpty from '~/components/BoxEmpty';
import { Item, List } from '~/components/ListItens/styles';

import { Container, Status, Deliveryman } from './styles';
import api from '~/services/api';

export default function DeliveryList() {
  const [deliveries, setDeliveries] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');
  const [page, setPage] = useState(1);
  const [reloadList, setReloadList] = useState(false);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(
        `/deliveries?product=${searchProduct}&page=${page}`
      );
      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [searchProduct, page, reloadList]);

  return (
    <Container>
      <Title content="Gerenciando Encomendas" />

      <BuscarCadastro
        placeholder="Buscar por encomendas"
        onChange={e => setSearchProduct(e.target.value)}
        linkBtn="/delivery/new"
      />
      {deliveries.length > 0 ? (
        <List>
          <Item>
            <strong>ID</strong>
            <strong>Destinatário</strong>
            <strong>Entregador</strong>
            <strong>Cidade</strong>
            <strong>Estado</strong>
            <strong>Status</strong>
            <strong style={{ textAlign: 'right' }}>Ações</strong>
          </Item>
          {deliveries.map(delivery => (
            <Item key={delivery.id}>
              <span>#{delivery.id}</span>
              <span>{delivery.recipient.name}</span>
              <Deliveryman>
                <img
                  src={
                    delivery.deliveryman.avatar
                      ? delivery.deliveryman.avatar.url
                      : `https://api.adorable.io/avatars/50/${delivery.deliveryman.name}.png`
                  }
                  alt={`Avatar ${delivery.deliveryman.name}`}
                />
                <span>{delivery.deliveryman.name}</span>
              </Deliveryman>
              <span>{delivery.recipient.city}</span>
              <span>{delivery.recipient.state}</span>
              <Status color={delivery.status}>
                <span>{delivery.status}</span>
              </Status>
              <ActionsDrop
                setReloadList={setReloadList}
                actions={{
                  del: { url: `/delivery/${delivery.id}`, type: 'Encomenda' },
                  edit: `/delivery/${delivery.id}/edit`,
                  view: {
                    url: `/delivery/${delivery.id}/view`,
                    type: 'delivery',
                  },
                }}
              />
            </Item>
          ))}
        </List>
      ) : (
        <BoxEmpty content="Lista de encomendas vazia" />
      )}
      <Paginate page={page} setPage={setPage} sizeItens={deliveries.length} />
    </Container>
  );
}
