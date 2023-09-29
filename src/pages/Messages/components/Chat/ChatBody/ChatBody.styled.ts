import { styled } from "styled-components";

const ChatBodyStyle = styled.div`
  font-family: Inter;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  flex: 1;

  /* Align to bottom */
  display: flex;
  flex-direction: column-reverse;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (width <= 680px) {
    max-width: calc(100% - 48px);
    align-self: center;
  }

`;

export default ChatBodyStyle;
