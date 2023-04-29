import BurgerMenu from "./widgets/BurgerMenu";
import RightPage from "./pages/RightPage";
import LeftPage from "./pages/LeftPage";
import "./pages/styles.css";
import {
  Block,
  BlockImgFirst,
  BlockImgSecond,
  BlockImgThird,
} from "./shared/styles/SliderStyles";
import slider1 from "./shared/images/slider/slider1.png";
import slider2 from "./shared/images/slider/slider2.png";
import slider3 from "./shared/images/slider/slider3.png";

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <LeftPage />
      <RightPage />

      <BurgerMenu />
    </div>
  );
}
