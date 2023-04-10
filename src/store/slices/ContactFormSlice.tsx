import { createSlice } from '@reduxjs/toolkit';

export interface ContactFormState {
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
      state.cards = [...state.cards, action.payload.cards];
      state.isSubmit = true;
    },
    resetForm: (state) => {
      state.isSubmit = false;
    },
  },
});

export const { createContactFormCard, resetForm } = ContactFormSlice.actions;

export default ContactFormSlice.reducer;
