import React from 'react';
import Modal from 'react-modal';

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

export default function ModalDelete({ ...rest }) {
  return (
    <Modal {...rest} style={customStyles} contentLabel="Remover Encomenda">
      <ContentModal>
        <h2>Você realmente deseja remover esta Encomenda??</h2>
        <BtnYes type="button">Sim</BtnYes>
        <BtnNo type="button">Não</BtnNo>
      </ContentModal>
    </Modal>
  );
}
