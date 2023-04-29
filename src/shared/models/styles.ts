import { SliderSides } from "./types";

export interface TextStyledProps {
  top: number;
}

export interface ButtonGoHoverStyledProps {
  active: boolean;
}

export interface BurgerMenuStyledProps {
  active: boolean;
}

export interface SpeedometerLevelButtonStyledProps {
  active: boolean;
  color: string;
  index: number;
}

export interface SpeedometerItemStyledProps {
  top: number;
  left: number;
  imageString: string;
}

export interface SpeedometerCenterStyledProps {
  color: string;
}

export interface SpeedometerArrowStyledProps {
  transformDegree: number;
  translateX: number;
  translateY: number;
}

export interface SliderImageStyledProps {
  animationType: SliderSides;
}
