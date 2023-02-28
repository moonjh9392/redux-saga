import { createSlice } from '@reduxjs/toolkit';

export const catslice = createSlice({
  name: 'cat',
  initialState: {
    cats: [],
    isLoading: false,
  },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = true;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catslice.actions;
export default catslice.reducers;
