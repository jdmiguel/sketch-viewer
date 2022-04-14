import { Suspense, lazy, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ThemeModeContext from 'src/contexts/themeModeContext';
import Loader from 'src/components/ui/Loader';
import { lightTheme, darkTheme } from 'src/helpers/theme';

/* Lazy Components */
const Root = lazy(() => import('./pages/root'));
const Document = lazy(() => import('./pages/document'));

const App = () => {
  const { mode } = useContext(ThemeModeContext);

  return (
    <ThemeProvider theme={mode === 'LIGHT' ? lightTheme : darkTheme}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/document/:id" element={<Document />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
