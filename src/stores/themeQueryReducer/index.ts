import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface themeQueryStateType {
  themeType?: string;
  rating?: string;
  numberOfPeople?: string;
  difficulty?: string;
  activity?: string;
  sortCondition?: string;
}
const themeQueryState = {
  themeType: '',
  rating: '',
  numberOfPeople: '',
  difficulty: '',
  activity: '',
  sortCondition: '',
};

const themeQuerySlice = createSlice({
  name: 'theme-query',
  initialState: themeQueryState,
  reducers: {
    filterThemeQuery: (state, { payload }: PayloadAction<themeQueryStateType>) => {
      return Object.assign(state, payload);
    },
  },
});

export const { filterThemeQuery } = themeQuerySlice.actions;
export default themeQuerySlice.reducer;
