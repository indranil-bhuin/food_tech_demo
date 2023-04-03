import { combineReducers } from '@reduxjs/toolkit';
import adminReducer from './adminSlice';
import employeeReducer from './employeeSlice';
import vendorReducer from './vendorSlice';

const rootReducer = combineReducers({
  admin: adminReducer,
  employee: employeeReducer,
  vendor: vendorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
