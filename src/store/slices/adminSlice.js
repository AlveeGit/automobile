// src/features/admin/adminSlice.js
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    stats: {},
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const { setUsers, setStats } = adminSlice.actions;
export default adminSlice.reducer;
