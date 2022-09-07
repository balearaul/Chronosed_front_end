import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  open: false,
};

export const menuSlice = createSlice({
  name: "menu",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;
