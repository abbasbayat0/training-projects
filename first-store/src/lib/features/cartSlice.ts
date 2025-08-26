import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartProduct } from '../types/types';
import { calculateTotal } from '../utils/calculateTotal';

const initialState: { cart: CartProduct[]; totalPrice: number; totalAmount: number } = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  totalPrice: 0,
  totalAmount: 0,
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
        if (state.cart[existingIndex].attributes.amount > 20)
          state.cart[existingIndex].attributes.amount = 20;
      } else {
        state.cart.push({ id, attributes });
      }
      state.totalAmount = calculateTotal(state.cart).totalAmount;
      state.totalPrice = calculateTotal(state.cart).totalPrice;
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
      state.totalAmount = calculateTotal(state.cart).totalAmount;
      state.totalPrice = calculateTotal(state.cart).totalPrice;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeItem: (state, action: PayloadAction<{ id: number; color: string }>) => {
      const { id, color } = action.payload;
      const existingIndex = state.cart.findIndex(
        (item) => item.id === id && item.attributes.color === color,
      );
      state.cart.splice(existingIndex, 1);
      state.totalAmount = calculateTotal(state.cart).totalAmount;
      state.totalPrice = calculateTotal(state.cart).totalPrice;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, updateAmount, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
