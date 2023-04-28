import BurgerMenu from "./widgets/BurgerMenu";
import RightPage from "./pages/RightPage";
import LeftPage from "./pages/LeftPage";
import "./pages/styles.css";

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <LeftPage />
      <RightPage />
      <BurgerMenu />
    </div>
  );
}
