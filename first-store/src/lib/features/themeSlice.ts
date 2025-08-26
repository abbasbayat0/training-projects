import { createSlice } from '@reduxjs/toolkit';

// const getLocalTheme = () => {
//   if (typeof window === 'undefined') return false;
//   const localTheme = localStorage.getItem('theme');
//   if (localTheme === null) return false;
//   try {
//     return JSON.parse(localTheme);
//   } catch {
//     return false;
//   }
// };

const initialState = {
  dark: Boolean(JSON.parse(localStorage.getItem('theme') as string)),
};
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.dark = !state.dark;
      localStorage.setItem('theme', JSON.stringify(state.dark));
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
