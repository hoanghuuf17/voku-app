import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appDate';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
