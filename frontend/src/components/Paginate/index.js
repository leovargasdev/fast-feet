import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, BtnControlPage } from './styles';

export default function Paginate({ setPage, page, sizeItens }) {
  function handleNewPage(modifier) {
    if ((modifier === -1 && page > 0) || sizeItens) {
      setPage(page + modifier);
    }
  }

  return (
    <Container>
      <BtnControlPage onClick={() => handleNewPage(-1)} disabled={page === 1}>
        <MdKeyboardArrowLeft size={25} />
        Anterior
      </BtnControlPage>
      <BtnControlPage
        onClick={() => handleNewPage(1)}
        disabled={sizeItens !== 10}
      >
        Próxima
        <MdKeyboardArrowRight size={25} />
      </BtnControlPage>
    </Container>
  );
}

Paginate.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  sizeItens: PropTypes.number.isRequired,
};
