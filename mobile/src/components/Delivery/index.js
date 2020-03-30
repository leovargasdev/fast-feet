import React, {useMemo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format, parseISO} from 'date-fns';

import {
  Container,
  ContentTitle,
  Title,
  Progress,
  Footer,
  Group,
  Label,
  Info,
  Ellipse,
  LineProgress,
} from './styles';

export default function Delivery({data}) {
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
        <Ellipse check />
        <LineProgress check={progress[0]} />
        <Ellipse check={progress[0]} />
        <LineProgress check={progress[1]} />
        <Ellipse check={progress[1]} />
      </Progress>
      <Footer>
        <Group>
          <Label>Data</Label>
          <Info>{dateFormatted}</Info>
        </Group>
        <Group>
          <Label>Cidade</Label>
          <Info>dasda</Info>
        </Group>
        <Title>Ver Detalhes</Title>
      </Footer>
    </Container>
  );
}
