import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/features/hooks";
import { markConversationAsRead, unselectConversation } from "~/features/messages.slice";
import NavbarStyle from "./Navbar.styled";
import AppLogo from "./AppLogo.styled";
import NavbarBackButton from "./NavbarBackButton.styled";
import NavbarBackButtonIcon from "./NavbarBackButtonIcon.styled";
import NavbarBackButtonTitle from "./NavbarBackButtonTitle.styled";
import ChatHeader from "../Chat/ChatHeader/ChatHeader";
import NavbarChatHeaderStyle from "./NavbarChatHeader.styled";
import BackSvg from "../Svgs/BackSvg";

type NavbarProps = {
  title: string;
  onDeleteClicked: (id: number) => void;
}

const Navbar = ({
  title,
  onDeleteClicked
}: NavbarProps) => {
  const navigate = useNavigate();
  const selectedConversation = useAppSelector((state) => state.messages.selectedConversation);
  const dispatch = useAppDispatch();

  const navigateBack = () => {
    if (selectedConversation !== undefined) {
      dispatch(markConversationAsRead(selectedConversation));
      dispatch(unselectConversation());
    } else {
      navigate(-1);
    }
  }

  return (
    <NavbarStyle>
      <AppLogo onClick={() => navigate("/")} />
      <NavbarBackButton>
        <NavbarBackButtonIcon onClick={navigateBack} aria-label="Back">
          <BackSvg />
        </NavbarBackButtonIcon>
        <NavbarBackButtonTitle $selectedConversation={selectedConversation}>
          {title}
        </NavbarBackButtonTitle>
        <ChatHeader
          ChatHeaderStyle={NavbarChatHeaderStyle}
          onDeleteClicked={onDeleteClicked}
        />
      </NavbarBackButton>
    </NavbarStyle>
  );
};

export default Navbar;
