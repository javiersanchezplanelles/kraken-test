import { Dispatch, SetStateAction, useState } from 'react';
import styled, { css } from 'styled-components';
import { Product } from '../domain/product/product.types';
import { ContentBlock } from './ContentBlock';
import { Counter } from './Counter';
import { CtaButton } from './CtaButton';
import {
  FlexColumnWrapper,
  MobileMarginTop,
  TopContentWrapper,
} from './LayoutWrappers';
import { Price } from './Price';
import { ProductImage } from './ProductImage';
import { ProductSpecifications } from './ProductSpecifications';
import { FirstHeading } from './Typography';

const basePadding = css`
  padding: 0 20px;
`;

const ProductImageWrapper = styled.div`
  ${basePadding}
  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 1400px) {
    width: 40%;
  }
`;

const PriceCounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  margin: 18px 0;
`;

const Subheading = styled.p`
  color: var(--purpleHaze);
  margin-top: 10px;
`;

const FlexWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    height: 100%;
  }
`;

interface Props {
  product: Product;
  updateProductsOnBasket: Dispatch<SetStateAction<number>>;
}

export const ProductDetail = ({ product, updateProductsOnBasket }: Props) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const { height, width, length, colour, brand, weight, model_code } = product;

  const handleIncreaseQuantity = () =>
    setProductQuantity((prevState) => prevState + 1);

  const handleReduceQuantity = () =>
    setProductQuantity((prevState) => prevState - 1);

  const handleAddToBasket = () => {
    updateProductsOnBasket((prevState: number) => prevState + productQuantity);
    setProductQuantity(1);
  };

  return (
    <FlexWrapper>
      <ProductImageWrapper>
        <ProductImage imageUrl={product.img_url} />
      </ProductImageWrapper>
      <FlexColumnWrapper>
        <TopContentWrapper>
          <FirstHeading>{product.name}</FirstHeading>
          <Subheading>
            {product.power} // Packet of {product.quantity}
          </Subheading>
          <PriceCounterWrapper>
            <Price total={product.price} />
            <Counter
              currentQuantity={productQuantity}
              handleIncreaseClick={handleIncreaseQuantity}
              handleDecreaseClick={handleReduceQuantity}
            />
          </PriceCounterWrapper>
          <CtaButton text='Add to cart' handleClick={handleAddToBasket} />
        </TopContentWrapper>
        <MobileMarginTop>
          <ContentBlock heading='Description' content={product.description} />
        </MobileMarginTop>
        <ProductSpecifications
          content={{
            height,
            width,
            length,
            colour,
            brand,
            weight,
            model_code,
          }}
        />
      </FlexColumnWrapper>
    </FlexWrapper>
  );
};
