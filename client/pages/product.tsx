import Head from 'next/head';
import { useState } from 'react';
import client from '../apolloClient';
import { Layout } from '../components/Layout';
import { ProductDetail } from '../components/ProductDetail';
import type { Product as ProductType } from '../domain/product/product.types';
import { PRODUCT_QUERY } from '../services/product.graphql';

export async function getStaticProps() {
  const { data, errors } = await client.query({
    query: PRODUCT_QUERY,
    variables: { id: 1 },
  });

  if (errors) {
    return {
      notFound: true,
    };
  }

  if (!data || !data.Product) {
    return {
      notFound: true,
    };
  }

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
  const [productsOnBasket, setProductsOnBasket] = useState<number>(0);

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
