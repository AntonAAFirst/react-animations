import {
  ISpeedometerArrow,
  arrowFirstLevel,
  arrowSecondLevel,
  arrowThirdLevel,
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

  const [speedometerCenterColor, setSpeedometerCenterColor] = useState<string>(
    "rgba(122, 11, 192, 1)"
  );

  const [arrow, setArrow] = useState<ISpeedometerArrow>(arrowFirstLevel);

  function setFirst() {
    setFirstActive(true);
    setSecondActive(false);
    setThirdActive(false);
    setImages(firstLevel);
    setSpeedometerCenterColor("rgba(122, 11, 192, 1)");
    setArrow(arrowFirstLevel);
  }

  function setSecond() {
    setFirstActive(false);
    setSecondActive(true);
    setThirdActive(false);
    setImages(secondLevel);
    setSpeedometerCenterColor("rgba(11, 138, 192, 1)");
    setArrow(arrowSecondLevel);
  }

  function setThird() {
    setFirstActive(false);
    setSecondActive(false);
    setThirdActive(true);
    setImages(thiddLevel);
    setSpeedometerCenterColor("rgba(225, 5, 229, 1)");
    setArrow(arrowThirdLevel);
  }

  return (
    <>
      <SpeedometerContainer>
        <SpeedometerCenter color={speedometerCenterColor} />
        <SpeedometerArrow
          transformDegree={arrow.degree}
          translateX={arrow.translateX}
          translateY={arrow.translateY}
        />
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
