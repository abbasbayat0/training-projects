import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themeSlice';
import activePageReducer from '../features/activePageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    activePage: activePageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
