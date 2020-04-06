import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function BoxEmpty({ content }) {
  return (
    <Container>
      <span>{content}</span>
    </Container>
  );
}

BoxEmpty.propTypes = {
  content: PropTypes.string.isRequired,
};
