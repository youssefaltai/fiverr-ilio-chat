import { styled } from "styled-components";

const ChatImageMessageContent = styled.img`
  min-width:  202px;
  max-width:  202px;
  border-radius: 8px;
  background: url(${(props) => props.src}) no-repeat center center;
  object-fit: cover;
`;

export default ChatImageMessageContent;
