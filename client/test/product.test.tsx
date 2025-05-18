import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from '../pages';
import { apolloMocks, productMock } from './mocks/product.mock';

describe('Product page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <MockedProvider mocks={apolloMocks} addTypename={false}>
        <Product product={productMock} />
      </MockedProvider>
    );
  });

  describe('adding and removing items', () => {
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
  });

  describe('adding and removing items in the basket', () => {
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

  describe('giving customer feedback', () => {
    const author = 'Miguel';
    const shortReview = 'Works as expected';
    const longReview =
      'I could not believe this light bulb would last this long! I am so over the moon with this purchase. You can also switch between different colours. I highly recommend this product.';

    test('should be able to submit feedback', async () => {
      const nameInput = screen.getByPlaceholderText('Your public name');
      const textInput = screen.getByPlaceholderText('Write your thoughts here');
      const submitButton = screen.getByRole('button', {
        name: 'Submit',
      });

      await userEvent.type(nameInput, author);
      await userEvent.type(textInput, longReview);
      await userEvent.click(submitButton);

      const review = await screen.findByTestId('reviewContent');

      await waitFor(() => {
        expect(review).toBeInTheDocument();
      });
    });

    test('should show an error message if user does not enter their name ', async () => {
      const submitButton = screen.getByRole('button', {
        name: 'Submit',
      });

      userEvent.click(submitButton);

      const errorMessage = await screen.findByText('Please enter your name');

      expect(errorMessage).toBeInTheDocument();
    });

    test('should show an error message if user does not write a message ', async () => {
      const submitButton = screen.getByRole('button', {
        name: 'Submit',
      });

      userEvent.click(submitButton);

      const errorMessage = await screen.findByText('Please leave your review');

      expect(errorMessage).toBeInTheDocument();
    });

    test('should show an error message if the review is not 50 characters long', async () => {
      const nameInput = screen.getByPlaceholderText('Your public name');
      const textInput = screen.getByPlaceholderText('Write your thoughts here');
      const submitButton = screen.getByRole('button', {
        name: 'Submit',
      });

      userEvent.type(nameInput, author);
      userEvent.type(textInput, shortReview);
      userEvent.click(submitButton);

      const shortReviewFeedback = await screen.findByText(
        'Please ensure the text is at least 50 characters'
      );

      expect(shortReviewFeedback).toBeInTheDocument();
    });

    test('should be able to delete review', async () => {
      const nameInput = screen.getByPlaceholderText('Your public name');
      const textInput = screen.getByPlaceholderText('Write your thoughts here');
      const submitButton = screen.getByRole('button', {
        name: 'Submit',
      });

      await userEvent.type(nameInput, author);
      await userEvent.type(textInput, longReview);
      await userEvent.click(submitButton);

      const review = screen.queryByTestId('reviewContent');

      await waitFor(() => {
        expect(review).toBeInTheDocument();
      });

      const deleteButton = await screen.findByRole('button', {
        name: 'Delete',
      });

      await userEvent.click(deleteButton);

      await waitFor(() => {
        expect(review).not.toBeInTheDocument();
      });
    });
  });
});
