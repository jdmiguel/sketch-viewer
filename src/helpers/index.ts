import documentPath from 'src/assets/document.png';
import documentBonusPath from 'src/assets/document-bonus.png';

export const documents = [
  { id: process.env.REACT_APP_FIRST_DOCUMENT_ID, imgPath: documentPath, name: 'Code test' },
  {
    id: process.env.REACT_APP_SECOND_DOCUMENT_ID,
    imgPath: documentBonusPath,
    name: 'Code test (bonus)',
  },
];
