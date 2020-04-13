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
  padding: 12px 20px;
  border-radius: 4px;
  margin: 8px 0;
  align-items: center;

  & + li {
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      margin-bottom: 10px;
    }
  }

  span,
  strong {
    font-size: 16px;
    text-align: left;
    color: #666;
    letter-spacing: 0;
  }
`;
