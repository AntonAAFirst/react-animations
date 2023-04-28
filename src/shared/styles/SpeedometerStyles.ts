import styled from "styled-components";
import ellipse from "../images/speedometer/ellipse.png";
import arrow from "../images/arrow.png";
import {
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
`;

export const SpeedometerCenter = styled.div`
  width: 37.93px;
  height: 37.93px;
  background-color: rgba(122, 11, 192, 1);
  position: absolute;
  top: 154px;
  left: 152px;
  z-index: 100;
  border-radius: 50%;
`;

export const SpeedometerArrow = styled.div`
  top: 155px;
  left: 130px;
  position: relative;
  background-color: white;
  width: 210px;
  height: 80px;
  transition: 1s;
  background: url(${arrow});
  background-repeat: no-repeat;
  // border: 2px solid green;
  //   z-index: 1241;
  animation: moving ease-in 0.1s;
  //   transform: rotate(100deg) translateY(86px) translateX(45px);
  //   background-color: orange;
  @keyframes moving {
    0% {
      transform: translateX(0) translateY(0);
      //   transform: translateX(-100px) translateY(-100px);
    }

    50% {
      transform: rotate(55deg) translateY(60px);
    }

    100% {
      transform: rotate(100deg) translateY(86px) translateX(45px);
    }
  }
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
