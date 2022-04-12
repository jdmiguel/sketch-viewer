import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

export const StyledLayout = styled.div`
  background-color: ${({ theme }) => theme.palette.LIGHT_MEDIUM};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

export const StyledMain = styled.main`
  padding: 30px;
`;

type Props = {
  title: string;
  withNavigation?: boolean;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ title, withNavigation, children }) => (
  <StyledLayout>
    <Header title={title} withNavigation={withNavigation} />
    <StyledMain>{children}</StyledMain>
  </StyledLayout>
);

export default Layout;
