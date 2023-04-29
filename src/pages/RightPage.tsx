import rightUpWave from "../shared/images/rightUpWave.png";
import rightBottomWave from "../shared/images/rightBottomWave.png";
import "./styles.css";
import {
  BackButton,
  BackButtonHoverColor,
  BottomWave,
  UpWave,
} from "../shared/styles/SimpleElementsStyles";
import MenuButton from "../shared/UI/MenuButton";
import SliderBlock from "../widgets/SliderBlock";
import RightPageText from "../widgets/RightPageText";

export default function RightPage() {
  function scrollToLeft() {
    window.scrollTo({ left: 0, behavior: "smooth" });
  }

  return (
    <div className="second">
      <UpWave src={rightUpWave} />
      <BackButton onClick={scrollToLeft}>
        <BackButtonHoverColor onClick={scrollToLeft} />
      </BackButton>
      <SliderBlock />
      <MenuButton />
      <RightPageText />
      <BottomWave src={rightBottomWave} />
    </div>
  );
}
