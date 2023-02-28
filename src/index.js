import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './catState';
import catSaga from './catSaga';

const saga = createSagaMiddleware();
//store
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [saga],
});
//불러온 catSaga를 실행
saga.run(catSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
