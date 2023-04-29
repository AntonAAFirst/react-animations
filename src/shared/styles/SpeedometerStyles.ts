import styled from "styled-components";
import ellipse from "../images/speedometer/ellipse.png";
import arrow from "../images/arrow.png";
import {
  SpeedometerArrowStyledProps,
  SpeedometerCenterStyledProps,
  SpeedometerItemStyledProps,
  SpeedometerLevelButtonStyledProps,
} from "../models/styles";

export const SpeedometerContainer = styled.div`
  width: 350px;
  height: 344px;
  border-radius: 50%;
  position: relative;
  background-color: red;
  top: 270px;
  left: 778px;
  background: url(${ellipse});
  background-color: black;
  border: 12px solid black;
  display: grid;
`;

export const SpeedometerCenter = styled.div<SpeedometerCenterStyledProps>`
  width: 37.93px;
  height: 37.93px;
  background-color: ${(props) => props.color};
  position: absolute;
  top: 154px;
  left: 152px;
  z-index: 1021110;
  border-radius: 50%;
`;

export const SpeedometerArrow = styled.div<SpeedometerArrowStyledProps>`
  margin: auto auto;
  background-color: white;
  width: 210px;
  height: 80px;
  transition: 0.3s;
  background: url(${arrow});
  background-repeat: no-repeat;
  z-index: 1241;
  transform: rotate(${(props) => props.transformDegree}deg)
    translateX(${(props) => props.translateX}px)
    translateY(${(props) => props.translateY}px);
`;

export const SpeedometerLevelButton = styled.div<SpeedometerLevelButtonStyledProps>`
  width: 137px;
  height: 38px;
  background-color: ${(props) => (props.active ? props.color : "transparent")};
  position: absolute;
  left: 1203px;
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 1);
  top: ${(props) => 343 + (props.index - 1) * 80}px;
  z-index: 8001;

  cursor: pointer;

  &:before {
    content: "Level ${(props) => props.index}";
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 8px;
    left: 37px;
    font-family: Montserrat;
    font-weight: 600;
  }

  &:hover {
    background-color: ${(props) => props.color};
  }
`;

export const SpeedometerItem = styled.div<SpeedometerItemStyledProps>`
  width: 200px;
  height: 200px;
  transition: 0.3s;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background: url(${(props) => props.imageString});
  background-repeat: no-repeat;
`;
