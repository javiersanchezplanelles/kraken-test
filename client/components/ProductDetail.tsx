import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { Product } from '../domain/product.types';
import { Counter } from './Counter';
import { CtaButton } from './CtaButton';
import { ProductImage } from './ProductImage';

interface Props {
  product: Product;
  updateProductsOnCart: Dispatch<SetStateAction<number>>;
}

const ProductDetailWrapper = styled.div`
  padding: 0 20px 20px;
`;

const Price = styled.span`
  align-self: flex-end;
`;

const PriceQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  margin-bottom: 18px;
`;

const Subheading = styled.p`
  color: var(--purpleHaze);
  margin-top: 10px;
`;

const Heading = styled.h1`
  margin-bottom: 8px;
  font-weight: 500;
`;

export const ProductDetail = ({ product, updateProductsOnCart }: Props) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const handleIncreaseQuantity = () =>
    setProductQuantity((prevState) => prevState + 1);

  const handleReduceQuantity = () =>
    setProductQuantity((prevState) => prevState - 1);

  const handleAddToCart = () => {
    updateProductsOnCart((prevState: number) => prevState + productQuantity);
    setProductQuantity(1);
  };

  return (
    <ProductDetailWrapper>
      <ProductImage imageUrl={product.img_url} />
      <Heading>{product.name}</Heading>
      <Subheading>
        {product.power} // Packet of {product.quantity}
      </Subheading>
      <PriceQuantityWrapper>
        <Price>£{product.price}</Price>
        <Counter
          currentQuantity={productQuantity}
          handleIncreaseClick={handleIncreaseQuantity}
          handleDecreaseClick={handleReduceQuantity}
        />
      </PriceQuantityWrapper>
      <CtaButton text='Add to cart' handleClick={handleAddToCart} />
    </ProductDetailWrapper>
  );
};
