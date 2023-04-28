import { useAppDispatch } from "../store/hooks";
import { openBurgerMenu } from "../store/reducers/BurgerMenuReducer";
import {
  MenuButtonContainer,
  MenuButtonItem,
} from "../styles/SimpleElementsStyles";

export default function MenuButton() {
  const dispatch = useAppDispatch();

  function openBurger() {
    dispatch(openBurgerMenu());
  }

  return (
    <MenuButtonContainer onClick={openBurger}>
      <MenuButtonItem />
      <MenuButtonItem />
      <MenuButtonItem />
    </MenuButtonContainer>
  );
}
