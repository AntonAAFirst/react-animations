import { BottomWave, UpWave } from "../shared/styles/SimpleElementsStyles";
import { LeftPageContainer } from "../shared/styles/Layout";
import leftUpWave from "../shared/images/leftUpWave.png";
import leftBottomWave from "../shared/images/LeftbottomWave.png";
import MenuButton from "../shared/UI/MenuButton";
import SpeedometerBlock from "../widgets/LeftPage/SpeedometerBlock";
import GoButton from "../widgets/LeftPage/GoButton";
import LeftPageText from "../widgets/LeftPageText";

export default function LeftPage() {
  return (
    <LeftPageContainer>
      <UpWave src={leftUpWave} />
      <LeftPageText />
      <MenuButton />
      <GoButton />
      <SpeedometerBlock />
      <BottomWave src={leftBottomWave} />
    </LeftPageContainer>
  );
}
