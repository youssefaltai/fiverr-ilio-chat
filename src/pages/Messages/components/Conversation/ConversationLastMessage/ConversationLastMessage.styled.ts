import { styled } from "styled-components";

type ConversationLastMessageStyleProps = {
  $read: boolean;
}

const ConversationLastMessageStyle = styled.div<ConversationLastMessageStyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: ${(props) => props.$read === false ? "500" : "300"};
  font-size: 14px;
  color: ${(props) => props.$read === false ? "#292F3F" : "#485562"};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default ConversationLastMessageStyle;
