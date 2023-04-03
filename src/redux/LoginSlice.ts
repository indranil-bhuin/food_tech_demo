import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  role: string;
}

const initialState: LoginState = {
  role: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

export const { setRole } = loginSlice.actions;

export default loginSlice.reducer;
