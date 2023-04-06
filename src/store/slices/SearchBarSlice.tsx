import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

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
      console.log(state, action);
    },
  },
});

export const { getSearchData } = SearchBarSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.value;

export default SearchBarSlice.reducer;
