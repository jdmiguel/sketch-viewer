import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StyledLoader = styled.div`
  border: 4px solid ${({ theme }) => theme.palette.PRIMARY};
  border-top: 4px solid ${({ theme }) => theme.palette.SECONDARY};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate} 0.8s linear infinite;
`;

const Loader: React.FC = () => (
  <StyledLoaderWrapper>
    <StyledLoader role="progressbar" />
  </StyledLoaderWrapper>
);

export default Loader;
