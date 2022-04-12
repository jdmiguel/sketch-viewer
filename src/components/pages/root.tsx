import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from 'src/components/layout/Layout';
import Thumbnail from 'src/components/ui/Thumbnail';
import { documents } from 'src/helpers/index';
import { Document } from 'src/helpers/types';

const StyledTitle = styled.h2`
  margin-top: 20px;
`;

const StyledThumbnailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  max-width: 1200px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Root: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout title="Pages">
      <StyledTitle>Page 1</StyledTitle>
      <StyledThumbnailsWrapper>
        {documents.map((document: Document) => (
          <Thumbnail
            key={document.id}
            imgPath={document.imgPath}
            name={document.name}
            onClick={() => navigate(`/document/${document.id}`)}
            withRootStyles
          />
        ))}
      </StyledThumbnailsWrapper>
    </Layout>
  );
};

export default Root;
