import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;
export const Header = styled.View`
  margin: 10px 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  border-radius: 34px;
  width: 68px;
  height: 68px;
`;

export const Info = styled.View`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const Welcome = styled.Text`
  color: #666666;
  font-size: 12px;
  margin-bottom: -3px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #444;
`;
