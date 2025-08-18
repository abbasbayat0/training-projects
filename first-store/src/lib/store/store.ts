import { create } from 'zustand';
import { Store } from '../types/types';

const store = create<Store>()((set) => ({
  dark: false,
  activePage: '/',
  setTheme: () => set((state) => ({ dark: !state.dark })),
  setActivePage: (newItem) => set(() => ({ activePage: newItem })),
}));

export default store;
