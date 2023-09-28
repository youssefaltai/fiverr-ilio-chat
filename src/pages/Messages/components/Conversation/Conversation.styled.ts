import { styled } from "styled-components";
import { IConversation, SelectedConversationType } from "~/features/messages.slice";

type ConversationStyleProps = {
  $selectedConversation: SelectedConversationType;
  $conversation: IConversation;
}

const ConversationStyle = styled.div<ConversationStyleProps>`
  font-family: Inter;
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${(props) => {
    const { $selectedConversation, $conversation } = props;
    const thisConversationIsSelected = $selectedConversation === $conversation.id;
    return thisConversationIsSelected ? "#F0F3F5" : "white";
  }};

  padding: 10px;
  border-radius: 8px;
  gap: 10px;

  margin: 1px 0 1px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background-color: #F0F3F5;
    cursor: pointer;
  }

  @media (width <= 680px) {
    padding: 12px 10px;
  }
`;

export default ConversationStyle;
