import {
  SliderBackButton,
  SliderContainer,
  SliderForwardButton,
  SliderImages,
  SliderImgFirst,
  SliderImgSecond,
  SliderImgThird,
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
      <SliderBackButton onClick={forward} />
      <SliderForwardButton onClick={back} />
      <SliderImages degreePX={`${deg}deg`}>
        <SliderImgFirst src={slider1} />
        <SliderImgSecond src={slider2} />
        <SliderImgThird src={slider3} />
      </SliderImages>
    </>
  );
}
