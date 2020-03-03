import React from 'react';
import { MdDelete, MdEdit, MdVisibility } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Container, Actions, Action } from './styles';

export default function ActionDrop({
  onClick,
  visible,
  actions,
  positionLeft,
}) {
  return (
    <Container>
      <button type="button" onClick={onClick}>
        ...
      </button>
      <Actions visible={visible} left={`${positionLeft}%`}>
        {actions.view && (
          <Action to={actions.view}>
            <MdVisibility size={16} color="#8E5BE8" />
            <p>Visualizar</p>
          </Action>
        )}
        {actions.edit && (
          <Action to={actions.edit}>
            <MdEdit size={16} color="#4D85EE" />
            <p>Editar</p>
          </Action>
        )}
        {actions.del && (
          <Action to={actions.del}>
            <MdDelete size={16} color="#DE3B3B" />
            <p>Excluir</p>
          </Action>
        )}
      </Actions>
    </Container>
  );
}

ActionDrop.propTypes = {
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  actions: PropTypes.objectOf.isRequired,
  positionLeft: PropTypes.number.isRequired,
};
