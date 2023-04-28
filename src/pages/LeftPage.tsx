import leftUpWave from "../shared/images/leftUpWave.png";
import leftBottomWave from "../shared/images/LeftbottomWave.png";
import { useState } from "react";
import {
  BottomWave,
  ButtonGoContainer,
  ButtonGoDefaultColor,
  ButtonGoHoverColor,
  MainText,
  SecondaryText,
  UpWave,
} from "../shared/styles/SimpleElementsStyles";
import "./styles.css";
import MenuButton from "../shared/UI/MenuButton";
import BurgerMenu from "../widgets/BurgerMenu";
import { useAppDispatch } from "../shared/store/hooks";
import { closeBurgerMenu } from "../shared/store/reducers/BurgerMenuReducer";

export default function LeftPage() {
  function scrollToRight() {
    window.scrollTo({ left: 1440, behavior: "smooth" });
  }

  const [buttonGoActive, setButtonGoActive] = useState<boolean>(false);

  return (
    <div className="first">
      <UpWave src={leftUpWave} />
      <MainText top={284}>Bibendum neque egestas congue</MainText>
      <SecondaryText
        onClick={() => setButtonGoActive((prev) => !prev)}
        top={452}
      >
        lacus sed viverra tellus in hac habitasse platea dictumst vestibulum
        rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
        lobortis feugiat
      </SecondaryText>
      <MenuButton />
      <ButtonGoContainer
        onMouseEnter={() => setButtonGoActive(true)}
        onMouseLeave={() => setButtonGoActive(false)}
        active={buttonGoActive}
      >
        <ButtonGoHoverColor onClick={scrollToRight} active={buttonGoActive} />
        <ButtonGoDefaultColor onClick={scrollToRight} active={buttonGoActive} />
      </ButtonGoContainer>

      <BottomWave src={leftBottomWave} />
    </div>
  );
}
