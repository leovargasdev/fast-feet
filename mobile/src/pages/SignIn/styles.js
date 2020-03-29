import {Platform} from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  background: #7159c1;
  flex: 1;
`;

export const Content = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;

  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;
export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;
export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
