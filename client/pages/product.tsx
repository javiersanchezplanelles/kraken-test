import { useState } from 'react';
import styled from 'styled-components';
import client from '../apolloClient';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductDetail } from '../components/ProductDetail';
import type {
  ProductQueryResponse,
  Product as ProductType,
} from '../domain/product.types';
import { PRODUCT_QUERY } from '../services/product.graphql';

export async function getStaticProps() {
  const { data }: { data: ProductQueryResponse } = await client.query({
    query: PRODUCT_QUERY,
    variables: { id: 1 },
  });

  return {
    props: {
      product: data.Product,
    },
  };
}

interface Props {
  product: ProductType;
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function Product({ product }: Props) {
  const [productsOnCart, setProductsOnCart] = useState<number | null>(null);

  return (
    <ProductWrapper>
      <Header productsOnCart={productsOnCart} />
      <ProductDetail
        product={product}
        updateProductsOnCart={setProductsOnCart}
      />
      <Footer />
    </ProductWrapper>
  );
}
