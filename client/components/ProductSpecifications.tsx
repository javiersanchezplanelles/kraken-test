import styled from 'styled-components';
import type { ProductSpecifications as ProductSpecificationsType } from '../domain/product.types';

interface Props {
  content: ProductSpecificationsType;
}

const Heading = styled.h2`
  font-weight: 500;
  margin-top: 0;
`;

const Text = styled.p`
  font-weight: 300;
  width: 50%;
  &:not(:nth-last-child(-n + 2)) {
    margin-bottom: 25px;
  }
`;

const ProductSpecificationsWrapper = styled.div`
  padding: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductSpecifications = ({ content }: Props) => {
  return (
    <ProductSpecificationsWrapper>
      <Heading>Specifications</Heading>
      <FlexWrapper>
        <Text>Brand</Text>
        <Text>{content.brand}</Text>

        <Text>Item weight (g)</Text>
        <Text>{content.weight}</Text>

        <Text>Dimensions (cm)</Text>
        <Text>
          {content.height} x {content.length} x {content.width}
        </Text>

        <Text>Item Model number</Text>
        <Text>{content.model_code}</Text>

        <Text>Colour</Text>
        <Text>{content.colour}</Text>
      </FlexWrapper>
    </ProductSpecificationsWrapper>
  );
};
