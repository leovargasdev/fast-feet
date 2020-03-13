import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
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
    font-size: 24px;
    color: #c6c6c6;
    background: none;
    margin-right: 44px;
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Actions = styled.div`
  position: absolute;
  width: auto;
  background: #7d40e7;
  border-radius: 4px;
  padding: 15px 18px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  right: 0;
  top: calc(100% + 18px);
  z-index: 1;
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
    border-bottom: 20px solid #7d40e7;
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
    letter-spacing: 0.9px;
  }

  &:hover {
    cursor: pointer;
  }
`;
