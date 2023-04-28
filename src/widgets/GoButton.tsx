import {
  ButtonGoContainer,
  ButtonGoDefaultColor,
  ButtonGoHoverColor,
} from "../shared/styles/SimpleElementsStyles";
import { useState } from "react";

export default function GoButton() {
  const [buttonGoActive, setButtonGoActive] = useState<boolean>(false);

  function scrollToRight() {
    window.scrollTo({ left: 1440, behavior: "smooth" });
  }

  return (
    <ButtonGoContainer
      onMouseEnter={() => setButtonGoActive(true)}
      onMouseLeave={() => setButtonGoActive(false)}
      active={buttonGoActive}
    >
      <ButtonGoHoverColor onClick={scrollToRight} active={buttonGoActive} />
      <ButtonGoDefaultColor onClick={scrollToRight} active={buttonGoActive} />
    </ButtonGoContainer>
  );
}
