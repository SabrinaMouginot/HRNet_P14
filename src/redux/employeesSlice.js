import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) || [] 
  // On récupère les employés du localStorage ou on initialise avec un tableau vide
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      // On met à jour le localStorage après chaque ajout
      localStorage.setItem('employees', JSON.stringify(state.employees));
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
