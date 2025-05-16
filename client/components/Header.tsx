import Image from 'next/image';
import styled from 'styled-components';
import { Basket } from './Basket';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 60px;
  height: 100%;
  padding: 0 20px;
`;

interface Props {
  productsOnBasket: number;
}

export const Header = ({ productsOnBasket }: Props) => {
  return (
    <HeaderWrapper>
      <Image
        src='/company-logo.jpg'
        width={60}
        height={60}
        alt='Company logo'
      />
      <Basket productsAmount={productsOnBasket} />
    </HeaderWrapper>
  );
};
