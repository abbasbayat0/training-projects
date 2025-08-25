import { create } from 'zustand';
import { Store } from '../types/types';

const store = create()((set) => ({

  activePage: window.location.pathname,
  setActivePage: (newItem) => set(() => ({ activePage: newItem })),

  cart: [],
  addToCart: (newItem, amount) => {
    set((state) => {
      const ex = state.cart.map((item) => {
        if (item.id === newItem.id)
          return {
            ...item,
            attributes: {
              ...item.attributes,
              amount: (item.attributes?.amount as number) + amount,
            },
          };
        return item;
      });
      const newOne =
        state.cart.length === 0
          ? [
              {
                ...newItem,
                attributes: { ...newItem.attributes, amount: amount },
              },
            ]
          : [...state.cart, ex];
      console.log(newOne);
      return { cart: newOne };
    });
  },
}));

export default store;
