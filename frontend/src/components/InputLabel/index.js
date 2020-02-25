import React from 'react';
import { Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function InputLabel({ ...rest }) {
  return (
    <Container>
      <Input {...rest} />
    </Container>
  );
}
