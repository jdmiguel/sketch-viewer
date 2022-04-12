import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    background-color: #F7F7F7;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    min-height: 100vh;
    text-size-adjust: 100%;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  p,
  ul {
    margin: 0;
    padding: 0;
  }
  img {
    display: inline-block;
    height: auto;
    vertical-align: middle;
  }
`;

export default GlobalStyles;
