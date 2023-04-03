import {createSlice} from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    showLoginForm: true,
    showRegisterForm: false,
  },
  reducers: {
    showEmployeeLoginForm: state => {
      state.showLoginForm = true;
      state.showRegisterForm = false;
    },
    showEmployeeRegisterForm: state => {
      state.showLoginForm = false;
      state.showRegisterForm = true;
    },
  },
});

export const {showEmployeeLoginForm, showEmployeeRegisterForm} = employeeSlice.actions;
export default employeeSlice.reducer;
