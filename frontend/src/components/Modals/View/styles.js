import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const GroupInfo = styled.div`
  padding: 10px 0;

  & + div{
    border-top: 1px solid #EEEEEE;
  }

  h3{
    font-weight: bold;
    color: #444;
    font-size: 16px;
    margin-bottom: 5px;
  }

  p{
    color: #666666;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4px;
  }
`
export const Signature = styled.div`
  display: flex;
  align-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;
