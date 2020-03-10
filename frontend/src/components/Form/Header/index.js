import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import Title from '~/components/Title';
import { Container, Btns } from './styles';

export default function Header({ content }) {
  return (
    <Container>
      <Title content={content} />
      <Btns>
        <Link to="/link" disabled>
          <MdKeyboardArrowLeft size={14} color="#FFF" />
          VOLTAR
        </Link>
        <Link to="/Link">
          <MdCheck size={14} color="#FFF" />
          SALVAR
        </Link>
      </Btns>
    </Container>
  );
}

Header.propTypes = {
  content: PropTypes.string.isRequired,
};
