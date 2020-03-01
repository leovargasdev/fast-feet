import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* justify-content: center; */

  a {
    display: flex;
    align-self: right;
    /* align-items: center; */
    padding: 10px 20px;
    background: #7d40e7;
    border-radius: 4px;

    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;

    svg {
      margin-right: 3px;
    }
  }
`;
