import PropTypes from 'prop-types';
import React, {useEffect, useState, useMemo} from 'react';
import {format, parseISO} from 'date-fns';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

  const startDateFormatted = useMemo(
    () =>
      delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
        : '- - / - - / - -',
    [delivery],
  );

  const endDateFormatted = useMemo(
    () =>
      delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
        : '- - / - - / - -',
    [delivery],
  );

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`delivery/${id}`);

      setDelivery(response.data);
    }

    loadDelivery();
  }, [id]);

  function handleNewProblem() {
    if (delivery.end_date) {
      Alert.alert('A encomenda já foi entregue!');
    } else {
      navigation.navigate('NewProblem', {id});
    }
  }

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
        <Info>{delivery && delivery.recipient.name}</Info>

        <Title>ENDEREÇO DE ENTREGA</Title>
        <Info>{delivery && delivery.recipient.city}</Info>

        <Title>PRODUTO</Title>
        <Info>{delivery.product}</Info>
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
        <Info>{delivery.status}</Info>
        <GroupDates>
          <GroupDatesContent>
            <Title>DATA DE RETIRADA</Title>
            <Info>{startDateFormatted}</Info>
          </GroupDatesContent>

          <GroupDatesContent>
            <Title>DATA DE ENTREGA</Title>
            <Info>{endDateFormatted}</Info>
          </GroupDatesContent>
        </GroupDates>
      </BoxInfo>

      <BoxBtns>
        <BtnFooter onPress={handleNewProblem}>
          <Icon name="highlight-off" size={24} color="#E74040" />
          <BtnText>Informar</BtnText>
          <BtnText>Problema</BtnText>
        </BtnFooter>
        <BtnFooter onPress={() => navigation.navigate('ViewProblems', {id})}>
          <Icon name="info-outline" size={24} color="#E7BA40" />
          <BtnText>Visualizar</BtnText>
          <BtnText>Problemas</BtnText>
        </BtnFooter>
        <BtnFooter onPress={() => navigation.navigate('Confirm', {id})}>
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
