import { createSlice } from "@reduxjs/toolkit";
import { SpeedometerState } from "../../models/reduxStates";

const initialState: SpeedometerState = {
  firstLevelActive: true,
  secondLevelActive: false,
  thirdLevelActive: false,
};

export const modalNoteReducer = createSlice({
  name: "speedometer",
  initialState,
  reducers: {
    setFirstLevelActive: function (state) {
      state.firstLevelActive = true;
      state.secondLevelActive = false;
      state.thirdLevelActive = false;
    },
    setSecondLevelActive: function (state) {
      state.firstLevelActive = false;
      state.secondLevelActive = true;
      state.thirdLevelActive = false;
    },

    setThirdLevelActive: function (state) {
      state.firstLevelActive = false;
      state.secondLevelActive = false;
      state.thirdLevelActive = true;
    },
  },
});

export const {
  setFirstLevelActive,
  setSecondLevelActive,
  setThirdLevelActive,
} = modalNoteReducer.actions;

export default modalNoteReducer.reducer;
