import { styled } from "styled-components";
import { SelectedConversationType } from "~/features/messages.slice";

type NavbarBackButtonTitleProps = {
  $selectedConversation: SelectedConversationType;
}

const NavbarBackButtonTitle = styled.span<NavbarBackButtonTitleProps>`
  display: ${(props) => props.$selectedConversation !== undefined ? "none" : "block"};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  color: #292F3F;

  padding-left: 12px;
`;

export default NavbarBackButtonTitle;
