import {createSlice} from '@reduxjs/toolkit';

const vendorSlice = createSlice({
  name: 'vendor',
  initialState: {
    showLoginForm: false,
    showRegisterForm: false,
  },
  reducers: {
    showVendorLoginForm: (state, action) => {
      state.showLoginForm = action.payload.showLoginForm;
      state.showRegisterForm = action.payload.showRegisterForm;
    },
    showVendorRegisterForm: (state, action) => {
      state.showLoginForm = action.payload.showLoginForm;
      state.showRegisterForm = action.payload.showRegisterForm;
    },
  },
});

export const {showVendorLoginForm, showVendorRegisterForm} =
  vendorSlice.actions;
export default vendorSlice.reducer;
