import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
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
    background: none;
    border: 0;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  img {
    display: inline-block;
    height: auto;
    vertical-align: middle;
  }
`;

export const theme: DefaultTheme = {
  loader: '#EA6C00',
};

export const lightTheme = {
  ...theme,
  text: '#252525',
  headerBg: '#FFFFFF',
  mainBg: '#F7F7F7',
  shadow: 'rgba(0, 0, 0, 0.1)',
  buttonBgHover: '#EFEFEF',
  thumbnailBg: '#ececec',
  thumbnailBgHover: '#dedede',
  thumbnailBorder: '#dedede',
};

export const darkTheme = {
  ...theme,
  text: '#F7F7F7',
  headerBg: '#4f535d',
  mainBg: '#424650',
  shadow: 'rgba(255, 255, 255, 0.1)',
  buttonBgHover: '#6e7481',
  thumbnailBg: '#6e7481',
  thumbnailBgHover: '#656b78',
  thumbnailBorder: '#656b78',
};
