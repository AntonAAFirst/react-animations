import rightUpWave from "../shared/images/rightUpWave.png";
import rightBottomWave from "../shared/images/rightBottomWave.png";
import { useState } from "react";
import "./styles.css";
import {
  BackButton,
  BackButtonHoverColor,
  BottomWave,
  MainText,
  SecondaryText,
  UpWave,
} from "../shared/styles/SimpleElementsStyles";
import MenuButton from "../shared/UI/MenuButton";
import slider1Icon from "../shared/images/slider/slider1.png";
import slider2Icon from "../shared/images/slider/slider2.png";
import slider3Icon from "../shared/images/slider/slider3.png";

export default function RightPage() {
  function scrollToLeft() {
    window.scrollTo({ left: 0, behavior: "smooth" });
  }

  return (
    <div className="second">
      <UpWave src={rightUpWave} />
      <MainText top={257}>
        PageMaker including versions of Lorem Ipsum.
      </MainText>
      <MenuButton />
      <SecondaryText top={409}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing
      </SecondaryText>
      <BackButton onClick={scrollToLeft}>
        <BackButtonHoverColor onClick={scrollToLeft} />
      </BackButton>
      <BottomWave src={rightBottomWave} />
    </div>
  );
}
