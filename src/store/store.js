import { configureStore } from '@reduxjs/toolkit';
import componentsReducer from './componentSlice';

export const store = configureStore({
  reducer: {
    components: componentsReducer,
  },
});
