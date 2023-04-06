import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ContactFormState {
  cards: Record<string, unknown>[];
  isSubmit: boolean;
  error: string | null;
}

const initialState: ContactFormState = {
  cards: [],
  isSubmit: false,
  error: null,
};

export const ContactFormSlice = createSlice({
  name: 'cardsContactForm',
  initialState,
  reducers: {
    createContactFormCard: (state, action) => {
      console.log(action.payload);
      state.cards = [...state.cards, action.payload.cards];
      state.isSubmit = true;
    },
    resetForm: (state) => {
      state.isSubmit = false;
    },
  },
});

export const { createContactFormCard, resetForm } = ContactFormSlice.actions;

export const ContactFormData = (state: RootState) => state.search.value;

export default ContactFormSlice.reducer;
