import { useContext } from 'react';
import styled from 'styled-components';
import { ArtBoard } from 'src/helpers/types';
import ArtboardNavigationContext from 'src/contexts/artboardNavigationContext';
import Layout from 'src/components/layout';
import Thumbnail from 'src/components/ui/Thumbnail';

const StyledArtboardWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;

const StyledThumbnailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
  grid-auto-rows: min-content;
  gap: 24px 40px;
`;

type Props = {
  documentName: string;
  artboards: ArtBoard[];
};

const DocumentView: React.FC<Props> = ({ documentName, artboards }) => {
  const { isArtboardDetailMode, selectedArtboard, selectThumbnail } =
    useContext(ArtboardNavigationContext);

  return (
    <Layout
      title={isArtboardDetailMode ? selectedArtboard.name : documentName}
      withNavigation={isArtboardDetailMode}
    >
      {isArtboardDetailMode ? (
        <StyledArtboardWrapper>
          <img src={selectedArtboard.files[0].url} alt={selectedArtboard.name} />
        </StyledArtboardWrapper>
      ) : (
        <StyledThumbnailsWrapper>
          {artboards.map((artboard: ArtBoard) => (
            <Thumbnail
              key={artboard.name}
              imgPath={artboard.files[0].thumbnails[0].url}
              name={artboard.name}
              onClick={selectThumbnail}
            />
          ))}
        </StyledThumbnailsWrapper>
      )}
    </Layout>
  );
};

export default DocumentView;
