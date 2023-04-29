import sliderBackground from "../images/slider/sliderBackground.png";
import styled from "styled-components";

export const SliderContainer = styled.div`
  background: url(${sliderBackground});
  background-repeat: no-repeat;
  position: absolute;
  width: 500px;
  height: 530px;
  top: 155px;
  left: 815px;
  display: grid;
  z-index: 2;
`;

export const SliderBackButton = styled.div`
  border-right: 10px solid rgba(118, 75, 162, 1);
  border-top: 10px solid rgba(118, 75, 162, 1);
  width: 33px;
  position: absolute;
  transform: rotate(-135deg);
  height: 33px;
  top: 624px;
  left: 851px;
  cursor: pointer;
  z-index: 1000;
`;

export const SliderForwardButton = styled.div`
  transform: rotate(45deg);
  border-right: 10px solid rgba(118, 75, 162, 1);
  border-top: 10px solid rgba(118, 75, 162, 1);
  position: absolute;
  width: 33px;
  height: 33px;
  top: 624px;
  left: 949px;
  cursor: pointer;
  z-index: 1000;
  }
`;

interface BlockProps {
  degreePX: string;
}

export const SliderImages = styled.div<BlockProps>`
  transition: 0.45s;
  top: 170px;
  position: absolute;
  left: 850px;
  z-index: 2;
  transform: rotate(${(props) => props.degreePX});
  width: 1500px;
  height: 1500px;
`;

export const SliderImgFirst = styled.img`
  width: 500px;
  height: 500px;
`;

export const SliderImgSecond = styled.img`
  transform: rotate(90deg);
  width: 500px;
  height: 500px;
  position: absolute;
  left: 1000px;
`;

export const SliderImgThird = styled.img`
  width: 500px;
  height: 500px;
  position: absolute;
  left: 1000px;
  top: 1000px;
  transform: rotate(-180deg);
`;
