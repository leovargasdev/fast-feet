import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 12px 0 0;

  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #f8f9fd;
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
  padding: 0 20px;
  margin-top: 8px;
`;

export const Ellipse = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  border: 1px solid #7d40e7;
  background: ${props => (props.check ? '#7d40e7' : 'transparent')};
`;

export const LineProgress = styled.View`
  flex: 1;
  width: 100%;
  height: ${props => (props.check ? '3px' : '1px')};
  background: #7d40e7;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: #f8f9fd;
  padding: 4px 12px 12px;
  margin-top: 8px;
`;

export const Group = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 8px;
`;

export const Info = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #444;
`;

// export const BtnDetails = styled(Button)`
//   background: #000;
//   color: #ffff;
// `;
