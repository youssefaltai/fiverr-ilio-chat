import { useAppDispatch, useAppSelector } from "~/features/hooks";
import ConversationsListStyle from "./ConversationsList.styled";
import Conversation from "../Conversation/Conversation";
import { markConversationAsRead, setSelectedConversation } from "~/features/messages.slice";

const ConversationsList = () => {
  const selectedConversation = useAppSelector((state) => state.messages.selectedConversation);
  const conversations = useAppSelector((state) => state.messages.conversations);
  const dispatch = useAppDispatch();

  const selectConversation = (id: number) => {
    // When selecting a conversation, mark the previously selected conversation as read
    // before selecting the new one
    if (selectedConversation !== undefined) {
      dispatch(markConversationAsRead(selectedConversation));
    }

    dispatch(setSelectedConversation(id));
  }

  return (
    <ConversationsListStyle $selectedConversation={selectedConversation}>
      {conversations.map((conversation, index) => (
        <Conversation
          key={index}
          onClick={() => {
            selectConversation(conversation.id)
          }}
          selectedConversation={selectedConversation}
          conversation={conversation}
        />
      ))}
    </ConversationsListStyle>
  );
}

export default ConversationsList;
