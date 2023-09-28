import { styled } from "styled-components";
import { SelectedConversationType } from "~/features/messages.slice";

type ChatStyleProps = {
  $selectedConversation: SelectedConversationType ;
}

const ChatStyle = styled.div<ChatStyleProps>`
  display: ${(props) => props.$selectedConversation !== undefined ? "flex" : "none"};
  font-family: Inter;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  flex: 1;
  max-width: 500px;
  height: 100%;

  padding-left: 80px;

  @media (width <= 680px) {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
  }
`;

export default ChatStyle;
