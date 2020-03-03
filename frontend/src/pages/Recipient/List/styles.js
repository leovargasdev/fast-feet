import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  li {
    grid-template-columns: 1fr 1fr 3fr 1fr;
  }
`;
