import { Routes, Route } from "react-router-dom";
import "./pages/styles.css";
import LeftPage from "./pages/LeftPage";
import RightPage from "./pages/RightPage";
import { useState } from "react";
import BurgerMenu from "./widgets/BurgerMenu";
import { relative } from "path";
import { useAppDispatch, useAppSelector } from "./shared/store/hooks";
import { useDispatch } from "react-redux";
import {
  closeBurgerMenu,
  openBurgerMenu,
} from "./shared/store/reducers/BurgerMenuReducer";

export default function App() {
  const burgerMenuActive = useAppSelector(
    (state) => state.burgerMenu.burgerActive
  );

  return (
    <div style={{ overflow: "hidden" }}>
      <LeftPage />
      <RightPage />
      <BurgerMenu />
    </div>
  );
}
