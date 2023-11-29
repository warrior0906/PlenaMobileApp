import {getCartTotal} from '../../utils/common';
import {ICartItems} from '../../utils/interfaces';

export const cartDetails = (list: Array<ICartItems>) => {
  const total = getCartTotal(list);
  const deliveryCharge: number = 2;
  return [
    {title: 'Subtotal', value: `$${total}`},
    {title: 'Delivery', value: `$${deliveryCharge.toString()}.00`},
    {title: 'Total', value: `$${total + deliveryCharge}`},
  ];
};
