import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const hardCheckBox = [
  { id: 1, content: '매우 쉬움', clicked: false, api: 'VERY_EASY' },
  { id: 2, content: '쉬움', clicked: false, api: 'EASY' },
  { id: 3, content: '보통', clicked: false, api: 'NORMAL' },
  { id: 4, content: '어려움', clicked: false, api: 'DIFFICULT' },
  { id: 5, content: '매우 어려움', clicked: false, api: 'VERY_DIFFICULT' },
];

const hardBox = createSlice({
  name: 'hard-box',
  initialState: hardCheckBox,
  reducers: {
    hardCheckBoxReducer: (state, { payload }: PayloadAction<number>) => {
      const newState = state.map((obj) => {
        if (obj.id === payload) return { ...obj, clicked: true };
        return { ...obj, clicked: false };
      });
      return newState;
    },
  },
});

export const { hardCheckBoxReducer } = hardBox.actions;
export default hardBox.reducer;
