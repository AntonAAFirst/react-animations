import { useAppDispatch } from "../store/hooks";
import { openBurgerMenu } from "../store/reducers/BurgerMenuReducer";
import {
  MenuButtonContainer,
  MenuButtonItem,
} from "../styles/SimpleElementsStyles";

export default function MenuButton() {
  const dispatch = useAppDispatch();

  return (
    <MenuButtonContainer
      onClick={(e) => {
        dispatch(openBurgerMenu());
        e.stopPropagation();
      }}
    >
      <MenuButtonItem />
      <MenuButtonItem />
      <MenuButtonItem />
    </MenuButtonContainer>
  );
}
