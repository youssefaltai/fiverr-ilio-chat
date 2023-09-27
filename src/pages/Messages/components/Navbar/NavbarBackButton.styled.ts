import { styled } from "styled-components";

const NavbarBackButton = styled.div`
  display: none;

  @media (width <= 680px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;

export default NavbarBackButton;
