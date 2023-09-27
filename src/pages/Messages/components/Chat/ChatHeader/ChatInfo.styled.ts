import { styled } from "styled-components";

const ChatInfo = styled.div`
  font-family: 'Inter', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default ChatInfo;
