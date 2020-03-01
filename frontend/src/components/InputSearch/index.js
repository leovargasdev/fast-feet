import React from 'react';
import PropsTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container, Search } from './styles';

export default function InputSearch({ placeholder }) {
  return (
    <Container>
      <MdSearch size={24} />
      <Search placeholder={placeholder} />
    </Container>
  );
}

InputSearch.PropsTypes = {
  placeholder: PropsTypes.string,
};
