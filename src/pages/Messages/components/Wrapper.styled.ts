import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;

  box-sizing: border-box;
  padding: 0 24px 0 14px;

  @media (width <= 680px) {
    padding: 0;
  }
`;

export default Wrapper;
