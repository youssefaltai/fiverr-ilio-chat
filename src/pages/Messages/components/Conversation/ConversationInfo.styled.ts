import { styled } from 'styled-components';

const ConversationInfo = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


export default ConversationInfo;
