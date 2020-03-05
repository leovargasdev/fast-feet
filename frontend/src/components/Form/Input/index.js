import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { PropTypes } from 'prop-types';
import { Container } from './styles';

export default function Input({ label, name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error = '' } = useField(
    name
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span>** {error} **</span>}
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
