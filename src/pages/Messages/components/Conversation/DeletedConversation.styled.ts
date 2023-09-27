import { styled } from "styled-components";

const DeletedConversationStyle = styled.div`
  font-family: Inter;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #292F3F;

  padding: 18px 16px;
  border-radius: 8px;

  margin: 8px 0 8px 0;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default DeletedConversationStyle;
