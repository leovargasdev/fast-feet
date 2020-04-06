import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  span {
    color: #fff;
    font-weight: bold;
    font-size: 26px;

    margin: 20px 0;
    border-radius: 4px;
    padding: 20px 110px;
    background: ${darken(0.2, '#7d40e7')};
  }
`;
