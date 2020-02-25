import styled from 'styled-components';
import { darken } from 'polished';

export const BtnLogin = styled.button`
  background: #7d40e7;
  transition: background 0.3s;

  &:hover {
    background: ${darken(0.07, '#7D40E7')};
  }
`;
