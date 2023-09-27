import { styled } from "styled-components";
import { IMessage } from "~/features/messages.slice";

type ChatMessageStyleProps = {
  $message: IMessage;
}

const ChatMessageStyle = styled.div<ChatMessageStyleProps>`
  font-family: Inter;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$message.fromMe ? "flex-end" : "flex-start"};
  width: 100%;
  padding: 0 0 4px 0;
  overflow-wrap: break-word;
`;

export default ChatMessageStyle;
