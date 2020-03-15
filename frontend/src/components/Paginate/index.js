import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from './styles';

export default function Paginate({ setPage, page }) {
  function handlePagePrevious() {
    if (page > 1) setPage(page - 1);
  }

  function handlePageNext() {
    setPage(page + 1);
  }
  // IMPLEMENTAR o disabled no btn Anterior quando estiver na página 1
  return (
    <Container>
      <button type="button" onClick={handlePagePrevious}>
        <MdKeyboardArrowLeft size={25} />
        Anterior
      </button>
      <button type="button" onClick={handlePageNext}>
        Próxima
        <MdKeyboardArrowRight size={25} />
      </button>
    </Container>
  );
}

Paginate.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
