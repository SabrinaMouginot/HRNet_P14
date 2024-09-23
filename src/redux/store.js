import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeesSlice';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    modal: modalReducer,
  },
});
