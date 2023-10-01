import { styled } from "styled-components";

const Main = styled.div`
  font-family: Inter;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: calc(100vh - 66px - 66px - 10px - 5px);

  @media (width <= 680px) {
    height: calc(100dvh - 66px - 10px - 5px);
  }
`;

export default Main;
