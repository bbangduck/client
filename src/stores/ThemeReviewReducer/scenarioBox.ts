import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const scenarioCheckBox = [
  { id: 1, content: '별로 예요', clicked: false, api: 'VERY_BAD' },
  { id: 2, content: '아쉬 워요', clicked: false, api: 'BAD' },
  { id: 3, content: '보통', clicked: false, api: 'NORMAL' },
  { id: 4, content: '좋아요', clicked: false, api: 'GOOD' },
  { id: 5, content: '매우 좋아요', clicked: false, api: 'VERY_GOOD' },
];

const scenarioBox = createSlice({
  name: 'scenario-box',
  initialState: scenarioCheckBox,
  reducers: {
    scenarioCheckBoxReducer: (state, { payload }: PayloadAction<number>) => {
      const newState = state.map((obj) => {
        if (obj.id === payload) return { ...obj, clicked: true };
        return { ...obj, clicked: false };
      });
      return newState;
    },
  },
});

export const { scenarioCheckBoxReducer } = scenarioBox.actions;
export default scenarioBox.reducer;
