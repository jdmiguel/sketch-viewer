import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams, Params } from 'react-router-dom';
import { ArtboardNavigationContextProvider } from 'src/contexts/artboardNavigationContext';
import DocumentView from 'src/components/layout/DocumentView';
import Loader from 'src/components/ui/Loader';
import { GET_ARTBOARDS } from 'src/helpers/query';
import { Artboard, ArtboardsQueryData, ArtboardsQueryVars } from 'src/helpers/types';

const Document: React.FC = () => {
  const [documentName, setDocumentName] = useState('');
  const [artboards, setArtboards] = useState<Artboard[]>([]);

  const { id } = useParams<Params>();
  const { loading, data } = useQuery<ArtboardsQueryData, ArtboardsQueryVars>(GET_ARTBOARDS, {
    variables: { id },
  });

  useEffect(() => {
    if (loading || !data) {
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
