import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const scaryCheckBox = [
  { id: 1, content: '보통', clicked: false, api: 'NORMAL' },
  { id: 2, content: '조금 공포', clicked: false, api: 'LITTLE_HORROR' },
  { id: 3, content: '매우 공포', clicked: false, api: 'VERY_HORROR' },
];

const scaryBox = createSlice({
  name: 'scary-box',
  initialState: scaryCheckBox,
  reducers: {
    scaryCheckBoxReducer: (state, { payload }: PayloadAction<number>) => {
      const newState = state.map((obj) => {
        if (obj.id === payload) return { ...obj, clicked: true };
        return { ...obj, clicked: false };
      });
      return newState;
    },
  },
});

export const { scaryCheckBoxReducer } = scaryBox.actions;
export default scaryBox.reducer;
