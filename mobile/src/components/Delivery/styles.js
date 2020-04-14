import styled from 'styled-components/native';

import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-top: 10px;

  border-radius: 4px;
  border: 1px solid #f1f1f1;
  margin-bottom: 15px;
`;

export const ContentTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;

export const Progress = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const GroupProgress = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProgressInfo = styled.Text`
  color: #999;
  font-size: 7px;
`;

export const Ellipse = styled.View`
  width: 14px;
  height: 14px;
  margin-bottom: 5px;
  border-radius: 7px;
  border: 1px solid #7d40e7;
  background: ${props => (props.check ? '#7d40e7' : 'transparent')};
`;

export const LineProgress = styled.View`
  margin-bottom: 12px;
  flex: 1;
  width: 100%;
  height: ${props => (props.check ? '2px' : '1px')};
  background: #7d40e7;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #f1f1f1;
  padding: 10px 12px;
  margin-top: 8px;
`;

export const Group = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 9px;
`;

export const Info = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const BtnDetails = styled(TouchableOpacity)`
  background: transparent;
  border: none;
`;
