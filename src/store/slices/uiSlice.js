// src/features/ui/uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isSidebarOpen: false,
    language: "en", // Default language
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleSidebar, setLanguage } = uiSlice.actions;
export default uiSlice.reducer;
