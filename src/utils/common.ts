import {ICartItems} from './interfaces';

export const getCartItemCount = (list: Array<ICartItems>) => {
  return list?.reduce((cnt: number, e: ICartItems) => cnt + e.quantity, 0);
};
