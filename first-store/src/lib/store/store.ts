import { create } from 'zustand';
import { Store } from '../types/types';

const store = create<Store>()((set) => ({
  dark: Boolean(JSON.parse(localStorage.getItem('theme') as string)) || false,
  activePage: window.location.pathname,
  setTheme: () =>
    set((state) => {
      const newTheme = !state.dark;
      localStorage.setItem('theme', JSON.stringify(newTheme));
      return { dark: newTheme };
    }),
  setActivePage: (newItem) => set(() => ({ activePage: newItem })),
}));

export default store;
