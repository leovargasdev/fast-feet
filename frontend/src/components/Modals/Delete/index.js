import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { ContentModal, ContainerBtns, BtnYes, BtnNo } from './styles';

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

const messageContent = {
  Encomenda: 'remover esta encomenda',
  Entregador: 'remover este entregador',
  Destinatario: 'remover este destinatário',
  Problema: 'cancelar esta encomenda',
};

export default function ModalDelete({ type, setIsOpen, handleDelete, isOpen }) {
  function closeModal() {
    setIsOpen({ view: false, del: false });
  }

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Remover Encomenda"
    >
      <ContentModal>
        <h2>Você deseja {messageContent[type]}?</h2>
        <ContainerBtns>
          <BtnYes type="button" onClick={handleDelete}>
            Sim
          </BtnYes>
          <BtnNo type="button" onClick={closeModal}>
            Não
          </BtnNo>
        </ContainerBtns>
      </ContentModal>
    </Modal>
  );
}

ModalDelete.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  type: PropTypes.string,
};
