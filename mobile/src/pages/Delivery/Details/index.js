import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, Text} from 'react-native';

import BoxNavigate from '~/pages/Delivery/BoxNavigate';
import {
  BoxInfo,
  Header,
  HeaderTitle,
  Title,
  Info,
  GroupDates,
  GroupDatesContent,
  BoxBtns,
  BtnFooter,
  BtnText,
} from './styles';
import api from '~/services/api';

export default function Details({route, navigation}) {
  const {id} = route.params;
  const [delivery, setDelivery] = useState('');

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`delivery/${id}`);

      setDelivery(response.data);
    }

    loadDelivery();
  }, [id]);

  return (
    <BoxNavigate>
      {/* 01 BOX: Informações da Entrega */}
      <BoxInfo>
        <Header>
          <Icon
            name="local-shipping"
            size={24}
            color="#7D40E7"
            style={{paddingRight: 5}}
          />
          <HeaderTitle>Informações da Entrega</HeaderTitle>
        </Header>

        <Title>DESTINATÁRIO</Title>
        <Info>Ludwig van Beethoven</Info>

        <Title>ENDEREÇO DE ENTREGA</Title>
        <Info>Rua Beethoven, 1729, Diadema - SP, 09960-580</Info>

        <Title>PRODUTO</Title>
        <Info>Yamaha SX7</Info>
      </BoxInfo>
      {/* 02 BOX: Situação da entrega */}
      <BoxInfo>
        <Header>
          <Icon
            name="event"
            size={24}
            color="#7D40E7"
            style={{paddingRight: 5}}
          />
          <HeaderTitle>Situação da entrega</HeaderTitle>
        </Header>

        <Title>STATUS</Title>
        <Info>Pendente</Info>
        <GroupDates>
          <GroupDatesContent>
            <Title>DATA DE RETIRADA</Title>
            <Info>14 / 01 / 2020</Info>
          </GroupDatesContent>

          <GroupDatesContent>
            <Title>DATA DE ENTREGA</Title>
            <Info> - - / - - / - - </Info>
          </GroupDatesContent>
        </GroupDates>
      </BoxInfo>

      <BoxBtns>
        <BtnFooter onPress={() => navigation.navigate('NewProblem')}>
          <Icon name="highlight-off" size={24} color="#E74040" />
          <BtnText>Informar</BtnText>
          <BtnText>Problema</BtnText>
        </BtnFooter>
        <BtnFooter onPress={() => navigation.navigate('ViewProblems')}>
          <Icon name="info-outline" size={24} color="#E7BA40" />
          <BtnText>Visualizar</BtnText>
          <BtnText>Problemas</BtnText>
        </BtnFooter>
        <BtnFooter onPress={() => navigation.navigate('Confirm')}>
          <Icon name="check-circle" size={22} color="#7D40E7" />
          <BtnText>Confirmar</BtnText>
          <BtnText>Entrega</BtnText>
        </BtnFooter>
      </BoxBtns>
    </BoxNavigate>
  );
}

Details.propTypes = {
  route: PropTypes.element.isRequired,
  navigation: PropTypes.element.isRequired,
};
