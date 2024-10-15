import { Dispatch, SetStateAction, useState } from 'react';
import { Product } from '../domain/product.types';
import { Counter } from './Counter';
import { CtaButton } from './CtaButton';
import { ProductImage } from './ProductImage';

interface Props {
  product: Product;
  updateProductsOnCart: Dispatch<SetStateAction<number>>;
}

export const ProductDetail = ({ product, updateProductsOnCart }: Props) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const handleIncreaseQuantity = () =>
    setProductQuantity((prevState) => prevState + 1);

  const handleReduceQuantity = () =>
    setProductQuantity((prevState) => prevState - 1);

  const handleAddToCart = () => {
    updateProductsOnCart((prevState: number) => prevState + productQuantity);
    setProductQuantity(1);
  };

  return (
    <>
      <ProductImage imageUrl={product.img_url} />
      <h1>{product.name}</h1>
      <div>
        <span>
          {product.power} // Packet of {product.quantity}
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        £{product.price}
        <Counter
          currentQuantity={productQuantity}
          handleIncreaseClick={handleIncreaseQuantity}
          handleDecreaseClick={handleReduceQuantity}
        />
      </div>
      <CtaButton text='Add to cart' handleClick={handleAddToCart} />
    </>
  );
};
