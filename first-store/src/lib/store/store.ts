import { create } from "zustand";
import { Store } from "../types/types";

const store = create<Store>()((set, get) => ({
  dark: false,
}));

export default store;
