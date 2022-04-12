import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { getQuery } from 'src/helpers/query';
import { ArtboardNavigationContextProvider } from 'src/contexts/artboardNavigationContext';
import Loader from 'src/components/ui/Loader';
import { ArtBoard } from 'src/helpers/types';
import DocumentView from './DocumentView';

const Document: React.FC = () => {
  const [documentName, setDocumentName] = useState('');
  const [artboards, setArtboards] = useState<ArtBoard[]>([]);

  const { id } = useParams();
  const { loading, data } = useQuery(getQuery(`${id}`));

  useEffect(() => {
    if (loading) {
      return;
    }

    setDocumentName(data.share.version.document.name);
    setArtboards(data.share.version.document.artboards.entries);
  }, [loading, data]);

  if (loading) return <Loader />;

  return (
    <ArtboardNavigationContextProvider artboards={artboards}>
      <DocumentView documentName={documentName} artboards={artboards} />
    </ArtboardNavigationContextProvider>
  );
};

export default Document;
