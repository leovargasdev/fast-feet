import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const GroupInfo = styled.div`
  padding: 10px 0;

  & + div {
    border-top: 1px solid #eeeeee;
  }

  h3 {
    font-weight: bold;
    color: #444;
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    color: #666666;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4px;
  }
`;

export const Signature = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 300px;
  }

  span {
    font-size: 20px;
    color: #333;
  }
`;

export const ContentProblem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  p,
  strong {
    color: #444;
    font-size: 16px;
  }

  strong {
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    line-height: 25px;
    font-weight: 300;
  }
`;
