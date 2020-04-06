import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  > button {
    margin-right: 10px;
  }
`;

export const BtnControlPage = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  padding: 6px 20px;

  color: ${props => (props.disabled ? '#FFF' : '#7d40e7')};
  font-size: 18px;
  font-weight: bold;

  border: 1px solid;
  border-radius: 4px;
  border-color: ${props => (props.disabled ? '#FFF' : '#7d40e7')};
  background: ${props => (props.disabled ? '#777' : 'none')};

  &:hover {
    color: #fff;
    background: ${props => !props.disabled && darken(0.2, '#7d40e7')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    svg {
      color: #fff;
    }
  }

  svg {
    color: ${props => (props.disabled ? '#FFF' : '#7d40e7')};
  }
`;
