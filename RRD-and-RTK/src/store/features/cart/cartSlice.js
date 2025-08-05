import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  name: "abbas",
};
const cartSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    clearName: (state) => {state.name = ""
    },
    removeOne: (state, action)=>{console.log(action.payload)}
  },
});

export default cartSlice.reducer;

export const { clearName, removeOne } = cartSlice.actions;
