import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #333;
    margin: 0 0 15px;

    &::placeholder {
      color: #999;
    }
  }

  label {
    font-size: 14px;
    font-weight: bold;
    color: #444;

    text-align: left;
    letter-spacing: 0;
    margin-bottom: 4px;
    padding-left: 1px;
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;
