import { styled } from "styled-components";

const ChatAvatar = styled.img`
  min-width:  36px;
  min-height: 36px;
  max-width:  36px;
  max-height: 36px;
  border-radius: 6px;
  background: url(${(props) => props.src}) no-repeat center center;
  object-fit: cover;
`;

export default ChatAvatar;
