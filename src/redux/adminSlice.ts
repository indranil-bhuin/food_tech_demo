import {createSlice} from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    showLoginForm: true,
    showRegisterForm: false,
  },
  reducers: {
    showAdminLoginForm: (state, action) => {
      state.showLoginForm = action.payload.showLoginForm;
      state.showRegisterForm = action.payload.showRegisterForm;
},
showAdminRegisterForm: (state, action) => {
      state.showLoginForm = action.payload.showLoginForm;
      state.showRegisterForm = action.payload.showRegisterForm;
},
  },
});

export const {showAdminLoginForm, showAdminRegisterForm} = adminSlice.actions;
export default adminSlice.reducer;
