import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { ContentModal } from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ModalView({ setIsOpen, isOpen }) {
  function closeModal() {
    setIsOpen({ ...isOpen, view: false });
  }

  return (
    <Modal
      isOpen={isOpen.view}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Informações Encomenda"
    >
      <ContentModal>
        <h2>Meu teste</h2>
      </ContentModal>
    </Modal>
  );
}

ModalView.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.object.isRequired,
};
