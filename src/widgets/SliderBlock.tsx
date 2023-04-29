import {
  Block,
  BlockImgFirst,
  BlockImgSecond,
  BlockImgThird,
  SliderBackButton,
  SliderContainer,
  SliderForwardButton,
} from "../shared/styles/SliderStyles";
import slider1 from "../shared/images/slider/slider1.png";
import slider2 from "../shared/images/slider/slider2.png";
import slider3 from "../shared/images/slider/slider3.png";
import { useState } from "react";

export default function SliderBlock() {
  const [index, setIndex] = useState<number>(0);
  const [deg, setDeg] = useState<number>(0);

  function forward() {
    if (index !== 2) {
      setDeg((prev) => prev - 90);
    } else {
      setDeg((prev) => prev - 180);
    }
    if (index === 2) {
      setIndex(0);
    } else setIndex((prev) => prev + 1);
  }

  function back() {
    if (index !== 0) {
      setDeg((prev) => prev + 90);
    } else {
      setDeg((prev) => prev + 180);
    }
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex((prev) => prev - 1);
    }
  }

  return (
    <>
      <SliderContainer />
      <SliderBackButton onClick={back} />
      <SliderForwardButton onClick={forward} />
      <Block degreePX={`${deg}deg`}>
        <BlockImgFirst src={slider1} />
        <BlockImgSecond src={slider2} />
        <BlockImgThird src={slider3} />
      </Block>
    </>
  );
}
