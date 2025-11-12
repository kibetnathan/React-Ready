import { configureStore } from '@reduxjs/toolkit';
import componentsReducer from './componentsSlice';

export const store = configureStore({
  reducer: {
    components: componentsReducer,
  },
});
