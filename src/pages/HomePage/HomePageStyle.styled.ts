import { styled } from "styled-components";

export const HomePageStyle = styled.div`
  .main2 {
    padding-inline: 84px;
    padding-bottom: 40px;
  }

  .cards2 {
    margin-top: calc(66px + 21px);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(266.667px, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 40px;
  }

  .modalWrapper2 {
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .additionalText {
    color:var(--primary-text-color);
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 40px;
    margin-bottom: -10px;
  }
  @media (width <= 743px) {
    .main2 {
      padding-inline: 48px;
    }
  }
  @media (width < 431px) {
    .main2 {
      padding-inline: 24px;
    }
  }
`;
