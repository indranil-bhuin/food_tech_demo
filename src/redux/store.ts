import {configureStore} from '@reduxjs/toolkit';
import adminSlice from './adminSlice';
import employeeSlice from './employeeSlice';
import vendorSlice from './vendorSlice';
// import rootReducer from './rootReducer';

const store = configureStore({
  reducer: {
    admin: adminSlice.reducer,
    employee: employeeSlice.reducer,
    vendor: vendorSlice.reducer,
  },
});

export default store;
