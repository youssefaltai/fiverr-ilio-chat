import { styled } from "styled-components";

const ConversationAvatar = styled.img`
  min-width: 46px;
  min-height: 46px;
  max-width: 46px;
  max-height: 46px;
  border-radius: 6px;
  background: url(${(props) => props.src}) no-repeat center center;
  object-fit: cover;
`;

export default ConversationAvatar;
