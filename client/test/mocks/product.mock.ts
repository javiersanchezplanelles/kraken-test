import { PRODUCT_QUERY } from '../../services/product.graphql';

export const productMock = {
  id: 1,
  name: 'Energy saving light bulb',
  power: '25W',
  description:
    'Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb',
  price: 12.99,
  quantity: 4,
  brand: 'Philips',
  weight: 77,
  height: 12.6,
  width: 6.2,
  length: 6.2,
  model_code: 'E27 ES',
  colour: 'Cool daylight',
  img_url: 'https://i.ibb.co/2nzwxnQ/bulb.png',
};

export const apolloMocks = [
  {
    request: {
      query: PRODUCT_QUERY,
      variables: { id: 1 },
    },
    result: {
      data: {
        Product: productMock,
      },
    },
  },
];
