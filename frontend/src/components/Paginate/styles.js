import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  button {
    display: flex;
    align-items: center;

    color: #7d40e7;
    font-size: 18px;
    font-weight: bold;

    border: 1px solid #7d40e7;
    background: none;
    border-radius: 4px;
    padding: 6px 20px;

    &:hover {
      background: ${darken(0.2, '#7d40e7')};
      cursor: pointer;
      color: #fff;

      svg {
        color: #fff;
      }
    }

    svg {
      color: #7d40e7;
    }
  }

  > button {
    margin-right: 10px;
  }
`;
