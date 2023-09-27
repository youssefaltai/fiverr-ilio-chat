import { styled } from "styled-components";

const UndoButton = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: white;

  background-color: #292F3F;
  border: none;
  border-radius: 6px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

export default UndoButton;
