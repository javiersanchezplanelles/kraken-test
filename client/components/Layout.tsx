import { ReactNode } from 'react';
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

interface Props {
  children: ReactNode;
  productsOnBasket?: number;
}

export const Layout = ({ children, productsOnBasket }: Props) => {
  return (
    <LayoutWrapper>
      <Header productsOnBasket={productsOnBasket} />
      <MainContent> {children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};
