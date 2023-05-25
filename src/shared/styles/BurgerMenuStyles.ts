import { BurgerMenuStyledProps } from "../models/styles";
import styled from "styled-components";

export const BurgerMenuContainer = styled.div<BurgerMenuStyledProps>`
  height: 100vh;
  width: 100vw;
  z-index: 10100;
  position: fixed;
  transform: scale(${(props) => (props.active ? 1 : 0)});
`;

export const BurgerMenuPanel = styled.div<BurgerMenuStyledProps>`
  width: 375px;
  height: 900px;
  position: fixed;
  top: 0;
  z-index: 10200;
  transition: 1s;
  transform: translateX(${(props) => (props.active ? 0 : "-400px")});
  background-color: rgba(9, 9, 9, 1);
`;

export const BurgerMenuPhoneNumber = styled.div<BurgerMenuStyledProps>`
  position: fixed;
  top: 616px;
  left: 70px;
  z-index: 10300;
  color: rgba(255, 255, 255, 1);
  transform: translateX(${(props) => (props.active ? 0 : "-400px")});
  transition: 1s;
  &:before {
    content: "8 800 000 00 00";
    font-family: "Montserrat";
    font-size: 24px;
  }
`;

export const Cross = styled.div<BurgerMenuStyledProps>`
  z-index: 10300;
  width: 25px;
  height; 25px;
  position: fixed;
  top: 29px;
  left: 328px;
  cursor: pointer;  
  transition: 1s;

  transform: translateX(${(props) => (props.active ? 0 : "-400px")});

  &:before{
    content: "";
    position: absolute;
    top: 5px;
    width: 35px;
    height: 5px;
    background-color: rgba(255, 255, 255, 1);
    transform: rotate(45deg);
  }
  &:after{
    content: "";
    position: absolute;
    top: 5px;
    width: 35px;
    height: 5px;
    background-color: rgba(255, 255, 255, 1);
    transform: rotate(-45deg);
  }
`;
export const BurgerMenuItemPrimaryText = styled.div`
  font-size: 24px;
  transition: 0.2s;
`;

export const BurgerMenuItemSecondaryText = styled.div`
  position: absolute;
  bottom: 0;
  transition: 0.2s;
  font-size: 0;
`;

export const BurgerMenuItemContainer = styled.div<BurgerMenuStyledProps>`
  width: 150px;
  color: rgba(255, 255, 255, 1);
  font-family: Montserrat;
  transition: 1s;
  z-index: 10300;
  transform: translateX(${(props) => (props.active ? 0 : "-400px")});
  cursor: pointer;

  &:hover ${BurgerMenuItemPrimaryText} {
    color: rgba(122, 11, 192, 1);
    transform: rotate(-10deg) translateY(-15px);
  }

  &:hover ${BurgerMenuItemSecondaryText} {
    transform: translate(63px);
    font-size: 12px;
  }
`;

export const BurgerMenuList = styled.div`
  display: grid;
  z-index: 8000;
  position: fixed;
  top: 257px;
  left: 70px;
  gap: 39px;
  z-index: 10300;
  width: max-content;
`;
