import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btns = styled.div`
  display: flex;
  flex-direction: row;

  a,
  button {
    display: flex;
    align-items: center;
    padding: 8px 14px;
    display: flex;
    margin-left: 15px;
  }
  svg {
    margin-right: 4px;
  }
`;
export const BtnSubmit = styled.button`
  background: #7d40e7;
  color: #fff;
  border: 0;

  &:hover {
    background: ${darken(0.2, '#7D40E7')};
  }
`;
export const BtnBack = styled(Link)`
  background: #fff;
  color: #7d40e7;
  border: 1px solid #7d40e7;

  &:hover {
    color: #fff;
    background: #7d40e7;
  }
`;
