import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { ContainerForm } from '~/components/Form/Container/styles';
import Header from '~/components/Form/Header';
import Input from '~/components/Form/Input';
import InputMask from '~/components/Form/InputMask';
import { recipientRequest } from '~/store/modules/recipient/actions';

import { Container, Group1, Group2 } from './styles';

export default function RecipientForm() {
  const formRef = useRef(null);
  const [cep, setCep] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (cep && cep[8] !== '_') {
      const url = `https://viacep.com.br/ws/${cep.replace('-', '')}/json/`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.erro) {
            toast.error('Falha ao localizar CEP');
          } else {
            const { logradouro: street, localidade: city, uf: state } = data;
            formRef.current.setData({ street, city, state });
            toast.success('CEP localizado com sucesso!');
          }
        })
        .catch(err => {
          console.tron.log(err);
        });
    }
  }, [cep]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome do destinatário é obrigatório!'),
        cep: Yup.string().required('O CEP é obrigatório!'),
        street: Yup.string().required('O logradouro é obrigatório!'),
        state: Yup.string().required('O UF é obrigatório!'),
        city: Yup.string().required('A cidade é obrigatória!'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(recipientRequest(data));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Header content="Cadastro de Destinatário" voltarLink="/recipients" />
        <ContainerForm>
          <Input name="name" label="Nome" placeholder="Bruce Wayne" />
          <Group1>
            {/* Criar o campo info, com o informativo */}
            <InputMask
              name="cep"
              label="CEP"
              mask="99999-999"
              value={cep}
              onChange={e => setCep(e.target.value)}
              placeholder="00000-000"
            />
            <Input
              name="street"
              label="Logradouro"
              placeholder="Av. das Acácias da Península"
            />
          </Group1>
          <Group2>
            <Input name="state" label="Estado" placeholder="New Jersey" />
            <Input name="city" label="Cidade" placeholder="Gotham City" />
            <Input name="number" label="Número" placeholder="212" />
          </Group2>
          <Input
            name="complement"
            label="Complemento"
            placeholder="Bathouse Morcego 123"
          />
        </ContainerForm>
      </Form>
    </Container>
  );
}
