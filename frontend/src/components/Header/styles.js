import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      width: 135px;
      height: auto;
    }

    a {
      font-weight: bold;
      color: #999;
      font-weight: normal;
      text-transform: uppercase;
      padding-right: 20px;
    }
    /* class dentro do href */
    .active {
      color: #444;
      font-weight: bold;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding-left: 20px;
  border-left: 1px solid #eee;

  strong {
    display: block;
    color: #666;
  }

  button {
    display: block;
    background: none;
    border: 0;
    margin-top: 2px;
    font-size: 12px;
    color: #de3b3b;
  }
`;
