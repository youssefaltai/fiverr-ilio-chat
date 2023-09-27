import { styled } from "styled-components";
import ChatHeaderStyle from "../common/ChatHeader.styled";

type NavbarChatHeaderStyleProps = {
  $selectedConversation: number | null;
}

const NavbarChatHeaderStyle = styled(ChatHeaderStyle) <NavbarChatHeaderStyleProps>`
  padding: 0 0 0 12px;

  @media (width <= 680px) {
    display: ${(props) => props.$selectedConversation !== undefined ? "flex" : "none"};
  }
`;


export default NavbarChatHeaderStyle;
