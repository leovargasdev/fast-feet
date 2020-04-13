import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 20px;
`;

export const ContainerBtns = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;

  button {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    border: 0;
    border-radius: 4px;
    box-shadow: 2px 2px 3px #969696;

    width: 48%;
    height: 42px;
  }
`;

export const BtnYes = styled.button.attrs({
  type: 'button',
})`
  background: #19a337;
`;
export const BtnNo = styled.button.attrs({
  type: 'button',
})`
  background: #e50000;
`;
