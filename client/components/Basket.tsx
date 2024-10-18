import Image from 'next/image';
import styled from 'styled-components';

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
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  productsAmount: number;
}

export const Basket = ({ productsAmount }: Props) => {
  return (
    <BasketWrapper>
      {productsAmount && (
        <ProductQuantity title='Basket items'>{productsAmount}</ProductQuantity>
      )}
      <Image src='/basket.svg' width={25} height={25} alt='Shopping basket' />
    </BasketWrapper>
  );
};
