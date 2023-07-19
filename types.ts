export interface rating {
  count: number;
  rate: number;
}

export interface product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: rating;
  title: string;
}

export interface productProp {
  productInfo: product;
  // didBuy: Boolean;
  addProductEventHandler: Function;
  removeProductEventHandler: Function;
  didBuy?: Boolean;
}

export type productArray = product[];
