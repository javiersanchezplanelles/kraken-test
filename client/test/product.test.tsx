import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const decreaseQuantity = screen.getByText('-');

    expect(currentQuantity).toHaveTextContent('1');

    await userEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent('2');

    await userEvent.click(decreaseQuantity);

    expect(currentQuantity).toHaveTextContent('1');
  });

  test('should be able to add items to the basket', async () => {
    const increaseQuantity = screen.getByText('+');
    const currentQuantity = screen.getByTitle('Current quantity');
    const addToBasketElement = screen.getByText('Add to cart');

    await userEvent.click(increaseQuantity);
    await userEvent.click(increaseQuantity);
    await userEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent('4');

    await userEvent.click(addToBasketElement);

    const basketItems = screen.getByTitle('Basket items');

    expect(basketItems).toHaveTextContent('4');
  });

  test('should have the quantity restart upon adding to cart', async () => {
    const increaseQuantity = screen.getByText('+');
    const currentQuantity = screen.getByTitle('Current quantity');
    const addToBasketElement = screen.getByText('Add to cart');

    await userEvent.click(increaseQuantity);
    await userEvent.click(increaseQuantity);
    await userEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent('4');

    await userEvent.click(addToBasketElement);

    expect(currentQuantity).toHaveTextContent('1');
  });

  test('should add up new items to the ones already in the basket', async () => {
    const increaseQuantity = screen.getByText('+');
    const addToBasketElement = screen.getByText('Add to cart');

    await userEvent.click(increaseQuantity);
    await userEvent.click(increaseQuantity);
    await userEvent.click(increaseQuantity);

    await userEvent.click(addToBasketElement);

    const basketItems = screen.getByTitle('Basket items');

    expect(basketItems).toHaveTextContent('4');

    await userEvent.click(increaseQuantity);
    await userEvent.click(increaseQuantity);
    await userEvent.click(addToBasketElement);

    expect(basketItems).toHaveTextContent('7');
  });
});
