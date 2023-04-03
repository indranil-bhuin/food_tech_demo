import { createSlice } from '@reduxjs/toolkit';

const initialRoleState = {
  selectedRole: null,
  isLogin: false,
};

const roleSlice = createSlice({
  name: 'role',
  initialState: initialRoleState,
  reducers: {
    selectRole(state, action) {
      state.selectedRole = action.payload;
    },
    toggleLoginOrRegister(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { selectRole, toggleLoginOrRegister } = roleSlice.actions;

export default roleSlice.reducer;
