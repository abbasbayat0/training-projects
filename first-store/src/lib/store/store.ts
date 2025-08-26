import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themeSlice';
import activePageReducer from '../features/activePageSlice';
import cartSliceReducer from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    activePage: activePageReducer,
    cartSlice: cartSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
