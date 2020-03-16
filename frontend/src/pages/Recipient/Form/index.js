import React, { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { ContainerForm } from '~/components/Form/Container/styles';
import Header from '~/components/Form/Header';
import Input from '~/components/Form/Input';
import InputMask from '~/components/Form/InputMask';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Group1, Group2 } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome do destinatário é obrigatório!'),
  cep: Yup.string().required('O CEP é obrigatório!'),
  street: Yup.string().required('O logradouro é obrigatório!'),
  state: Yup.string().required('O UF é obrigatório!'),
  city: Yup.string().required('A cidade é obrigatória!'),
});

export default function RecipientForm({ match }) {
  const { id } = match.params;
  const formRef = useRef(null);
  const [cep, setCep] = useState('');

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

  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get(`/recipient/${id}`);
      formRef.current.setData({ ...response.data });
      setCep(response.data.cep);
    }
    if (id) loadRecipient();
  }, [id]);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        await api.put(`/recipient/${id}`, { ...data });
        toast.success('Destinatário atualizado com sucesso!');
      } else {
        await api.post('/recipient', { ...data });
        toast.success('Destinatário criado com sucesso!');
      }
      history.push('/recipients');

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
