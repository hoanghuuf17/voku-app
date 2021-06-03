import { createSlice } from '@reduxjs/toolkit';

const today = new Date();
function get(today) {
  let result = '';
  let name = '';
  let day = today.toString()
  day = day.slice(8, 10)
  switch (today.getDay()) {
    case 1:
      result = 'gtyHtMCuVsEEg3aAjoAm';
      name = 'Thứ 2';
      break;
    case 2:
      result = 'Llk7P6QzyqhuuvUQx8Wn';
      name = 'Thứ 3';
      break;
    case 3:
      result = 'IFZKJRn8LuhFOUQ68FAA';
      name = 'Thứ 4';
      break;
    case 4:
      result = 'Bpg1SQkDWaLNRy82sQa6';
      name = `Thứ 5 ${day}`;
      break;
    case 5:
      result = '8w8I2YIqCQNaMJA40rFl';
      name = 'Thứ 6';
      break;
    case 6:
      result = 'c7vSVfOyCCPARRXwktTW';
      name = 'Thứ 7';
      break;
    default:
      result = '8w8I2YIqCQNaMJA40rFl';
      name = 'Thứ 6';
      break;
  }
  return { name, result };
};

export const appDate = createSlice({
  name: 'app',
  initialState: {
    dateId: get(today).result,
    name: get(today).name
  },
  reducers: {
    enterDate: (state, action) => {
      state.dateId = action.payload.dateId;
    },
  },
});
export const { enterDate } = appDate.actions;
export const selectDateId = (state) => state.app.dateId;
export const selectName = (state) => state.app.name;
export default appDate.reducer;

