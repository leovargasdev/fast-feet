import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  li {
    grid-template-columns: 1fr 4fr 1fr;
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
    font-size: 24px;
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
  width: 200px;
  background: #fff;
  border-radius: 4px;
  padding: 15px 5px;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
  left: calc(30%);
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
