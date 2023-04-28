import {
  coordinates,
  firstLevel,
  secondLevel,
  thiddLevel,
} from "../shared/models/types";
import {
  SpeedometerArrow,
  SpeedometerCenter,
  SpeedometerContainer,
  SpeedometerItem,
  SpeedometerLevelButton,
} from "../shared/styles/SpeedometerStyles";
import { useState } from "react";

export default function SpeedometerBlock() {
  const [images, setImages] = useState<string[]>(firstLevel);

  const [firstActive, setFirstActive] = useState<boolean>(true);
  const [secondActive, setSecondActive] = useState<boolean>(false);
  const [thirdActive, setThirdActive] = useState<boolean>(false);

  function setFirst() {
    setFirstActive(true);
    setSecondActive(false);
    setThirdActive(false);
    setImages(firstLevel);
  }

  function setSecond() {
    setFirstActive(false);
    setSecondActive(true);
    setThirdActive(false);
    setImages(secondLevel);
  }

  function setThird() {
    setFirstActive(false);
    setSecondActive(false);
    setThirdActive(true);
    setImages(thiddLevel);
  }

  return (
    <>
      <SpeedometerContainer>
        <SpeedometerCenter />
        <SpeedometerArrow />
        {images.map((item, index) => (
          <SpeedometerItem
            top={coordinates[index].top}
            left={coordinates[index].left}
            imageString={item}
          />
        ))}
      </SpeedometerContainer>
      <SpeedometerLevelButton
        onClick={setFirst}
        active={firstActive}
        color={"rgba(122, 11, 192, 1)"}
        index={1}
      />
      <SpeedometerLevelButton
        active={secondActive}
        onClick={setSecond}
        color={"rgba(11, 138, 192, 1)"}
        index={2}
      />

      <SpeedometerLevelButton
        active={thirdActive}
        onClick={setThird}
        color={"rgba(225, 5, 229, 1)"}
        index={3}
      />
    </>
  );
}
