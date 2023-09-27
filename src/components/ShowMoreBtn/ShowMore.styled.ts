import {styled} from "styled-components";
export const ShowMore = styled.div`
.main {
    border-radius: 12px;
    border: 1px solid var(--primary-text-color);
    height: 44px;
    display: grid;
    place-items: center;
    width: fit-content;
    padding-inline: 24px;
    margin: 30px auto;
    cursor: pointer;
    background-color: var(--primary-text-color);
  }
  
  .main span {
    display: block;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: white;
  }
  `