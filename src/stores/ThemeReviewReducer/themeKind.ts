import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const themeKindCheckBox = [
  { id: 1, content: '공포', clicked: false },
  { id: 2, content: '스릴러', clicked: false },
  { id: 3, content: '로맨스', clicked: false },
  { id: 4, content: '추리', clicked: false },
  { id: 5, content: '감성', clicked: false },
  { id: 6, content: '모험', clicked: false },
  { id: 7, content: '잠입', clicked: false },
  { id: 8, content: '범죄', clicked: false },
  { id: 9, content: '코미디', clicked: false },
  { id: 10, content: '판타지', clicked: false },
  { id: 11, content: '19금', clicked: false },
  { id: 12, content: '역사', clicked: false },
  { id: 13, content: 'SF', clicked: false },
  { id: 14, content: '음악', clicked: false },
  { id: 15, content: '드라마', clicked: false },
  { id: 16, content: '액션', clicked: false },
  { id: 17, content: '미스터리', clicked: false },
  { id: 18, content: '아케이드', clicked: false },
  { id: 19, content: '야외', clicked: false },
  { id: 20, content: '기타', clicked: false },
];

const clickedArr: typeof themeKindCheckBox = [];

const themeKindBox = createSlice({
  name: 'themekind-box',
  initialState: themeKindCheckBox,
  reducers: {
    themeKindCheckBoxReducer: (state, { payload }: PayloadAction<number>) => {
      const newState = state.map((obj) => {
        if (clickedArr.length < 5) {
          if (obj.id === payload && !obj.clicked) {
            const clickedOgj = { ...obj, clicked: true };
            clickedArr.push(clickedOgj);
            return clickedOgj;
          }
          if (obj.id === payload && obj.clicked) {
            const clickedObj = { ...obj, clicked: false };
            const indexToDelete = clickedArr.indexOf(obj);
            clickedArr.splice(indexToDelete, 1);
            return clickedObj;
          }
        } else if (clickedArr.length === 5) {
          if (obj.id === payload && obj.clicked) {
            const clickedObj = { ...obj, clicked: false };
            const indexToDelete = clickedArr.indexOf(obj);
            clickedArr.splice(indexToDelete, 1);
            return clickedObj;
          }
        }
        return { ...obj };
      });
      return newState;
    },
  },
});

export const { themeKindCheckBoxReducer } = themeKindBox.actions;
export default themeKindBox.reducer;
