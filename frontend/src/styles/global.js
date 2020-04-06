import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    background: #f5f5f5;
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased; /* Deixa a fonte mais definida */
  }

  body, input, button, select{
    font: 14px 'Roboto', sans-serif;
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style: none
  }
  button {
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;

    button, a {
      font-weight: bold;
      border-radius: 4px;
      font-size: 16px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
  }
 `;
