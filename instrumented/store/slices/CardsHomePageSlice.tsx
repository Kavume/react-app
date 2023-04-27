import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getFetchCards = createAsyncThunk(
  'cards/getFetchCards',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://api.unsplash.com/photos/?client_id=p5CxTsOwAVeWUyHi4DkvNtEtsfyUTRVzgEjZLOLJepI'
      );

      if (!response.ok) {
        throw new Error('Server error');
      }
      return response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const getSearchFetchCards = createAsyncThunk(
  'cards/getSearchFetchCards',
  async function (search: unknown, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${search}&client_id=p5CxTsOwAVeWUyHi4DkvNtEtsfyUTRVzgEjZLOLJepI`
      );

      if (!response.ok) {
        throw new Error("Can't get cards");
      }
      const cards = await response.json();
      return cards.results;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

interface Card {
  id: string;
  alt_description: string | undefined;
  user: {
    username: string;
    first_name: string;
    last_name: string;
    instagram_username: string | null | undefined;
  };
  urls: {
    small: string;
  };
  likes: number;
  links: {
    download: string;
  };
}

interface CardsHomePageState {
  cards: Card[];
  status: unknown;
  error: unknown;
}

const initialState: CardsHomePageState = {
  cards: [],
  status: null,
  error: null,
};

export const CardsHomePageSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFetchCards.pending, (state) => {
        state.status = 'Progressing...';
        state.error = null;
      })
      .addCase(getFetchCards.fulfilled, (state, action) => {
        state.status = 'Successfully loaded';
        state.error = null;
        state.cards = action.payload;
      })
      .addCase(getFetchCards.rejected, (state, action) => {
        state.status = 'Something went wrong ...';
        state.error = action.payload;
      })
      .addCase(getSearchFetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
      })
      .addCase(getSearchFetchCards.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {} = CardsHomePageSlice.actions;

export default CardsHomePageSlice.reducer;
