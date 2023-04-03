import {createSlice} from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    showLoginForm: true,
    showRegisterForm: false,
  },
  reducers: {
    showAdminLoginForm: state => {
      state.showLoginForm = true;
      state.showRegisterForm = false;
    },
    showAdminRegisterForm: state => {
      state.showLoginForm = false;
      state.showRegisterForm = true;
    },
  },
});

export const {showAdminLoginForm, showAdminRegisterForm} = adminSlice.actions;
export default adminSlice.reducer;
