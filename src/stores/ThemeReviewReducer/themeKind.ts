import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const themeKindCheckBox = [
  { id: 1, content: '공포', clicked: false, api: '' },
  { id: 2, content: '스릴러', clicked: false, api: '' },
  { id: 3, content: '로맨스', clicked: false, api: '' },
  { id: 4, content: '추리', clicked: false, api: '' },
  { id: 5, content: '감성', clicked: false, api: '' },
  { id: 6, content: '모험', clicked: false, api: '' },
  { id: 7, content: '잠입', clicked: false, api: '' },
  { id: 8, content: '범죄', clicked: false, api: '' },
  { id: 9, content: '코미디', clicked: false, api: '' },
  { id: 10, content: '판타지', clicked: false, api: '' },
  { id: 11, content: '19금', clicked: false, api: '' },
  { id: 12, content: '역사', clicked: false, api: '' },
  { id: 13, content: 'SF', clicked: false, api: '' },
  { id: 14, content: '음악', clicked: false, api: '' },
  { id: 15, content: '드라마', clicked: false, api: '' },
  { id: 16, content: '액션', clicked: false, api: '' },
  { id: 17, content: '미스터리', clicked: false, api: '' },
  { id: 18, content: '아케이드', clicked: false, api: '' },
  { id: 19, content: '야외', clicked: false, api: '' },
  { id: 20, content: '기타', clicked: false, api: '' },
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
