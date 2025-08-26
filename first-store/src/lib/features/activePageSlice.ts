import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { activePage: typeof window === 'undefined' ? '/' : window.location.pathname };
const activePageSlice = createSlice({
  name: 'activePage',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
  },
});

export const { setActivePage } = activePageSlice.actions;
export default activePageSlice.reducer;
