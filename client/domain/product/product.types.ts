export interface ProductSpecifications {
  height: number;
  width: number;
  length: number;
  colour: string;
  brand: string;
  weight: number;
  model_code: string;
}

export interface ProductQueryResponse {
  Product: Product;
}

export interface Product {
  id: number;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  img_url: string;
  height: number;
  width: number;
  length: number;
  colour: string;
  brand: string;
  weight: number;
  model_code: string;
}
