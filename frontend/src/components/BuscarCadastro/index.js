import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import InputSearch from '~/components/InputSearch';
import { Container } from './styles';

export default function BuscarCadastro() {
  return (
    <Container>
      <InputSearch placeholder="Buscar por encomendas" />
      <Link to="/">
        <MdAdd size={18} color="#FFF" />
        cadastrar
      </Link>
    </Container>
  );
}
