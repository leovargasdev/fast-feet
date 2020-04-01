import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const BoxInfo = styled.View`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-radius: 4px;
  background: #fff;
  padding: 10px 12px;
  border: 1px solid #f1f1f1;
  margin-bottom: 15px;
`;
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  width: 80%;

  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fd;
`;

export const BtnFooter = styled(TouchableOpacity)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
`;

export const BtnText = styled.Text`
  font-size: 12px;
  color: #999;
`;
