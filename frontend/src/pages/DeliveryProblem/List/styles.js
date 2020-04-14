import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  li {
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

export const ProblemDescription = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const Canceled = styled.span`
  background: #e50000;
  color: #fff !important;
  font-weight: bold;
  font-size: 12px !important;
  padding: 2px 10px;
  margin-left: 10px;
  border-radius: 4px;
`;
