import { createSlice } from '@reduxjs/toolkit';

export const catslice = createSlice({
  name: 'cat',
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: (state) => {
      console.log('11');
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      console.log('22');
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = true;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catslice.actions;
export default catslice.reducer;
