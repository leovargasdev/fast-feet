import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function Select({ name, label, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <label htmlFor={fieldName}>{label}</label>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
      {error && <span>** {error} **</span>}
    </Container>
  );
}
