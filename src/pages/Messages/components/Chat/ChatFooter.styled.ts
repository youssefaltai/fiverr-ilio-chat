import { styled } from "styled-components";

const ChatFooter = styled.div`
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
  padding: 15px 0;

  @media (width <= 680px) {
    padding: 15px 24px;
  }
`;

export default ChatFooter;
