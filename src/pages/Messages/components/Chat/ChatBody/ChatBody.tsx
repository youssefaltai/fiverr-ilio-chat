import moment from "moment";
import { useAppSelector } from "~/features/hooks";
import { SelectedConversationType } from "~/features/messages.slice";
import ChatBodyStyle from "./ChatBody.styled";
// import ChatMessage from "../ChatMessage/ChatMessage";
import ChatDateSeparator from "./ChatDateSeparator.styled";
import { Suspense, lazy } from "react";
import ChatMessageLoading from "../ChatMessage/ChatMessage.loading";

const ChatMessage = lazy(() => import("../ChatMessage/ChatMessage"));

type ChatBodyProps = {
  selectedConversation: SelectedConversationType;
}

const ChatBody = ({ selectedConversation }: ChatBodyProps) => {
  const conversations = useAppSelector((state) => state.messages.conversations);
  const convo = conversations.find((conversation) => conversation.id === selectedConversation);

  // reverse messages
  const messages = [
    ...convo?.messages ?? []
  ].reverse();

  return (
    <ChatBodyStyle>
      {messages.map((message, index) => (
        <div
          key={index}
        >
          <Suspense fallback={<ChatMessageLoading message={message} />}>
            <ChatMessage
              message={message}
              showTime={
                index === 0 ||
                messages.at(index - 1)?.fromMe !== message.fromMe ||
                moment(message.time).diff(moment(messages.at(index - 1)?.time), "minutes") > 5
              }
            />
          </Suspense>
          {/* Date separator if day changes */}
          {(moment(message.time).dayOfYear() !== moment(messages.at(index - 1)?.time).dayOfYear() && index !== 0) && (
            <ChatDateSeparator>
              {moment(messages.at(index - 1)?.time).format("MMM D")}
            </ChatDateSeparator>
          )}
        </div>
      ))}
    </ChatBodyStyle>
  );
}

export default ChatBody;
