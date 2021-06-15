import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const activityCheckBox = [
  { id: 1, content: '보통', clicked: false },
  { id: 2, content: '조금 활동', clicked: false },
  { id: 3, content: '매우 활동', clicked: false },
];

const activityBox = createSlice({
  name: 'activity-box',
  initialState: activityCheckBox,
  reducers: {
    activityCheckBoxReducer: (state, { payload }: PayloadAction<number>) => {
      const newState = state.map((obj) => {
        if (obj.id === payload) return { ...obj, clicked: true };
        return { ...obj, clicked: false };
      });
      return newState;
    },
  },
});

export const { activityCheckBoxReducer } = activityBox.actions;
export default activityBox.reducer;
