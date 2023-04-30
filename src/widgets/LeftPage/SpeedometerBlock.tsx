import {
  ISpeedometerArrow,
  ISpeedometerButtonSetting,
  arrowFirstLevel,
  arrowSecondLevel,
  arrowThirdLevel,
  coordinates,
  firstLevel,
  secondLevel,
  thirdLevel,
} from "../../shared/models/types";
import {
  SpeedometerArrow,
  SpeedometerCenter,
  SpeedometerContainer,
  SpeedometerItem,
  SpeedometerButton,
} from "../../shared/styles/SpeedometerStyles";
import { useState } from "react";

export default function SpeedometerBlock() {
  const [images, setImages] = useState<string[]>(firstLevel);

  const [buttonsActive, setButtonsActive] = useState<boolean[]>([
    true,
    false,
    false,
  ]);

  const [speedometerCenterColor, setSpeedometerCenterColor] = useState<string>(
    "rgba(122, 11, 192, 1)"
  );

  const [arrow, setArrow] = useState<ISpeedometerArrow>(arrowFirstLevel);

  const buttonsSettings: ISpeedometerButtonSetting[] = [
    {
      onClickFunction: setFirst,
      color: "rgba(122, 11, 192, 1)",
    },
    {
      onClickFunction: setSecond,
      color: "rgba(11, 138, 192, 1)",
    },
    {
      onClickFunction: setThird,
      color: "rgba(225, 5, 229, 1)",
    },
  ];

  function setActivity(index: number) {
    setButtonsActive(buttonsActive.map((button, i) => i === index));
  }

  function setFirst() {
    setActivity(0);
    setImages(firstLevel);
    setSpeedometerCenterColor(buttonsSettings[0].color);
    setArrow(arrowFirstLevel);
  }

  function setSecond() {
    setActivity(1);
    setImages(secondLevel);
    setSpeedometerCenterColor(buttonsSettings[1].color);
    setArrow(arrowSecondLevel);
  }

  function setThird() {
    setActivity(2);
    setImages(thirdLevel);
    setSpeedometerCenterColor(buttonsSettings[2].color);
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
      {buttonsSettings.map((button, index) => (
        <SpeedometerButton
          onClick={() => button.onClickFunction()}
          active={buttonsActive[index]}
          color={button.color}
          index={index + 1}
        />
      ))}
    </>
  );
}
