import { createSlice } from '@reduxjs/toolkit';

export const appDate = createSlice({
  name: 'app',
  initialState: {
    dateId: null,
  },
  reducers: {
    enterDate: (state, action) => {
        state.dateId = action.payload.dateId;
    },
  },
});

export const { enterDate } = appDate.actions;

export const selectDateId = (state) => state.app.dateId;

export default appDate.reducer;
