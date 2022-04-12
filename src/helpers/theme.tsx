import { DefaultTheme, ThemeProvider } from 'styled-components';

export const theme: DefaultTheme = {
  palette: {
    PRIMARY: '#EA6C00',
    SECONDARY: '#FDAD00',
    LIGHT_MAX: '#FFFFFF',
    LIGHT_MEDIUM: '#F7F7F7',
    LIGHT_MIN: '#EFEFEF',
    NEUTRAL_MIN: '#E0E0E0',
    NEUTRAL_MEDIUM: '#B8B8B8',
    NEUTRAL_MAX: '#9F9F9F',
    DARK_MAX: '#191919',
    DARK_MEDIUM: '#343434',
    DARK_MIN: '#505050',
    DARK_TRANSPARENT: 'rgba(0, 0, 0, 0.1)',
  },
};

export const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);
