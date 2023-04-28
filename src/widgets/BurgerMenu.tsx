import { BurgerMenuProps } from "../shared/models/props/BurgerMenuProps";
import {
  BurgerMenuCloseArea,
  BurgerMenuContainer,
  BurgerMenuItemContainer,
  BurgerMenuItemPrimaryText,
  BurgerMenuItemSecondaryText,
  BurgerMenuList,
  BurgerMenuPanel,
  BurgerMenuPhoneNumber,
  Cross,
} from "../shared/styles/BurgerMenuStyles";
import "../pages/styles.css";
import { useAppDispatch, useAppSelector } from "../shared/store/hooks";
import {
  closeBurgerMenu,
  openBurgerMenu,
} from "../shared/store/reducers/BurgerMenuReducer";
import { useState } from "react";
import BurgerMenuItem from "./BurgerMenuItem";

export default function BurgerMenu() {
  const active = useAppSelector((state) => state.burgerMenu.burgerActive);

  const dispatch = useAppDispatch();

  function closeBurger() {
    dispatch(closeBurgerMenu());
  }

  return (
    <>
      <BurgerMenuCloseArea onClick={closeBurger} />
      <BurgerMenuContainer onClick={closeBurger} active={active} />
      <BurgerMenuPanel onClick={(e) => e.stopPropagation()} active={active} />
      <BurgerMenuPhoneNumber active={active} />
      <BurgerMenuList>
        <BurgerMenuItem index={1} />
        <BurgerMenuItem index={2} />
        <BurgerMenuItem index={3} />
        <BurgerMenuItem index={4} />
      </BurgerMenuList>
      <Cross onClick={closeBurger} active={active} />
    </>
  );
}
