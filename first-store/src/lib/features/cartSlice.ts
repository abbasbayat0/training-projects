import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Attributes, CartPayload, SingleProduct } from '../types/types';

const initialState: { cart: SingleProduct[] } = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartPayload>) => {
      const { newItem, amount } = action.payload;
      const existingIndex = state.cart.findIndex((item) => item.id === newItem.id);
      if (existingIndex >= 0) {
        const existingAmount = state.cart[existingIndex].attributes?.amount || 0;
        state.cart[existingIndex] = {
          ...state.cart[existingIndex],
          attributes: {
            ...state.cart[existingIndex].attributes,
            amount: existingAmount + amount,
          } as Attributes,
        };
      } else {
        const newOne = { ...newItem, attributes: { ...newItem.attributes, amount: amount } };
        state.cart.push(newOne as SingleProduct);
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
