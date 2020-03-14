import styled from 'styled-components';
import { darken } from 'polished';

export const BtnLogin = styled.button`
  background: #7d40e7;
  transition: background 0.3s;
  color: #fff;
  border: 0;
  margin-top: 5px;
  padding: 12px 0;
  width: 100%;

  &:hover {
    background: ${darken(0.07, '#7D40E7')};
  }
`;
