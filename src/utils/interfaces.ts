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
  images: any; // need to update
}

export interface IProductListInterface {
  limit: number;
  products: Array<IProductItemInterface>;
}

export interface ProductState {
  loading: boolean;
  productList: IProductListInterface;
}
