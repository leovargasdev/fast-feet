import PropTypes from 'prop-types';
import {StatusBar} from 'react-native';
import {format, parseISO} from 'date-fns';
import Snackbar from 'react-native-snackbar';
import {useIsFocused, useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState, useMemo} from 'react';
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
  const isFocused = useIsFocused();
  const {id} = route.params;
  const [delivery, setDelivery] = useState('');

  const [startedDelivery, setStartedDelivery] = useState(false);
  const [confirmedDelivery, setConfirmedDelivery] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#7d40e7');
    }, []),
  );

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
    setStartedDelivery(!!delivery.start_date);
    setConfirmedDelivery(!!delivery.end_date);
  }, [delivery.end_date, delivery.start_date]);

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`delivery/${id}`);

      setDelivery(response.data);
    }

    if (isFocused) loadDelivery();
  }, [id, isFocused]);

  async function handleStart() {
    await api.put(`delivery/${id}`, {
      start_date: new Date(),
    });
    setStartedDelivery(true);
    Snackbar.show({
      text: 'Encomenda retirada com sucesso',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: '#79b791',
    });
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
        {startedDelivery === false ? (
          <BtnFooter
            onPress={handleStart}
            style={{
              backgroundColor: '#79b791',
            }}>
            <Icon name="local-shipping" size={26} color="#FFF" />
            <BtnText oneButton>Retirar Encomenda</BtnText>
          </BtnFooter>
        ) : (
          <>
            {/* BTN: LISTAR PROBLEMAS */}
            <BtnFooter
              onPress={() => navigation.navigate('ViewProblems', {id})}
              style={
                confirmedDelivery
                  ? {
                      backgroundColor: '#E7BA40',
                    }
                  : {
                      borderRightWidth: 1,
                      borderRightColor: '#0000001a',
                    }
              }>
              <Icon
                name="list"
                size={24}
                color={confirmedDelivery ? '#FFF' : '#E7BA40'}
              />
              <BtnText oneButton={confirmedDelivery}>
                Visualizar Problemas
              </BtnText>
            </BtnFooter>
            {!confirmedDelivery && (
              <>
                {/* BTN: NOVO PROBLEMA */}
                <BtnFooter
                  onPress={() => navigation.navigate('NewProblem', {id})}
                  style={{borderRightWidth: 1, borderRightColor: '#0000001a'}}>
                  <Icon name="report" size={24} color="#86BBD8" />
                  <BtnText>Informar Problema</BtnText>
                </BtnFooter>

                {/* BTN: CONFIRMAR ENCOMENDA */}
                <BtnFooter onPress={() => navigation.navigate('Confirm', {id})}>
                  <Icon name="check-circle" size={24} color="#7D40E7" />
                  <BtnText>Confirmar</BtnText>
                </BtnFooter>
              </>
            )}
          </>
        )}
      </BoxBtns>
    </BoxNavigate>
  );
}

Details.propTypes = {
  route: PropTypes.element.isRequired,
  navigation: PropTypes.element.isRequired,
};
