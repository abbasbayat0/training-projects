import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartProduct } from '../types/types';

const initialState: { cart: CartProduct[] } = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const { id, attributes } = action.payload;
      const { color, amount } = attributes;

      const existingIndex = state.cart.findIndex(
        (item) => item.id === id && item.attributes.color === color,
      );

      if (existingIndex >= 0) {
        state.cart[existingIndex].attributes.amount += amount;
      } else {
        state.cart.push({ id, attributes });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
