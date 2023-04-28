import BurgerMenuReducer from "./reducers/BurgerMenuReducer";
import { configureStore } from "@reduxjs/toolkit";
import SpeedometerReducer from "./reducers/SpeedometerReducer";

const store = configureStore({
  reducer: {
    burgerMenu: BurgerMenuReducer,
    speedometer: SpeedometerReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
