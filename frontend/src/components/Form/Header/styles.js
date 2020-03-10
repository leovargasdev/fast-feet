import styled from 'styled-components';

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

  a {
    display: flex;
    padding: 10px 20px;
    background: ${props => (props.disabled ? '#CCCCCC' : '#7d40e7')};
    border-radius: 4px;

    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    margin-left: 8px;

    svg {
      margin-right: 3px;
    }
  }
`;
