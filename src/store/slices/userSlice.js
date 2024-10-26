// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
    info: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.info = action.payload.info;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.info = null;
      state.accessToken = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
