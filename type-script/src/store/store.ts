import { create } from "zustand";
import type { Store } from "../types/types";
import info from "../../data";

// set is for setting data in current state & get is for getting data in current state
const useStore = create<Store>((set, get) => ({
  data: info,

  // set new Item In Data
  setData: (list) => set({ data: list }),

  // change isDone status
  changeDone: (id: number) => {
    const newData = get().data.map((item) => {
      if (item.id === id) return { ...item, isDone: !item.isDone };
      return item;
    });
    set({ data: newData });
  },
}));

export default useStore;
