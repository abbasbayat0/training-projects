import { CartProduct } from '../types/types';

export const calculateTotal = (cart: CartProduct[]) => {
  let totalPrice = 0;
  let totalAmount = 0;
  cart.map((item) => {
    totalAmount += item.attributes.amount;
    totalPrice = Number(item.attributes.price) * item.attributes.amount;
  });
  return { totalAmount, totalPrice };
};
