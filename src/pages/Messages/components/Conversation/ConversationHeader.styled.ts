import { styled } from "styled-components";

const ConversationHeader = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


export default ConversationHeader;
