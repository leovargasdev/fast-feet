import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { PropTypes } from 'prop-types';
import ReactInputMask from 'react-input-mask';

import { Container } from '~/components/Form/Input/styles';

export default function InputMask({ label, name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref) {
        ref.setInputValue('');
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>
      <ReactInputMask id={fieldName} ref={inputRef} {...rest} />

      {error && <span>** {error} **</span>}
    </Container>
  );
}

InputMask.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
