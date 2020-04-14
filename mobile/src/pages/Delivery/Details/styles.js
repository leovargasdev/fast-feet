import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

import Button from '~/components/Button';

export const BoxInfo = styled.View`
  align-self: stretch;
  margin-bottom: 15px;

  background-color: #fff;
  border-radius: 4px;
  border-color: #0000001a;
  border-width: 1px;
  padding: 10px 14px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const HeaderTitle = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-bottom: 10px;
`;

export const GroupDates = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const GroupDatesContent = styled.View`
  display: flex;
  flex-direction: column;
`;

export const BoxBtns = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #f8f9fd;
  border-width: 1px;
  border-color: #0000001a;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const BtnStart = styled(Button)`
  width: 100%;
  background: #79b791;
`;

export const BtnFooter = styled(TouchableOpacity)`
  flex: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 10px;
  border-radius: 4px;
`;

export const BtnText = styled.Text`
  text-align: center;
  font-size: ${props => (props.oneButton ? '14px' : '12px')};
  color: ${props => (props.oneButton ? '#FFF' : '#444')};
`;
