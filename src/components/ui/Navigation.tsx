import { useContext } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import ArtboardNavigationContext from 'src/contexts/artboardNavigationContext';
import ThemeModeContext from 'src/contexts/themeModeContext';
import arrowLeftDarkPath from 'src/assets/arrow-left-dark.svg';
import arrowLeftLightPath from 'src/assets/arrow-left-light.svg';
import breadcrumbDarkPath from 'src/assets/breadcrumb-dark.svg';
import breadcrumbLightPath from 'src/assets/breadcrumb-light.svg';
import arrowRightDarkPath from 'src/assets/arrow-right-dark.svg';
import arrowRightLightPath from 'src/assets/arrow-right-light.svg';

const StyledNavigation = styled.nav`
  align-items: center;
  display: flex;
  gap: 8px;
`;

const StyledText = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

const Navigation: React.FC = () => {
  const { step, totalSteps, selectPrevStep, selectNextStep } =
    useContext(ArtboardNavigationContext);
  const { mode } = useContext(ThemeModeContext);

  const isLightMode = mode === 'LIGHT';

  return (
    <StyledNavigation>
      <IconButton
        iconPath={isLightMode ? arrowLeftDarkPath : arrowLeftLightPath}
        onClick={selectPrevStep}
      />
      <StyledText>{step}</StyledText>
      <img src={isLightMode ? breadcrumbDarkPath : breadcrumbLightPath} alt="step separator" />
      <StyledText>{totalSteps}</StyledText>
      <IconButton
        iconPath={isLightMode ? arrowRightDarkPath : arrowRightLightPath}
        onClick={selectNextStep}
      />
    </StyledNavigation>
  );
};

export default Navigation;
