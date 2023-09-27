import { styled } from "styled-components";

type ChatSendButtonProps = {
  $variant: "text" | "image";
}

const ChatSendButton = styled.button<ChatSendButtonProps>`
  min-width:  40px;
  max-width:  40px;
  min-height: 40px;
  max-height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: none;
  outline: none;

  background-color: ${(props) => props.$variant === "text" ? "#292F3F" : "#F0F3F5"};
  color: ${(props) => props.$variant === "text" ? "white" : "#292F3F"};

  &:hover {
    cursor: pointer;
  }
`;

export default ChatSendButton;
