import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = 0;

const reviewIdSlice = createSlice({
  name: 'reviewId',
  initialState,
  reducers: {
    getReviewId: (state, { payload }: PayloadAction<number>) => payload,
  },
});

export const { getReviewId } = reviewIdSlice.actions;
export default reviewIdSlice.reducer;
