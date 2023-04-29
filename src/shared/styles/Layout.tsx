import styled from "styled-components";

export const RightPageContainer = styled.div`
  left: 1440px;
  position: absolute;
  background-color: rgba(37, 36, 36, 1);
  height: 900px;
  width: 1440px;
`;

export const LeftPageContainer = styled.div`
  background-color: rgba(37, 36, 36, 1);
  height: 900px;
  width: 1440px;
  animation: show 1s forwards;
  position: absolute;
  overflow: hidden;
`;
