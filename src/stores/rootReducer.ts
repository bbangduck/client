import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import filterItemTypeReducer from './filterItemTypeReducer/filterItemTypeReducer';

const reducer = combineReducers({
  filterItemTypeReducer,
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;

export type ReducerType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
