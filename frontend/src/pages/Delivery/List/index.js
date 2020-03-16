import React, { useEffect, useState } from 'react';

import Title from '~/components/Title';
import BuscarCadastro from '~/components/BuscarCadastro';
import Paginate from '~/components/Paginate';
import { Item, List } from '~/components/ListItens/styles';
import { Container, Status, Deliveryman } from './styles';
import ActionsDrop from '~/components/Form/ActionsDrop';
import api from '~/services/api';

export default function DeliveryList() {
  const [actionsDisplay, setActionsDisplay] = useState({});
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
      setActionsDisplay({});
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
                src={delivery.deliveryman.avatar.url}
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
              onClick={() =>
                setActionsDisplay({
                  ...actionsDisplay,
                  [delivery.id]: !actionsDisplay[delivery.id],
                })
              }
              visible={!!actionsDisplay[delivery.id]}
              actions={{
                del: { url: `/delivery/${delivery.id}`, type: 'Encomenda' },
                edit: `/delivery/${delivery.id}/edit`,
                view: delivery.id,
              }}
              positionLeft={42}
            />
          </Item>
        ))}
      </List>
      <Paginate page={page} setPage={setPage} />
    </Container>
  );
}
