import { ThemeProvider } from 'styled-components';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme';
import { MockedProvider as MockedProviderBroken } from '@apollo/client/testing';
import {
  MockedProviderProps,
  MockedProviderState,
} from '@apollo/client/testing/react/MockedProvider';

export const MockedProvider = MockedProviderBroken as React.ComponentClass<
  MockedProviderProps,
  MockedProviderState
>;

type RenderProps = {
  children: JSX.Element;
};

export const RenderWithTheme = ({ children }: RenderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const RenderWithRouter = ({ children }: RenderProps) => (
  <MemoryRouter initialEntries={[`/document/${process.env.REACT_APP_FIRST_DOCUMENT_ID}`]}>
    <Routes>
      <Route path="/document/:id" element={children} />
    </Routes>
  </MemoryRouter>
);
