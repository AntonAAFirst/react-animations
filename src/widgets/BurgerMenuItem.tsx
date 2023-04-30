import { BurgerMenuItemProps } from "../shared/models/props";
import { useAppSelector } from "../shared/store/hooks";
import {
  BurgerMenuItemContainer,
  BurgerMenuItemPrimaryText,
  BurgerMenuItemSecondaryText,
} from "../shared/styles/BurgerMenuStyles";

export default function BurgerMenuItem({ index }: BurgerMenuItemProps) {
  const active = useAppSelector((state) => state.burgerMenu.burgerActive);

  return (
    <BurgerMenuItemContainer active={active}>
      <BurgerMenuItemPrimaryText>Menu {index}</BurgerMenuItemPrimaryText>
      <BurgerMenuItemSecondaryText>GO</BurgerMenuItemSecondaryText>
    </BurgerMenuItemContainer>
  );
}
