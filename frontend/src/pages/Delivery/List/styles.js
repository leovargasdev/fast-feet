import styled from 'styled-components';
import { lighten, darken } from 'polished';

const colorsStatus = {
  PENDENTE: '#ccc610',
  RETIRADA: '#4D85EE',
  ENTREGUE: '#2CA42B',
  CANCELADA: '#DE3B3B',
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  li {
    grid-template-columns: 1fr 2fr 3fr 2fr 1fr 2fr 1fr;
  }
`;

export const Deliveryman = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const Status = styled.div`
  width: auto;
  margin: 0;

  span {
    font-size: 15px;
    padding: 7px 10px;
    background: ${props => darken(0.1, colorsStatus[props.color])};
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: bold;

    &::before {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: ${props => lighten(0.3, colorsStatus[props.color])};
      content: '';
      border-radius: 50%;
      margin-right: 5px;
    }
  }
`;
