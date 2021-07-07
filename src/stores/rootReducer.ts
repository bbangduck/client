import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import popAlarm from './popAlarmReducer';
import hardBox from './ThemeReviewReducer/hardBox';
import scaryBox from './ThemeReviewReducer/scaryBox';
import activityBox from './ThemeReviewReducer/activityBox';
import themeKindBox from './ThemeReviewReducer/themeKind';
import scenarioBox from './ThemeReviewReducer/scenarioBox';
import interiorBox from './ThemeReviewReducer/interiorBox';
import problemBox from './ThemeReviewReducer/problemBox';

const reducer = combineReducers({
  popAlarm,
  hardBox,
  scaryBox,
  activityBox,
  themeKindBox,
  scenarioBox,
  interiorBox,
  problemBox,
});

const store = configureStore({
  reducer,
  // middleware: [logger],
});

export default store;

export type ReducerType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
