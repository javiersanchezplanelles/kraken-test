import { gql } from '@apollo/client';
import { useState } from 'react';
import client from '../apolloClient';
import { Header } from '../components/Header';
import { ProductImage } from '../components/ProductImage';

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
  const [productQuantity, setProductQuantity] = useState(1);
  const [productsOnCart, setProductsOnCart] = useState(null);

  const handleIncreaseQuantity = () =>
    setProductQuantity((prevState) => prevState + 1);

  const handleReduceQuantity = () =>
    setProductQuantity((prevState) => prevState - 1);

  const handleAddToCart = () => {
    setProductsOnCart((prevState: number) => prevState + productQuantity);
    setProductQuantity(1);
  };

  return (
    <>
      <Header productsOnCart={productsOnCart} />
      <ProductImage imageUrl={product.img_url} />
      <h1> {product.name}</h1>
      <p> {product.power}</p>
      <p> {product.quantity}</p>
      {product.price}GBP
      <div>
        <button onClick={handleReduceQuantity} disabled={productQuantity === 1}>
          -
        </button>
        <span title='Current quantity'>{productQuantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </>
  );
}
