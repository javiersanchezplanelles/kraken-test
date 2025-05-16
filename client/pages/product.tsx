import { ApolloQueryResult } from '@apollo/client';
import Head from 'next/head';
import { useState } from 'react';
import apolloClient from '../apolloClient';
import { Layout } from '../components/Layout';
import { ProductDetail } from '../components/ProductDetail';
import { ProductReview } from '../components/ProductReview';
import type {
  ProductQueryResponse,
  Product as ProductType,
} from '../domain/product/product.types';
import { PRODUCT_QUERY } from '../services/product.graphql';

export async function getStaticProps() {
  try {
    const { data, error }: ApolloQueryResult<ProductQueryResponse> =
      await apolloClient.query({
        query: PRODUCT_QUERY,
        variables: { id: 1 },
      });

    if (error) {
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
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

interface Props {
  product: ProductType;
}

export default function Product({ product }: Props) {
  const [productsOnBasket, setProductsOnBasket] = useState<number>(0);

  return (
    <Layout productsOnBasket={productsOnBasket}>
      <Head>
        <title>{product.name}</title>
      </Head>
      <ProductDetail
        product={product}
        updateProductsOnBasket={setProductsOnBasket}
      />
      <ProductReview />
    </Layout>
  );
}
