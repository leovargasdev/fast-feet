import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    padding: 12px 20px;
    background: #7d40e7;
    border-radius: 4px;

    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;

    &:hover {
      background: ${darken(0.1, '#7d40e7')};
    }

    svg {
      margin-right: 3px;
    }
  }
`;
