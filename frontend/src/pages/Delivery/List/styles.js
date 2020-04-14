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
    grid-template-columns: 1fr 3fr 4fr 2fr 1fr 2fr 1fr;
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
  width: 100%;
  background: ${props => darken(0.1, colorsStatus[props.color])};
  border-radius: 6px;
  text-align: center;
  margin-left: 10px;
  padding: 6px 0;

  span {
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 1px;

    &::before {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: ${props => lighten(0.2, colorsStatus[props.color])};
      content: '';
      border-radius: 50%;
      margin-right: 5px;
    }
  }
`;
