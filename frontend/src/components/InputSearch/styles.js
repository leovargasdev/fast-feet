import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: row;
  svg {
    position: relative;
    left: 38px;
    bottom: 4px;
    color: #999;
  }
`;

export const Search = styled.input`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ddd;
  border-radius: 4px;

  font-size: 14px;
  height: 46px;
  padding: 0px 8px 0px 46px !important;
  color: #333;
  margin: 0 0 10px;

  &::placeholder {
    color: #999;
  }
`;
