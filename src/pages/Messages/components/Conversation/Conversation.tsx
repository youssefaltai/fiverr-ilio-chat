import { useAppDispatch } from "~/features/hooks";
import { IConversation, SelectedConversationType, undoConversationDelete } from "~/features/messages.slice";
import DeletedConversationStyle from "./DeletedConversation.styled";
import DeletedConversationTitle from "./DeletedConversationTitle.styled";
import UndoButton from "./UndoButton.styled";
import ConversationStyle from "./Conversation.styled";
// import ConversationAvatar from "./ConversationAvatar.styled";
import ConversationTitle from "./ConversationDate/ConversationTitle.styled";
import ConversationDate from "./ConversationDate/ConversationDate";
import ConversationInfo from "./ConversationInfo.styled";
import ConversationHeader from "./ConversationHeader.styled";
import ConversationLastMessage from "./ConversationLastMessage/ConversationLastMessage";
import { Suspense, lazy } from "react";
import ConversationAvatarLoading from "./ConversationAvatar.loading";

const ConversationAvatar = lazy(() => import("./ConversationAvatar.styled"));

type ConversationProps = {
  onClick: () => void;
  selectedConversation: SelectedConversationType;
  conversation: IConversation;
}

const Conversation = ({ selectedConversation, onClick, conversation }: ConversationProps) => {
  const dispatch = useAppDispatch();

  const undoDelete = () => {
    clearTimeout(conversation.isDeleting);
    dispatch(undoConversationDelete(conversation.id));
  }

  if (conversation.isDeleting) {
    return (
      <DeletedConversationStyle>
        <DeletedConversationTitle>Deleted</DeletedConversationTitle>
        <UndoButton onClick={undoDelete}>
          undo
        </UndoButton>
      </DeletedConversationStyle>
    );
  }

  return (
    <ConversationStyle
      onClick={onClick}
      $selectedConversation={selectedConversation}
      $conversation={conversation}
    >
      <Suspense fallback={<ConversationAvatarLoading />}>
        <ConversationAvatar
          src={conversation.avatar}
          alt={conversation.title}
          width="46px"
          height="46px"
        />
      </Suspense>
      <ConversationInfo>
        <ConversationHeader>
          <ConversationTitle>
            {conversation.title}
          </ConversationTitle>
          <ConversationDate date={
            conversation.messages.length !== 0 ?
              new Date(conversation.messages[conversation.messages.length - 1].time)
              : undefined
          } />
        </ConversationHeader>
        <ConversationLastMessage
          message={conversation.messages.at(conversation.messages.length - 1)}
          read={conversation.read} />
      </ConversationInfo>
    </ConversationStyle>
  );
}

export default Conversation;
