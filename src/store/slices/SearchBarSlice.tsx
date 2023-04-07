import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface searchBarState {
  value: string;
}

const initialState: searchBarState = {
  value: '',
};

export const SearchBarSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearchData: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { getSearchData } = SearchBarSlice.actions;

export default SearchBarSlice.reducer;
