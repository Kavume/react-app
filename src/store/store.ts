import { configureStore } from '@reduxjs/toolkit';
import { SearchBarSlice } from './slices/SearchBarSlice';

export const store = configureStore({
  reducer: {
    search: SearchBarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
