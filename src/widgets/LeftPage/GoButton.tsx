import {
  ButtonGoContainer,
  ButtonGoDefaultColor,
  ButtonGoHoverColor,
} from "../../shared/styles/SimpleElementsStyles";

export default function GoButton() {
  function scrollToRight() {
    window.scrollTo({ left: 1440, behavior: "smooth" });
  }

  return (
    <ButtonGoContainer onClick={scrollToRight}>
      <ButtonGoHoverColor />
      <ButtonGoDefaultColor />
    </ButtonGoContainer>
  );
}
