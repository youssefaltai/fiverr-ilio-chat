import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: null | string;
}
const initialState: AuthState = {
  user: null,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      const { user } = action.payload;
      return { ...state, user };
    },
    logout: () => {
      return { user: null };
    },
  },
});

export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const userId = (state: RootState) => state.auth.id;

export default authSlice.reducer;
