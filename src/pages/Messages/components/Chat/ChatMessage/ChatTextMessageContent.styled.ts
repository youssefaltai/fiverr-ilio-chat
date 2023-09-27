import { styled } from "styled-components";
import { IMessage } from "~/features/messages.slice";

type ChatTextMessageContentProps = {
  $message: IMessage;
};

const ChatTextMessageContent = styled.div<ChatTextMessageContentProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.$message.fromMe ? "white" : "#292F3F"};
  background-color: ${(props) => props.$message.fromMe ? "#292F3F" : "#F0F3F5"};
  border-radius: 8px;
  padding: 10px 15px;
  max-width: 330px;
`;

export default ChatTextMessageContent;
