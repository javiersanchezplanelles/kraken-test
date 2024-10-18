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
  margin-top: 10px;
`;

export const Layout = ({ children, productsOnBasket }) => {
  return (
    <LayoutWrapper>
      <Header productsOnBasket={productsOnBasket} />
      <MainContent> {children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};
