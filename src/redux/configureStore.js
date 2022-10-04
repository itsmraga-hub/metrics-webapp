import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import casesReducer from './covidcases';

const rootReducer = combineReducers({
  cases: casesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
