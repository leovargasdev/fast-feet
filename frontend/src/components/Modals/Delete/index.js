import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { ContentModal, BtnYes, BtnNo } from './styles';

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

export default function ModalDelete({ setIsOpen, handleDelete, isOpen }) {
  function closeModal() {
    setIsOpen({ ...isOpen, del: false });
  }

  return (
    <Modal
      isOpen={isOpen.del}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Remover Encomenda"
    >
      <ContentModal>
        <h2>Você realmente deseja remover esta Encomenda??</h2>
        <BtnYes type="button" onClick={handleDelete}>
          Sim
        </BtnYes>
        <BtnNo type="button" onClick={closeModal}>
          Não
        </BtnNo>
      </ContentModal>
    </Modal>
  );
}

ModalDelete.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isOpen: PropTypes.object.isRequired,
};
