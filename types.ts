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
  addProductEventHandler: Function;
  removeProductEventHandler: Function;
  didBuy?: Boolean;
}

export interface CartProductProp {
  productInfo: product;
}

export type productArray = product[];
