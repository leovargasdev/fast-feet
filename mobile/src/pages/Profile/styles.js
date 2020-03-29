import styled from 'styled-components/native';
import {Platform} from 'react-native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Content = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;

  justify-content: center;
  padding: 0 30px;
`;

export const Avatar = styled.Image`
  align-self: center;
  border-radius: 70px;
  width: 140px;
  height: 140px;
  padding-bottom: 20px;
`;

export const Label = styled.Text`
  margin-top: 20px;
  color: #666666;
  font-size: 12px;
`;

export const Info = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const BtnLogout = styled(Button)`
  width: 100%;
  margin-top: 30px;
  background: #e74040;
`;
