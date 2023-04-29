import BurgerMenu from "./widgets/BurgerMenu";
import RightPage from "./pages/RightPage";
import LeftPage from "./pages/LeftPage";
import "./pages/styles.css";
import { useAppDispatch } from "./shared/store/hooks";
import { closeBurgerMenu } from "./shared/store/reducers/BurgerMenuReducer";

export default function App() {
  const dispatch = useAppDispatch();

  function closeBurger() {
    dispatch(closeBurgerMenu());
  }

  return (
    <div onClick={closeBurger}>
      <LeftPage />
      <RightPage />
      <BurgerMenu />
    </div>
  );
}
