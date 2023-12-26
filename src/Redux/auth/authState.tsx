import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authAction";

export interface INITVALUE {
  user: null | string;
  isAuthenticated: boolean;
  loading: boolean;
  error: boolean;
  success: boolean;
}
const initialState: INITVALUE = {
  user: null,
  error: false,
  loading: true,
  isAuthenticated: false,
  success: false,
};
export const authSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    loginError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.success = true;
        state.error = false;
        state.isAuthenticated;
      }).addCase(login.rejected,(state)=>{
        state.error=true
        state.loading=false
        
      })
  },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, logout, loginError } = authSlice.actions;
export default authSlice.reducer;
