import { gql } from '@apollo/client';
import client from '../apolloClient';

const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    Product(id: $id) {
      id
      name
      description
    }
  }
`;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: PRODUCT_QUERY,
    variables: { id: 1 },
  });

  return {
    props: {
      product: data,
    },
  };
}

export default function Product({ product }) {
  return <div>{product.Product.name}</div>;
}
