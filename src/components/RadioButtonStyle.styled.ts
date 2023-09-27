import { styled } from "styled-components";

export const RadioStyle = styled.div`
  .radioButton {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .radioButton input {
    margin: 0;
    height: 20px;
    width: 20px;
  }

  .radioButton input:checked {
    accent-color: var(--primary-text-color);
  }

  .radioButton label {
    color: var(--primary-text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    text-transform: capitalize;
  }
`;
