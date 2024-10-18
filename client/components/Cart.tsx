import Image from 'next/image';
import styled from 'styled-components';

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
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  productsAmount: number;
}

export const Cart = ({ productsAmount }: Props) => {
  return (
    <CartWrapper>
      {productsAmount && (
        <ProductQuantity title='Basket items'>{productsAmount}</ProductQuantity>
      )}
      <Image src='/basket.svg' width={30} height={30} alt='Shopping basket' />
    </CartWrapper>
  );
};
