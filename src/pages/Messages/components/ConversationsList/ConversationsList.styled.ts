import { styled } from "styled-components";
import { SelectedConversationType } from "~/features/messages.slice";

type ConversationsListProps = {
  $selectedConversation: SelectedConversationType;
}

const ConversationsListStyle = styled.div<ConversationsListProps>`
  font-family: Inter;
  overflow-y: scroll;

  flex: 1;
  max-width: 338px;

  height: 100%;
  max-height: 865px;

  padding-right: 70px;
  border-right: 1px solid #DFE1E5;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (width <= 680px) {
    display: ${(props) => props.$selectedConversation === undefined ? "block" : "none"};
    width: 100%;
    max-width: 100%;
    padding-right: 0;
    padding: 0 14px;
    border-right: none;
  }
`;

export default ConversationsListStyle;
