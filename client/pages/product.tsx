import { gql } from '@apollo/client';
import { useState } from 'react';
import client from '../apolloClient';
import { Header } from '../components/Header';
import { ProductDetail } from '../components/ProductDetail';

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
  const { data } = await client.query({
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
  product: {
    id: number;
    name: string;
    power: string;
    description: string;
    price: number;
    quantity: number;
    brand: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    model_code: string;
    colour: string;
    img_url: string;
  };
}

export default function Product({ product }: Props) {
  const [productsOnCart, setProductsOnCart] = useState<number | null>(null);

  return (
    <>
      <Header productsOnCart={productsOnCart} />
      <ProductDetail
        product={product}
        updateProductsOnCart={setProductsOnCart}
      />
    </>
  );
}
