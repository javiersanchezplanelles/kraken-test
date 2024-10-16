import { gql } from '@apollo/client';
import { useState } from 'react';
import client from '../apolloClient';
import { ContentBlock } from '../components/ContentBlock';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductDetail } from '../components/ProductDetail';
import { ProductSpecifications } from '../components/ProductSpecifications';
import type {
  ProductQueryResponse,
  Product as ProductType,
} from '../domain/product.types';

export const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;

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

export default function Product({ product }: Props) {
  const [productsOnCart, setProductsOnCart] = useState<number | null>(null);
  const { height, width, length, colour, brand, weight, model_code } = product;

  return (
    <>
      <Header productsOnCart={productsOnCart} />
      <ProductDetail
        product={product}
        updateProductsOnCart={setProductsOnCart}
      />
      <ContentBlock heading='Description' content={product.description} />
      <ProductSpecifications
        content={{ height, width, length, colour, brand, weight, model_code }}
      />
      <Footer />
    </>
  );
}
