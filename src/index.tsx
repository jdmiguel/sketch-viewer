import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeModeContextProvider } from 'src/contexts/themeModeContext';
import App from 'src/components/App';
import { GlobalStyles } from 'src/helpers/theme';

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
        <ThemeModeContextProvider>
          <GlobalStyles />
          <App />
        </ThemeModeContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
