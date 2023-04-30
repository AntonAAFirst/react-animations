import first1 from "../images/speedometer/level1/1level1.png";
import first2 from "../images/speedometer/level1/1level2.png";
import first3 from "../images/speedometer/level1/1level3.png";
import first4 from "../images/speedometer/level1/1level4.png";
import first5 from "../images/speedometer/level1/1level5.png";
import first6 from "../images/speedometer/level1/1level6.png";
import first7 from "../images/speedometer/level1/1level7.png";
import first8 from "../images/speedometer/level1/1level8.png";
import first9 from "../images/speedometer/level1/1level9.png";

import second1 from "../images/speedometer/level2/2level1.png";
import second2 from "../images/speedometer/level2/2level2.png";
import second3 from "../images/speedometer/level2/2level3.png";
import second4 from "../images/speedometer/level2/2level4.png";
import second5 from "../images/speedometer/level2/2level5.png";
import second6 from "../images/speedometer/level2/2level6.png";
import second7 from "../images/speedometer/level2/2level7.png";
import second8 from "../images/speedometer/level2/2level8.png";
import second9 from "../images/speedometer/level2/2level9.png";

import third1 from "../images/speedometer/level3/third1.png";
import third2 from "../images/speedometer/level3/third2.png";
import third3 from "../images/speedometer/level3/third3.png";
import third4 from "../images/speedometer/level3/third4.png";
import third5 from "../images/speedometer/level3/third5.png";
import third6 from "../images/speedometer/level3/third6.png";
import third7 from "../images/speedometer/level3/third7.png";
import third8 from "../images/speedometer/level3/third8.png";
import third9 from "../images/speedometer/level3/third9.png";

export type IPosition = {
  top: number;
  left: number;
};

export type ISpeedometerArrow = {
  degree: number;
  translateX: number;
  translateY: number;
};

export type ISpeedometerButtonSetting = {
  onClickFunction: Function;
  color: string;
};

export const arrowFirstLevel: ISpeedometerArrow = {
  degree: 0,
  translateX: 40,
  translateY: 15,
};
export const arrowSecondLevel: ISpeedometerArrow = {
  degree: 120,
  translateX: 45,
  translateY: 18,
};
export const arrowThirdLevel: ISpeedometerArrow = {
  degree: 242,
  translateX: 44,
  translateY: 10,
};

export const firstLevel: string[] = [
  first1,
  first2,
  first3,
  first4,
  first5,
  first6,
  first7,
  first8,
  first9,
];

export const secondLevel: string[] = [
  second1,
  second2,
  second3,
  second4,
  second5,
  second6,
  second7,
  second8,
  second9,
];

export const thirdLevel: string[] = [
  third1,
  third2,
  third3,
  third4,
  third5,
  third6,
  third7,
  third8,
  third9,
];

export const coordinates: IPosition[] = [
  { top: 15, left: 180 },
  { top: 58, left: 255 },
  { top: 155, left: 280 },
  { top: 240, left: 219 },
  { top: 288, left: 127 },
  { top: 235, left: 47 },
  { top: 150, left: 22 },
  { top: 55, left: 27 },
  { top: 14, left: 85 },
];

export enum SliderSides {
  LeftSide,
  RightSide,
}
