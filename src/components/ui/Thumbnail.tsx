import styled from 'styled-components';

const StyledThumbnail = styled.button<{ withRootStyles: boolean }>`
  align-items: ${({ withRootStyles }) => (withRootStyles ? `flex-start` : 'center')};
  align-self: stretch;
  background-color: ${({ withRootStyles, theme }) =>
    withRootStyles ? theme.thumbnailBg : 'transparent'};
  border-radius: ${({ withRootStyles }) => withRootStyles && '8px'};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: ${({ withRootStyles }) => (withRootStyles ? 600 : 400)};
  justify-content: space-between;
  padding: 20px;
  outline: none;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.thumbnailBgHover};
  }

  p {
    margin-top: 20px;
  }
`;

const StyledImageWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;

type Props = {
  imgPath: string;
  name: string;
  withRootStyles?: boolean;
  onClick: (name: string) => void;
};

const Thumbnail: React.FC<Props> = ({ imgPath, name, withRootStyles = false, onClick }) => (
  <StyledThumbnail
    data-testid="thumbnail"
    onClick={() => onClick(name)}
    withRootStyles={withRootStyles}
  >
    <StyledImageWrapper>
      <img src={imgPath} alt={name} />
    </StyledImageWrapper>
    <p>{name}</p>
  </StyledThumbnail>
);

export default Thumbnail;
