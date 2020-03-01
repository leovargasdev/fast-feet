import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;
export const Item = styled.li`
  display: grid;
  grid-gap: 10px;
  padding: 20px;
  border-radius: 4px;
  margin: 4px;
  /* alinha os itens verticalmente */
  align-items: center;

  /* não aplica no primeiro item */
  & + li {
    background: #ffffff 0% 0% no-repeat padding-box;
  }

  span,
  strong {
    font-size: 16px;
    text-align: left;
    color: #666;
    letter-spacing: 0;
  }
`;
