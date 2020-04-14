import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 0 20px;
  padding-bottom: 0;
  flex-direction: column;
`;

export const Content = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const HeaderContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #444;
  font-weight: bold;
`;

export const Menu = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ItemMenu = styled(TouchableOpacity)`
  background: transparent;
  border: none;
  margin-left: 10px;
`;

export const ItemMenuText = styled.Text`
  font-size: 16px;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  color: ${props => (props.selected ? '#7d40e7' : '#999')};
  text-decoration: ${props => (props.selected ? 'underline' : 'none')};
`;

export const Deliveries = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const WarningListDeliveries = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #7d40e7;
  margin-top: 150px;
  text-align: center;
  text-transform: uppercase;
`;
