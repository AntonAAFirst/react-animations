import {
  BurgerMenuCloseArea,
  BurgerMenuContainer,
  BurgerMenuList,
  BurgerMenuPanel,
  BurgerMenuPhoneNumber,
  Cross,
} from "../shared/styles/BurgerMenuStyles";
import { useAppDispatch, useAppSelector } from "../shared/store/hooks";
import { closeBurgerMenu } from "../shared/store/reducers/BurgerMenuReducer";
import BurgerMenuItem from "./BurgerMenuItem";
import "../pages/styles.css";

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
