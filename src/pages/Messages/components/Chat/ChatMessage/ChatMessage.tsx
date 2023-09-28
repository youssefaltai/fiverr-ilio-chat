import moment from "moment";
import { IMessage } from "~/features/messages.slice";
import ChatMessageStyle from "./ChatMessage.styled";
import ChatImageMessageContent from "./ChatImageMessageContent.styled";
import ChatTextMessageContent from "./ChatTextMessageContent.styled";
import ChatMessageTime from "./ChatMessageTime.styled";

type ChatMessageProps = {
  message: IMessage;
  showTime: boolean;
}

const ChatMessage = ({ message, showTime }: ChatMessageProps) => {
  return (
    <ChatMessageStyle $message={message}>
      {message.type === "text" ? (
        <ChatTextMessageContent $message={message}>
          {message.content}
        </ChatTextMessageContent>
      ) : (
        <ChatImageMessageContent
          src={message.content}
          alt="message"
          width="202px"
        />
      )}
      {showTime && (
        <ChatMessageTime>
          {moment(message.time).format("h:mm A")}
        </ChatMessageTime>
      )}
    </ChatMessageStyle>
  );
}

export default ChatMessage;
