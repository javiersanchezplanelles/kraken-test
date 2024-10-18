import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

export const Layout = ({ children, productsOnCart }) => {
  return (
    <LayoutWrapper>
      <Header productsOnCart={productsOnCart} />
      <MainContent> {children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};
