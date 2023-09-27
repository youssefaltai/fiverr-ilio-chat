import { styled } from "styled-components";

const AppLogo = styled.img.attrs({
  src: "/Frame 87.png",
  alt: "logo",
})`
  padding-left: 10px;
  cursor: pointer;

  @media (width <= 680px) {
    display: none;
  }
`;


export default AppLogo;
