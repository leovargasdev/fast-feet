import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Problem = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  padding: 14px 20px;
  height: 300px;
  background: #fff;
  font-size: 15px;
  color: #000;

  border-radius: 4px;
  border-color: #0000001a;
  border-width: 1px;
`;

export const BtnSubmit = styled(Button)`
  align-self: stretch;
  margin-top: 10px;
  background: #7d40e7;
`;
