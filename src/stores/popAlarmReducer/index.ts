import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  pop: false,
  content: '',
};

const popAlarm = createSlice({
  name: 'pop-alarm',
  initialState,
  reducers: {
    popAlarmReducer: (state, { payload }: PayloadAction<typeof initialState>) => payload,
  },
});

export const { popAlarmReducer } = popAlarm.actions;
export default popAlarm.reducer;
