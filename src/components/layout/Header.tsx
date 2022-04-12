import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from 'src/components/ui/IconButton';
import Navigation from 'src/components/ui/Navigation';
import ArtboardNavigationContext from 'src/contexts/artboardNavigationContext';
import logoPath from 'src/assets/sketch-logo.svg';
import closePath from 'src/assets/close.svg';
import separatorPath from 'src/assets/separator.svg';

export const StyledHeader = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.LIGHT_MAX};
  box-shadow: 0 2px 2px ${({ theme }) => theme.palette.DARK_TRANSPARENT};
  display: flex;
  gap: 14px;
  height: 32px;
  padding: 18px;
`;

export const StyledNavigationWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 14px;
`;

export const StyledLogo = styled.h1`
  line-height: 0;
`;

export const StyledTitleWrapper = styled.div<{ withNavigation: boolean }>`
  display: flex;
  left: ${({ withNavigation }) => withNavigation && '0'};
  justify-content: ${({ withNavigation }) => (withNavigation ? 'center' : 'flex-start')};
  position: ${({ withNavigation }) => withNavigation && 'absolute'};
  width: 100%;
  @media only screen and (max-width: 768px) {
    justify-content: flex-end;
    position: initial;
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.palette.DARK_MAX};
  font-size: 1.1rem;
  line-height: 0;
`;

type Props = {
  title: string;
  withNavigation?: boolean;
};

const Header: React.FC<Props> = ({ title, withNavigation = false }) => {
  const { closeArtboardDetailMode } = useContext(ArtboardNavigationContext);

  return (
    <StyledHeader>
      {withNavigation ? (
        <StyledNavigationWrapper>
          <IconButton iconPath={closePath} onClick={closeArtboardDetailMode} />
          <img src={separatorPath} alt="separator" />
          <Navigation />
        </StyledNavigationWrapper>
      ) : (
        <>
          <Link to="/">
            <StyledLogo>
              <img src={logoPath} alt="logo" />
            </StyledLogo>
          </Link>
          <img src={separatorPath} alt="separator" />
        </>
      )}
      <StyledTitleWrapper withNavigation={withNavigation}>
        <StyledTitle>{title}</StyledTitle>
      </StyledTitleWrapper>
    </StyledHeader>
  );
};

export default Header;
