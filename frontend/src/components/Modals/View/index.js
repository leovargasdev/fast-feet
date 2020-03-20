import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { Container, GroupInfo, Signature } from './styles';
import Assinatura from '~/assets/assinatura.png';
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

export default function ModalView({ setIsOpen, isOpen, info }) {

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
      <Container>
        {info.type === 'delivery' && (
        <>
          <GroupInfo>
            <h3>Informações da Encomenda</h3>
            <p>{info.recipient.street}, {info.recipient.number}</p>
            <p>{info.recipient.city} - {info.recipient.state}</p>
            <p>{info.recipient.cep}</p>
          </GroupInfo>
          <GroupInfo>
            <h3>Datas</h3>
            <p><strong>Retirada:</strong>{info.start_date}</p>
            <p><strong>Entrega:</strong>{info.end_date}</p>
            </GroupInfo>
          <GroupInfo>
            <h3>Assinatura do destinatário</h3>
            <Signature>
              <img src={Assinatura} />
            </Signature>
          </GroupInfo>
        </>
        )}
        {info.type === 'deliveryProblem' && (
        <>
          <h1>opa</h1>
        </>
        )}
      </Container>
    </Modal>
  );
}

ModalView.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.object.isRequired,
  delivery: PropTypes.object.isRequired,
};
