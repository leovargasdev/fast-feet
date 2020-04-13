import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-self: self-end;

  button {
    font-size: 24px;
    color: #c6c6c6;
    background: none;
    border: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Actions = styled.div`
  padding: 12px 18px;
`;

export const Action = styled.div`
  a,
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 4px;
  }

  & + div {
    margin-top: 12px;
    padding-top: 12px;
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
