import { useContext } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import ArtboardNavigationContext from 'src/contexts/artboardNavigationContext';
import arrowLeftPath from 'src/assets/arrow-left.svg';
import breadcrumbPath from 'src/assets/breadcrumb.svg';
import arrowRightPath from 'src/assets/arrow-right.svg';

const StyledNavigation = styled.nav`
  display: flex;
  gap: 8px;
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.palette.DARK_MIN};
  font-size: 1.1rem;
  font-weight: 600;
`;

const Navigation: React.FC = () => {
  const { step, totalSteps, selectPrevStep, selectNextStep } =
    useContext(ArtboardNavigationContext);

  return (
    <StyledNavigation>
      <IconButton iconPath={arrowLeftPath} onClick={selectPrevStep} />
      <StyledText>{step}</StyledText>
      <img src={breadcrumbPath} alt="step separator" />
      <StyledText>{totalSteps}</StyledText>
      <IconButton iconPath={arrowRightPath} onClick={selectNextStep} />
    </StyledNavigation>
  );
};

export default Navigation;
