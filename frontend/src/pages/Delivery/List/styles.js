import styled from 'styled-components';
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
