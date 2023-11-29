export interface IProductItemInterface {
  title: string;
  brand: string;
  category: string;
  description: string;
  id: number;
  price: number;
  rating: number;
  stock: number;
  discountPercentage: number;
  thumbnail: string;
  images: Array<string>;
  favorite: boolean;
}

export interface IProductListInterface {
  limit: number;
  products: Array<IProductItemInterface>;
}

export interface ProductState {
  loading: boolean;
  productList: IProductListInterface | null;
  selectedProduct: IProductItemInterface | null;
}
export interface ICartState {
  itemList: Array<ICartItems>;
}

export interface ICartItems {
  items: IProductItemInterface;
  quantity: number;
}
