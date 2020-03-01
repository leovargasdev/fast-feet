import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

const colorsStatus = {
  PENDENTE: '#C1BC35',
  RETIRADA: '#4D85EE',
  ENTREGUE: '#2CA42B',
  CANCELADA: '#DE3B3B',
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  li {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const Status = styled.div`
  width: auto;
  margin: 0;
  span {
    padding: 7px 10px;
    background: ${props => lighten(0.3, colorsStatus[props.color])};
    border-radius: 12px;
    color: ${props => colorsStatus[props.color]};
    font-weight: bold;

    &::before {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: ${props => colorsStatus[props.color]};
      content: '';
      border-radius: 50%;
      margin-right: 5px;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  position: relative;
  font-weight: bold;

  span {
    font-size: 16px;
    color: #666;
    letter-spacing: 0;
  }

  button {
    color: #c6c6c6;
    background: none;
    margin-right: 20px;
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Actions = styled.div`
  position: absolute;
  width: 120px;
  background: #fff;
  border-radius: 4px;
  padding: 15px 5px;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
  left: calc(42%);
  top: calc(100% + 18px);
  box-shadow: 0px 0px 2px #00000026;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid;
  }
`;

export const Action = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 4px;
  }

  & + a {
    margin-top: 9px;
    padding-top: 9px;
    border-top: 1px solid #00000026;
  }

  p {
    font-weight: 300;
    color: #999;
    margin: 0;
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;
