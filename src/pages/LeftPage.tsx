import leftUpWave from "../shared/images/leftUpWave.png";
import leftBottomWave from "../shared/images/LeftbottomWave.png";
import { BottomWave, UpWave } from "../shared/styles/SimpleElementsStyles";
import "./styles.css";
import MenuButton from "../shared/UI/MenuButton";
import SpeedometerBlock from "../widgets/SpeedometerBlock";
import GoButton from "../widgets/GoButton";
import LeftPageText from "../widgets/LeftPageText";

export default function LeftPage() {
  return (
    <div className="first">
      <UpWave src={leftUpWave} />
      <LeftPageText />
      <MenuButton />
      <GoButton />
      <SpeedometerBlock />
      <BottomWave src={leftBottomWave} />
    </div>
  );
}
