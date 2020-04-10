import PropTypes from 'prop-types';
import {Alert, StatusBar} from 'react-native';
import {format, parseISO} from 'date-fns';
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

  const [startBtn, setStartBtn] = useState(false);
  const [confirmBtn, setConfirmBtn] = useState(false);
  const [newProblemBtn, setNewProblemBtn] = useState(false);

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
    setConfirmBtn(!!delivery.end_date);
    setStartBtn(!!delivery.start_date);

    // Não pode relatar mais problemas após a entrega ter sido confirmada
    setNewProblemBtn(!startBtn);
  }, [confirmBtn, delivery, startBtn]);

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`delivery/${id}`);

      setDelivery(response.data);
    }

    if (isFocused) loadDelivery();
  }, [id, isFocused, startBtn]);

  function handleNewProblem() {
    if (!newProblemBtn) navigation.navigate('NewProblem', {id});
    else Alert.alert('Operação Negada!', 'A encomenda ainda não foi retirada!');
  }

  async function handleCancel() {
    await api.delete(`problem/${id}/cancel-delivery`);
    navigation.goBack();
  }

  async function handleStart() {
    await api.put(`delivery/${id}`, {
      start_date: new Date(),
    });
    setStartBtn(true);
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
      {/* NÃO MOSTRAR BTNS SE A ENCOMENDA JÁ FOI CONFIRMADA */}
      {!confirmBtn && (
        <BoxBtns>
          {startBtn === true ? (
            <BtnFooter
              onPress={() => navigation.navigate('Confirm', {id})}
              style={{borderRightWidth: 1, borderRightColor: '#0000001a'}}>
              <Icon
                name="check-circle"
                size={24}
                color="#7D40E7"
                style={{opacity: confirmBtn ? 0.3 : 1}}
              />
              <BtnText disabled={confirmBtn}>Confirmar</BtnText>
            </BtnFooter>
          ) : (
            <BtnFooter
              onPress={() => handleStart()}
              style={{borderRightWidth: 1, borderRightColor: '#0000001a'}}>
              <Icon name="local-shipping" size={24} color="#79B791" />
              <BtnText>Retirar</BtnText>
            </BtnFooter>
          )}

          {/* BTN: CANCELAR */}
          <BtnFooter onPress={() => handleCancel()}>
            <Icon name="cancel" size={24} color="#E74040" />
            <BtnText>Cancelar</BtnText>
          </BtnFooter>
        </BoxBtns>
      )}

      <BoxBtns>
        {/* BTN: NOVO PROBLEMA */}
        {!confirmBtn && (
          <BtnFooter
            onPress={() => handleNewProblem()}
            style={{borderRightWidth: 1, borderRightColor: '#0000001a'}}>
            <Icon
              name="report"
              size={24}
              color="#86BBD8"
              style={{opacity: newProblemBtn ? 0.3 : 1}}
            />
            <BtnText disabled={newProblemBtn}>Informar Problema</BtnText>
          </BtnFooter>
        )}
        {/* BTN: LISTAR PROBLEMAS */}
        <BtnFooter onPress={() => navigation.navigate('ViewProblems', {id})}>
          <Icon name="list" size={24} color="#E7BA40" />
          <BtnText>Visualizar Problemas</BtnText>
        </BtnFooter>
      </BoxBtns>
    </BoxNavigate>
  );
}

Details.propTypes = {
  route: PropTypes.element.isRequired,
  navigation: PropTypes.element.isRequired,
};
