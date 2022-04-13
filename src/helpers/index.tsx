import { render } from '@testing-library/react';
import documentPath from 'src/assets/document.png';
import documentBonusPath from 'src/assets/document-bonus.png';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

export const documents = [
  { id: process.env.REACT_APP_FIRST_DOCUMENT_ID, imgPath: documentPath, name: 'Code test' },
  {
    id: process.env.REACT_APP_SECOND_DOCUMENT_ID,
    imgPath: documentBonusPath,
    name: 'Code test (bonus)',
  },
];

export const renderWithRouter = ({ children }: any) =>
  render(
    <MemoryRouter initialEntries={[`/document/${process.env.REACT_APP_FIRST_DOCUMENT_ID}`]}>
      <Routes>
        <Route path="/document/:id">{children}</Route>
      </Routes>
    </MemoryRouter>,
  );
