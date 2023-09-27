import {styled} from "styled-components"


export const CardStyle = styled.div`

.card {
    box-sizing: border-box;
    height: 100%;
  }
  .chip {
    border-radius: 6px;
    margin: 3px;
    padding: 7.4px 10px !important;
  }
  .chip span {
    font-weight: 600;
  }
  .imageContainer {
    border-radius: 12px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    aspect-ratio: 59 / 56 !important;
  }
  .tag {
    display: flex;
    padding: 7px;
    align-items: center;
  }
  .tag svg {
    margin-left: auto;
  }
  .details > * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .details .location {
    color: var(--primary-text-color);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    margin: 10px auto 0;
  }
  .details .breed {
    color: #485562;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    text-transform: lowercase;
    margin: 3px auto 0;
  }
  
  .details h2 {
    color: var(--primary-text-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    text-transform: capitalize;
    margin: 10px auto 0;
  }
  


`
