import React from 'react';
import PropsTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import { Container, Search } from './styles';
// rest {  placeholder, onChange }
export default function InputSearch({ ...rest }) {
  return (
    <Container>
      <MdSearch size={24} />
      <Search {...rest} />
    </Container>
  );
}

InputSearch.propTypes = {
  placeholder: PropsTypes.string.isRequired,
};
