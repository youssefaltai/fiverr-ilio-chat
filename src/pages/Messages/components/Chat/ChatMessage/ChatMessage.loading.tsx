import { styled } from "styled-components";
import { IMessage } from "~/features/messages.slice";

type ChatMessageLoadingStyleProps = {
  $message: IMessage;
};

const ChatMessageLoadingStyle = styled.div<ChatMessageLoadingStyleProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 8px 0;
  align-items: ${(props) => props.$message.fromMe ? "flex-end" : "flex-start"};
`;

type ChatMessageLoadingProps = {
  message: IMessage;
};

const ChatMessageLoading = ({ message }: ChatMessageLoadingProps) => {
  return (
    <ChatMessageLoadingStyle $message={message}>
      <div
        style={{
          width: "100%",
          maxWidth: "70%",
          backgroundColor: "#F0F3F5",
          borderRadius: "8px",
          padding: "32px 0",
        }}
      />
    </ChatMessageLoadingStyle>
  );
};

export default ChatMessageLoading;
