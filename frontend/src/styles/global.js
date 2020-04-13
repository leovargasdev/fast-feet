import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { darken } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #7d40e7;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${darken(0.2, '#7d40e7')};
  }
  /* cor secudária */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px #000;
    border-radius: 10px;
    background: #FFF;
  }

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
