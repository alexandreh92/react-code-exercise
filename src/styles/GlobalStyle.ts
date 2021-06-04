import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 200ms ease, color 200ms ease
  }
  html, body, #root {
    height: 100%;
    display: flex;
    flex: 1;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  :root {
    display: flex;
  }
`;
