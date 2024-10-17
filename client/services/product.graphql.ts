import { gql } from "@apollo/client";

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