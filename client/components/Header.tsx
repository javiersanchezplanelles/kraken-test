import Image from 'next/image';
import styled from 'styled-components';
import { Basket } from './Basket';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 80px;
  height: 100%;
  padding: 0 20px;
`;

const BasketWrapper = styled.div`
  position: relative;
`;

const ProductQuantity = styled.div`
  position: absolute;
  right: -10px;
  bottom: 25px;
  background-color: var(--sohoLights);
  color: var(--siphon);
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

interface Props {
  productsOnBasket: number;
}

export const Header = ({ productsOnBasket }: Props) => {
  return (
    <HeaderWrapper>
      <Image
        src='/octopus-logo.svg'
        width={150}
        height={150}
        alt='Octopus logo'
      />
      <Basket productsAmount={productsOnBasket} />
    </HeaderWrapper>
  );
};
