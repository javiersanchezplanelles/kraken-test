import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import Product from '../pages/product';
import { apolloMocks, productMock } from './mocks/product.mock';

describe('Product page', () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={apolloMocks} addTypename={false}>
        <Product product={productMock} />
      </MockedProvider>
    );
  });

  test('should be able to increase and decrease product quantity', async () => {
    const increaseQuantity = screen.getByText('+');

    const currentQuantity = screen.getByTitle('Current quantity');
    expect(currentQuantity).toHaveTextContent('1');

    fireEvent.click(increaseQuantity);
    expect(currentQuantity).toHaveTextContent('2');

    const decreaseQuantity = screen.getByText('-');

    fireEvent.click(decreaseQuantity);
    expect(currentQuantity).toHaveTextContent('1');
  });

  test('should be able to add items to the basket', async () => {
    const increaseQuantity = screen.getByText('+');

    const currentQuantity = screen.getByTitle('Current quantity');

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent('4');

    const addToBasketElement = screen.getByText('Add to cart');
    fireEvent.click(addToBasketElement);

    const basketItems = screen.getByTitle('Basket items');
    expect(basketItems).toHaveTextContent('4');
  });
});
