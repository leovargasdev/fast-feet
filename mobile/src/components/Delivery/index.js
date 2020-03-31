import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format, parseISO} from 'date-fns';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContentTitle,
  Title,
  Progress,
  ProgressInfo,
  GroupProgress,
  Ellipse,
  LineProgress,
  Footer,
  Group,
  Label,
  Info,
  BtnDetails,
} from './styles';

export default function Delivery({data}) {
  const navigation = useNavigation();
  const dateFormatted = useMemo(
    () => format(parseISO(data.createdAt), 'dd/MM/yyyy'),
    [data],
  );

  const progress = useMemo(() => {
    const {status} = data;
    if (status === 'ENTREGUE') return [true, true];
    if (status === 'RETIRADA') return [true, false];
    return [false, false];
  }, [data]);

  return (
    <Container>
      <ContentTitle>
        <Icon
          name="local-shipping"
          size={24}
          color="#7D40E7"
          style={{paddingRight: 5}}
        />
        <Title>Encomenda {data.id}</Title>
      </ContentTitle>
      <Progress>
        <GroupProgress style={{marginTop: 10}}>
          <Ellipse check />
          <ProgressInfo>Aguardando</ProgressInfo>
          <ProgressInfo>Retirada</ProgressInfo>
        </GroupProgress>
        <LineProgress check={progress[0]} />
        <GroupProgress>
          <Ellipse check={progress[0]} />
          <ProgressInfo>Retirada</ProgressInfo>
        </GroupProgress>
        <LineProgress check={progress[1]} />
        <GroupProgress>
          <Ellipse check={progress[1]} />
          <ProgressInfo>Entregue</ProgressInfo>
        </GroupProgress>
      </Progress>
      <Footer>
        <Group>
          <Label>Data</Label>
          <Info>{dateFormatted}</Info>
        </Group>
        <Group>
          <Label>Cidade</Label>
          <Info>{data.recipient.city}</Info>
        </Group>
        <BtnDetails
          onPress={() =>
            navigation.navigate('Delivery', {
              screen: 'Details',
            })
          }>
          <Title>Ver Detalhes</Title>
        </BtnDetails>
      </Footer>
    </Container>
  );
}
