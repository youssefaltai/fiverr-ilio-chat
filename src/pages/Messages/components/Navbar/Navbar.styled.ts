import { styled } from "styled-components";

const NavbarStyle = styled.div`
  height: 66px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: calc(100% - 48px);
  overflow: hidden;
  background-color: white;
  z-index: 999;

  @media (width <= 680px) {
    padding: 0 24px;
  }
`;


export default NavbarStyle;
