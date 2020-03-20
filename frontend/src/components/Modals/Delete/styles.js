import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    font-size: 18px;
    margin-top: 10px;
    box-shadow: 0 0 4px #a9a9a9;
    border-radius: 4px;
    border: 0;
    width: 80%;
    padding: 12px 0;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const BtnYes = styled.button`
  background: #119410;
`;

export const BtnNo = styled.button`
  background: #e20000;
`;
