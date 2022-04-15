import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from 'src/components/ui/IconButton';
import Navigation from 'src/components/ui/Navigation';
import ArtboardNavigationContext from 'src/contexts/artboardNavigationContext';
import ThemeModeContext from 'src/contexts/themeModeContext';
import logoPath from 'src/assets/sketch-logo.svg';
import closeDarkPath from 'src/assets/close-dark.svg';
import closeLightPath from 'src/assets/close-light.svg';
import separatorDarkPath from 'src/assets/separator-dark.svg';
import separatorLightPath from 'src/assets/separator-light.svg';
import darkIconPath from 'src/assets/dark-icon.svg';
import lightIconPath from 'src/assets/light-icon.svg';

export const StyledHeader = styled.header<{ withNavigation: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.headerBg};
  box-shadow: 0 2px 2px ${({ theme }) => theme.shadow};
  display: flex;
  gap: 12px;
  height: 32px;
  justify-content: ${({ withNavigation }) => (withNavigation ? 'space-between' : 'flex-start')};
  padding: 18px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const StyledNavigationWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 4px;
  height: 100%;
  flex: 1;
`;

export const StyledLogo = styled.h1`
  line-height: 0;
`;

export const StyledTitleWrapper = styled.div<{ withNavigation: boolean }>`
  @media only screen and (max-width: 768px) {
    justify-content: flex-end;
    position: initial;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 1.1rem;
`;

export const StyledThemeButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

type Props = {
  title: string;
  withNavigation?: boolean;
};

const Header: React.FC<Props> = ({ title, withNavigation = false }) => {
  const { mode, selectMode } = useContext(ThemeModeContext);
  const { closeArtboardDetailMode } = useContext(ArtboardNavigationContext);

  const isLightMode = mode === 'LIGHT';

  return (
    <StyledHeader withNavigation={withNavigation}>
      {withNavigation ? (
        <StyledNavigationWrapper>
          <IconButton
            iconPath={isLightMode ? closeDarkPath : closeLightPath}
            onClick={closeArtboardDetailMode}
          />
          <img src={isLightMode ? separatorDarkPath : separatorLightPath} alt="separator" />
          <Navigation />
        </StyledNavigationWrapper>
      ) : (
        <>
          <Link to="/">
            <StyledLogo>
              <img src={logoPath} alt="logo" />
            </StyledLogo>
          </Link>
          <img src={isLightMode ? separatorDarkPath : separatorLightPath} alt="separator" />
        </>
      )}
      <StyledTitleWrapper withNavigation={withNavigation}>
        <StyledTitle>{title}</StyledTitle>
      </StyledTitleWrapper>
      <StyledThemeButtonWrapper>
        <IconButton iconPath={isLightMode ? darkIconPath : lightIconPath} onClick={selectMode} />
      </StyledThemeButtonWrapper>
    </StyledHeader>
  );
};

export default Header;
