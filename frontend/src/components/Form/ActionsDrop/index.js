import React, { useState } from 'react';
import { MdDelete, MdEdit, MdVisibility } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Actions, Action } from './styles';
import ModalDelete from '~/components/Modals/Delete';
import ModalView from '~/components/Modals/View';
import api from '~/services/api';

export default function ActionDrop({
  setReloadList,
  onClick,
  visible,
  actions,
}) {
  const [infoModalView, setInfoModalView] = useState({});
  const [modalIsOpen, setIsOpen] = useState({ view: false, del: false });

  async function handleModalDelete() {
    const { url, type } = actions.del;
    await api.delete(url);
    setReloadList(true);
    setIsOpen(false);
    toast.info(`${type} excluida!`);
  }

  async function handleModalView() {
    setIsOpen({ ...modalIsOpen, view: true });
    const response = await api.get(actions.view);
    setInfoModalView(response.data);
  }

  return (
    <Container>
      <button type="button" onClick={onClick}>
        ...
      </button>
      <Actions visible={visible}>
        {actions.view && (
          <Action>
            <button
              type="button"
              onClick={handleModalView}
            >
              <MdVisibility size={16} color="#8E5BE8" />
              <p>Visualizar</p>
            </button>
          </Action>
        )}
        {actions.edit && (
          <Action>
            <Link to={actions.edit}>
              <MdEdit size={16} color="#4D85EE" />
              <p>Editar</p>
            </Link>
          </Action>
        )}
        {actions.del && (
          <Action>
            <button
              type="button"
              onClick={() => setIsOpen({ ...modalIsOpen, del: true })}
            >
              <MdDelete size={16} color="#DE3B3B" />
              <p>Excluir</p>
            </button>
          </Action>
        )}
      </Actions>
      <ModalDelete
        isOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleModalDelete}
      />
      <ModalView isOpen={modalIsOpen} setIsOpen={setIsOpen} info={infoModalView}/>
    </Container>
  );
}

ActionDrop.propTypes = {
  setReloadList: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};
