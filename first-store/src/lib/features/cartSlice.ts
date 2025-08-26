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
        let currentAmount = state.cart[existingIndex].attributes.amount;
        currentAmount += amount;
        if (currentAmount > 20) currentAmount = 20;
      } else {
        state.cart.push({ id, attributes });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    updateAmount: (state, action: PayloadAction<{ id: number; amount: number; color: string }>) => {
      const { id, amount, color } = action.payload;
      const existingIndex = state.cart.findIndex(
        (item) => item.id === id && item.attributes.color === color,
      );
      if (existingIndex >= 0) {
        state.cart[existingIndex].attributes.amount = amount;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeItem: (state, action: PayloadAction<{ id: number; color: string }>) => {
      const { id, color } = action.payload;
      const existingIndex = state.cart.findIndex(
        (item) => item.id === id && item.attributes.color === color,
      );
      state.cart.splice(existingIndex, 1);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, updateAmount, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
