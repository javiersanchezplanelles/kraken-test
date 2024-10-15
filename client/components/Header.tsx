import Image from 'next/image';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 80px;
  height: 100%;
`;

const CartWrapper = styled.div`
  position: relative;
`;

const ProductQuantity = styled.div`
  background-color: var(--ice);
  color: var(--siphon);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
