import { styled } from "styled-components";

const ChatHeaderStyle = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  padding: 18px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (width <= 680px) {
    display: none;
  }
`;

export default ChatHeaderStyle;
