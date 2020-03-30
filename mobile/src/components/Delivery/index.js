import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ContentTitle,
  Title,
  Status,
  Footer,
  Group,
  Label,
  Info,
  Ellipse,
  LineProgress,
} from './styles';

export default function Delivery({data}) {
  return (
    <Container>
      <ContentTitle>
        <Icon
          name="local-shipping"
          size={24}
          color="#7D40E7"
          style={{paddingRight: 5}}
        />
        <Title>Encomenda 01</Title>
      </ContentTitle>
      <Status>
        <Ellipse />
        <LineProgress />
        <Ellipse />
        <LineProgress />
        <Ellipse disnable />
      </Status>
      <Footer>
        <Group>
          <Label>Data</Label>
          <Info>14/01/2020</Info>
        </Group>
        <Group>
          <Label>Cidade</Label>
          <Info>Diadema</Info>
        </Group>
        <Title>Ver Detalhes</Title>
      </Footer>
    </Container>
  );
}
