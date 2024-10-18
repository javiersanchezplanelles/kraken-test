import Head from 'next/head';
import { useState } from 'react';
import client from '../apolloClient';
import { Layout } from '../components/Layout';
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

export default function Product({ product }: Props) {
  const [productsOnBasket, setProductsOnBasket] = useState<number | null>(null);

  return (
    <Layout productsOnBasket={productsOnBasket}>
      <Head>
        <title>Product page</title>
      </Head>
      <ProductDetail
        product={product}
        updateProductsOnBasket={setProductsOnBasket}
      />
    </Layout>
  );
}
