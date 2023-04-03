import {createSlice} from '@reduxjs/toolkit';

const vendorSlice = createSlice({
  name: 'vendor',
  initialState: {
    showLoginForm: false,
    showRegisterForm: false,
  },
  reducers: {
    showVendorLoginForm: state => {
      state.showLoginForm = true;
      state.showRegisterForm = false;
    },
    showVendorRegisterForm: state => {
      state.showLoginForm = false;
      state.showRegisterForm = true;
    },
  },
});

export const {showVendorLoginForm, showVendorRegisterForm} =
  vendorSlice.actions;
export default vendorSlice.reducer;
