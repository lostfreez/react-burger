import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types/types";

const initialState: AuthState = {
  token: null,
  name: "",
  email: "",
  recovery: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (
      state,
      action: PayloadAction<{ name: string; email: string }>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    requestRecovery: (state) => {
      state.recovery = true;
    },
    logoutSuccess: () => initialState,
  },
});

export const { setToken, setUser, requestRecovery, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
