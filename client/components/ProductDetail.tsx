import { Dispatch, SetStateAction, useState } from 'react';
import styled, { css } from 'styled-components';
import { Product } from '../domain/product/product.types';
import { ContentBlock } from './ContentBlock';
import { Counter } from './Counter';
import { CtaButton } from './CtaButton';
import { Price } from './Price';
import { ProductImage } from './ProductImage';
import { ProductSpecifications } from './ProductSpecifications';

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

const Heading = styled.h1`
  margin-bottom: 8px;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const FlexWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    height: 100%;
  }
`;

const FlexColumnWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    width: 70%;
  }

  @media (min-width: 1400px) {
    width: 40%;
  }
`;

const ContentBlockWrapper = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const TopContentWrapper = styled.div`
  ${basePadding}
  @media (min-width: 768px) {
    width: 70%;
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
          <Heading>{product.name}</Heading>
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
        <ContentBlockWrapper>
          <ContentBlock heading='Description' content={product.description} />
        </ContentBlockWrapper>
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
