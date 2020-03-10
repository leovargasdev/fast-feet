import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';

import InputSearch from '~/components/InputSearch';
import { Container } from './styles';
// rest {  placeholder, onChange }
export default function BuscarCadastro({ linkBtn, ...rest }) {
  return (
    <Container>
      <InputSearch {...rest} />
      <Link to={linkBtn}>
        <MdAdd size={18} color="#FFF" />
        cadastrar
      </Link>
    </Container>
  );
}

BuscarCadastro.propTypes = {
  linkBtn: PropTypes.string.isRequired,
};
