import { IMessage } from "~/features/messages.slice";
import ImageSvg from "../../Svgs/ImageSvg";
import ConversationLastMessageStyle from "./ConversationLastMessage.styled";

type ConversationLastMessageProps = {
  message: IMessage | undefined;
  read: boolean;
}

const ConversationLastMessage = ({ message, read }: ConversationLastMessageProps) => {
  return (
    <ConversationLastMessageStyle $read={read}>
      {message === undefined ? "" : (
        message.type === "text" ? message.content : (<ImageSvg />)
      )}
    </ConversationLastMessageStyle>
  );
}


export default ConversationLastMessage;
