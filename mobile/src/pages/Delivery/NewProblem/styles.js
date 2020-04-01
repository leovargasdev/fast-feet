import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Problem = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  padding: 14px 20px;
  height: 300px;
  background: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  font-size: 15px;
  color: #000;
`;

export const BtnSubmit = styled(Button)`
  margin-top: 10px;
  background: #7d40e7;
`;
