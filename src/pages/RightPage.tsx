import rightUpWave from "../shared/images/rightUpWave.png";
import rightBottomWave from "../shared/images/rightBottomWave.png";
import {
  BackButton,
  BackButtonHoverColor,
  BottomWave,
  UpWave,
} from "../shared/styles/SimpleElementsStyles";
import MenuButton from "../shared/UI/MenuButton";
import SliderBlock from "../widgets/SliderBlock";
import RightPageText from "../widgets/RightPageText";
import { RightPageContainer } from "../shared/styles/Layout";

export default function RightPage() {
  function scrollToLeft() {
    window.scrollTo({ left: 0, behavior: "smooth" });
  }

  return (
    <RightPageContainer>
      <UpWave src={rightUpWave} />
      <BackButton onClick={scrollToLeft}>
        <BackButtonHoverColor />
      </BackButton>
      <SliderBlock />
      <MenuButton />
      <RightPageText />
      <BottomWave src={rightBottomWave} />
    </RightPageContainer>
  );
}
