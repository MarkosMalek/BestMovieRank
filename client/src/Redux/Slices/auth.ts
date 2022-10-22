import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    register: (state, action) => {},
    logIn: (state, action) => {},
    logOut: (state, action) => {},
  },
});

export const { register, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
