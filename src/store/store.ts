import { configureStore } from '@reduxjs/toolkit';
import { SearchBarSlice } from './slices/SearchBarSlice';
import { ContactFormSlice } from './slices/ContactFormSlice';

export const store = configureStore({
  reducer: {
    search: SearchBarSlice.reducer,
    cardsContactForm: ContactFormSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
