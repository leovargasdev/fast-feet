import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import InputSearch from '~/components/InputSearch';
import { Container } from './styles';
// rest {  placeholder, onChange }
export default function BuscarCadastro({ ...rest }) {
  return (
    <Container>
      <InputSearch {...rest} />
      <Link to="/">
        <MdAdd size={18} color="#FFF" />
        cadastrar
      </Link>
    </Container>
  );
}
