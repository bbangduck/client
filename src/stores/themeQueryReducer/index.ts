import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const themeQuerySlice = createSlice({
  name: 'theme-query',
  initialState,
  reducers: {
    filterThemeQuery: (state, { payload }) => payload,
  },
});

export const { filterThemeQuery } = themeQuerySlice.actions;
export default themeQuerySlice.reducer;
