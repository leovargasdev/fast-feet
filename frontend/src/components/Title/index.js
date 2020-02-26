import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Title({ content }) {
  return (
    <Container>
      <span>{content}</span>
    </Container>
  );
}

Title.propTypes = {
  content: PropTypes.string.isRequired,
};
