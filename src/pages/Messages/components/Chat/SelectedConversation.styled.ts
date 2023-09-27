import { styled } from "styled-components";
import { SelectedConversationType } from "~/features/messages.slice";

type SelectedConversationProps = {
  $selectedConversation: SelectedConversationType;
}

const SelectConversation = styled.div<SelectedConversationProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: #485562;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;
  max-width: 500px;
  height: 100%;

  padding-left: 80px;

  @media (width <= 680px) {
    display: ${(props) => props.$selectedConversation !== undefined ? "flex" : "none"};
  }
`;

export default SelectConversation;
