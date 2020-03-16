import React from 'react';
import { MdDelete, MdEdit, MdVisibility } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Actions, Action } from './styles';

export default function ActionDrop({ onClick, visible, actions }) {
  function handleModalView() {
    console.log('view', actions.view);
  }
  function handleModalDelete() {
    console.log('delete', actions.del);
  }

  return (
    <Container>
      <button type="button" onClick={onClick}>
        ...
      </button>
      <Actions visible={visible}>
        {actions.view && (
          <Action>
            <button type="button" onClick={handleModalView}>
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
            <button type="button" onClick={handleModalDelete}>
              <MdDelete size={16} color="#DE3B3B" />
              <p>Excluir</p>
            </button>
          </Action>
        )}
      </Actions>
    </Container>
  );
}

ActionDrop.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};
