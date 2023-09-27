import { styled } from "styled-components";

const ChatMessageTime = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #485562;

  padding: 3px 0 10px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default ChatMessageTime;
