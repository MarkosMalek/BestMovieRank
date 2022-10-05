import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    logIn: (state, action) => {},
    logOut: (state, action) => {},
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
