import Image from 'next/image';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 80px;
  height: 100%;
  padding: 0 20px;
`;

const CartWrapper = styled.div`
  position: relative;
`;

const ProductQuantity = styled.div`
  position: absolute;
  right: -10px;
  bottom: 25px;
  background-color: var(--sohoLights);
  color: var(--siphon);
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  productsOnCart: number;
}

export const Header = ({ productsOnCart }: Props) => {
  return (
    <HeaderWrapper>
      <Image src='/octopus-logo.svg' width={150} height={150} />
      <CartWrapper>
        {productsOnCart && (
          <ProductQuantity title='Basket items'>
            {productsOnCart}
          </ProductQuantity>
        )}
        <Image src='/basket.svg' width={30} height={30} />
      </CartWrapper>
    </HeaderWrapper>
  );
};
