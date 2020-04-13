import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  /* alinha img ao centro */
  text-align: center;

  form {
    width: 450px;
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    opacity: 1;

    input {
      margin-bottom: 10px;
    }
  }
`;
export const BtnLogin = styled.button`
  width: 100%;
  margin-top: 10px;
  background: #7d40e7;
  color: #fff;
  border: 0;
  padding: 12px 0;
  transition: background 0.3s;

  &:hover {
    background: ${darken(0.1, '#7d40e7')};
  }
`;
