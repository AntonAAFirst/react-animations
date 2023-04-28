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
import slider1 from "../shared/images/slider/slider1.png";
import SpeedometerBlock from "../widgets/SpeedometerBlock";
import GoButton from "../widgets/GoButton";

export default function LeftPage() {
  return (
    <div className="first">
      <UpWave src={leftUpWave} />
      <MainText top={284}>Bibendum neque egestas congue</MainText>
      <SecondaryText top={452}>
        lacus sed viverra tellus in hac habitasse platea dictumst vestibulum
        rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
        lobortis feugiat
      </SecondaryText>
      <MenuButton />
      <img src={slider1} alt="" className="element" />

      <GoButton />
      <SpeedometerBlock />
      <BottomWave src={leftBottomWave} />
    </div>
  );
}
