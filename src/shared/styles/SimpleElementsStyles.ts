import { TextStyledProps } from "../models/styles";
import styled from "styled-components";

export const UpWave = styled.img`
  position: absolute;
  top: 0;
`;

export const BottomWave = styled.img`
  position: absolute;
  bottom: 0;
`;

export const ButtonGoDefaultColor = styled.div`
  position: absolute;
  background: linear-gradient(
    to right,
    rgba(122, 11, 192, 1),
    rgba(250, 88, 182, 1)
  );
  z-index: 14;
  transition: 0.8s;
  opacity: 1;
`;

export const ButtonGoHoverColor = styled.div`
  position: absolute;
  transition: 0.8s;
  opacity: 0;
  z-index: 15;
  background: linear-gradient(
    to right,
    rgba(122, 11, 192, 1),
    rgba(250, 88, 182, 1),
    rgba(56, 88, 199, 1)
  );
`;

export const ButtonGoContainer = styled.div`
  position: relative;
  top: 582px;
  left: 100px;
  z-index: 315;
  width: 300px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.5s;
  background: linear-gradient(
    to right,
    rgba(122, 11, 192, 1),
    rgba(250, 88, 182, 1)
  );

  ${ButtonGoDefaultColor}, ${ButtonGoHoverColor} {
    width: 300px;
    height: 60px;
    border-radius: 30px;
  }

  &:before {
    content: "GO";
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
    font-family: Montserrat;
    position: absolute;
    top: 18px;
    z-index: 990;
    left: 133px;
    font-weight: 700;
  }
  &:hover {
    box-shadow: 8px 8px 8px 0px black;
    top: 580px;
  }
  &:hover ${ButtonGoHoverColor} {
    opacity: 1;
  }
`;

export const MainText = styled.div<TextStyledProps>`
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 400;
  color: rgba(255, 233, 246, 1);
  position: absolute;
  left: 100px;
  width: 618px;
  top: ${(props) => props.top}px;
`;

export const SecondaryText = styled.div<TextStyledProps>`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  width: 570px;
  color: rgba(255, 233, 246, 1);
  position: absolute;
  left: 100px;
  top: ${(props) => props.top}px;
`;

export const MenuButtonContainer = styled.div`
  width: 33px;
  height: 22px;
  position: absolute;
  left: 101px;
  top: 50px;
  display: grid;
  gap: 5.5px;
  cursor: pointer;
`;

export const MenuButtonItem = styled.div`
  width: 33px;
  height: 4px;
  background-color: rgba(255, 255, 255, 1);
`;

export const BackButtonHoverColor = styled.div`
  position: absolute;
  background: linear-gradient(
    to right,
    rgba(122, 11, 192, 1),
    rgba(250, 88, 182, 1)
  );
  opacity: 0;
  transition: 0.5s;
`;

export const BackButton = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 30px;
  border: 2px solid rgba(255, 255, 255, 1);
  position: relative;
  left: 100px;
  top: 583px;
  transition: 1s;
  cursor: pointer;

  ${BackButtonHoverColor} {
    width: 300px;
    height: 60px;
    border-radius: 30px;
  }

  &:before {
    content: "BACK";
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
    font-family: Montserrat;
    position: absolute;
    top: 18px;
    z-index: 2;
    left: 120px;
    font-weight: 700;
  }
  &:hover ${BackButtonHoverColor} {
    opacity: 1;
  }
`;
