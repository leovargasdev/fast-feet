import PropTypes from 'prop-types';
import React, {useState} from 'react';

import BoxNavigate from '~/pages/Delivery/BoxNavigate';
import {Container, Problem, BtnSubmit} from './styles';

import api from '~/services/api';

export default function NewProblem({route, navigation}) {
  const {id} = route.params;

  const [description, setDescription] = useState('');

  async function handleSubmit() {
    await api.post(`/delivery/${id}/problems`, {description});
    navigation.goBack();
  }

  return (
    <BoxNavigate>
      <Problem
        style={{textAlignVertical: 'top'}}
        multiline
        numberOfLines={10}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Inclua aqui o problema que ocorreu na entrega."
        value={description}
        onChangeText={setDescription}
      />
      <BtnSubmit onPress={handleSubmit}>Enviar</BtnSubmit>
    </BoxNavigate>
  );
}

NewProblem.propTypes = {
  route: PropTypes.element.isRequired,
  navigation: PropTypes.element.isRequired,
};
