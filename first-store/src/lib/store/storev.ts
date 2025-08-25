import { create } from 'zustand';
import { Store } from '../types/types';

const store = create<Store>()((set) => ({
  dark: Boolean(JSON.parse(localStorage.getItem('theme') as string)) || false,
  setTheme: () =>
    set((state) => {
      const newTheme = !state.dark;
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return { dark: newTheme };
    }),

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
