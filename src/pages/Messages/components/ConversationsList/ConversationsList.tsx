import { useAppDispatch, useAppSelector } from "~/features/hooks";
import ConversationsListStyle from "./ConversationsList.styled";
// import Conversation from "../Conversation/Conversation";
import { markConversationAsRead, setSelectedConversation } from "~/features/messages.slice";
import { lazy, Suspense } from "react";
import ConversationLoading from "../Conversation/Conversation.loading";

const Conversation = lazy(() => import("../Conversation/Conversation"));

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
    <ConversationsListStyle
      $selectedConversation={selectedConversation}
      onTouchMove={
        // Fix momentum scrolling on iOS
        (e) => {
          e.stopPropagation();
        }}>
      {conversations.map((conversation, index) => (
        <Suspense
          key={index}
          fallback={<ConversationLoading />}>
          <Conversation
            onClick={() => {
              selectConversation(conversation.id)
            }}
            selectedConversation={selectedConversation}
            conversation={conversation}
          />
        </Suspense>
      ))}
    </ConversationsListStyle>
  );
}

export default ConversationsList;
