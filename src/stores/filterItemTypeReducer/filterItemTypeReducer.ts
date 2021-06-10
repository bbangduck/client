import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = 1;

const filterItemTypeReducer = createSlice({
  name: 'filterType',
  initialState,
  reducers: {
    setFilterItemType: (state, { payload }: PayloadAction<number>) => payload,
  },
});

export const { setFilterItemType } = filterItemTypeReducer.actions;
export default filterItemTypeReducer.reducer;
