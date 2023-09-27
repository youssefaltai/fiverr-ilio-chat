import { IStyledComponent } from "styled-components";
import ChatAvatar from "./ChatAvatar.styled";
import ChatInfo from "./ChatInfo.styled";
import ChatTitle from "./ChatTitle.styled";
import ChatSubtitle from "./ChatSubtitle.styled";
import ChatActions from "./ChatActions.styled";
import ChatAction from "./ChatAction.styled";
import DeleteSvg from "../../Svgs/DeleteSvg";
import { useAppSelector } from "~/features/hooks";

type ChatHeaderProps = {
  ChatHeaderStyle: IStyledComponent<any, any>;
  onDeleteClicked: (id: number) => void;
}

const ChatHeader = ({ ChatHeaderStyle, onDeleteClicked }: ChatHeaderProps) => {
  const selectedConversation = useAppSelector((state) => state.messages.selectedConversation);
  const conversations = useAppSelector((state) => state.messages.conversations);
  const convo = selectedConversation !== undefined
    ? conversations.find((conversation) => conversation.id === selectedConversation)
    : undefined;

  return (
    <ChatHeaderStyle $selectedConversation={convo}>
      <ChatAvatar src={convo?.avatar} />
      <ChatInfo>
        <ChatTitle>
          {convo?.title}
        </ChatTitle>
        <ChatSubtitle>
          {convo?.subtitle}
        </ChatSubtitle>
      </ChatInfo>
      <ChatActions>
        <ChatAction onClick={() => onDeleteClicked(convo?.id ?? -1)}>
          <DeleteSvg />
        </ChatAction>
      </ChatActions>
    </ChatHeaderStyle>
  );
}

export default ChatHeader;
