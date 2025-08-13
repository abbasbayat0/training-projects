import { create } from "zustand";
import { Store } from "../types/types";

const store = create<Store>()((set) => ({
  dark: false,
  setTheme: () => set((state) => ({ dark: !state.dark })),
}));

export default store;
