import { styled } from "styled-components";

const ChatInput = styled.textarea`
  flex: 1;

  background-color: #F0F3F5;
  color: #292F3F;

  border: none;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 11px 15px;

  font-family: Inter;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;

  &::placeholder {
    font-weight: 300;
    color: #485562;
  }

  resize: none;
  outline: none;

  min-height: 40px;
  max-height: 75px;

  @media (width <= 680px) {
    font-size: 16px;
  }
`;

export default ChatInput;
