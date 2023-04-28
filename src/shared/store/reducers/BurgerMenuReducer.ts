import { createSlice } from "@reduxjs/toolkit";
import { BurgerMenuState } from "../../models/reduxStates";

const initialState: BurgerMenuState = {
  burgerActive: false,
};

export const modalNoteReducer = createSlice({
  name: "burgermenu",
  initialState,
  reducers: {
    openBurgerMenu: function (state) {
      state.burgerActive = true;
    },

    closeBurgerMenu: function (state) {
      state.burgerActive = false;
    },
  },
});

export const { openBurgerMenu, closeBurgerMenu } = modalNoteReducer.actions;

export default modalNoteReducer.reducer;
