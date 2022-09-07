import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreatingGoal: false,
  title: null,
  from: {
    date: false,
    time: false,
  },
  to: {
    date: false,
    time: false,
  },
  controlPanel: {
    time: false,
  },
};

export const CreatingGoalSlice = createSlice({
  name: "creatingGoal",
  initialState,
  reducers: {
    startCreatingGoal: (state) => {
      state.isCreatingGoal = true;
    },
    stopCreatingGoal: (state) => {
      return initialState;
    },
    setTitleValue: (state, action) => {
      state.title = action.payload;
    },
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
    toggleTime: (state) => {
      if (state.controlPanel.time) {
        state.controlPanel.time = false;
        state.from.time = false;
        state.to.time = false;
      } else {
        state.controlPanel.time = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startCreatingGoal,
  stopCreatingGoal,
  setTitleValue,
  toggleTime,
  setFrom,
  setTo,
} = CreatingGoalSlice.actions;

export default CreatingGoalSlice.reducer;
