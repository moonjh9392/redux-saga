import { createSlice } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';
import catSaga from './catSaga';

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

export function* rootSaga() {
  // all 은 여러 사가를 동시에 실행시켜준다. 현재는 animalSaga 하나.
  yield all([catSaga]);
}

export const { getCatsFetch, getCatsSuccess, getCatsFailure } = catslice.actions;
export default catslice.reducer;
