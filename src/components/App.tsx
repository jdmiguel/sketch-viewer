import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'src/components/ui/Loader';

/* Lazy Components */
const Root = lazy(() => import('./pages/root'));
const Document = lazy(() => import('./pages/document'));

const App = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/document/:id" element={<Document />} />
    </Routes>
  </Suspense>
);

export default App;
