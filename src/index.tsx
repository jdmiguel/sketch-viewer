import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/helpers/theme';
import GlobalStyles from 'src/helpers/globalStyles';
import App from 'src/components/App';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_API_URL,
  }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
