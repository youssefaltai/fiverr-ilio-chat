import { styled } from "styled-components";

export const LayoutStyle = styled.div`
  .container3 {
    height: calc(26px + 40px);
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: calc(100% - 84px - 84px);

    padding-inline: 84px;
    background-color: white;
    z-index: 2;
  }
  

  .notification {
    display: none;
  }

  
  .notificationNone {
    display: block;
  }

  .help {
    color: #000;
    text-align: center;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 20px;
    a {
      text-decoration: none;
      color: #000;
    }
  }

  .noHelp{
    color: #000;
    text-align: center;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    display: none;
    gap: 20px;
    a {
      text-decoration: none;
      color: #000;
    }
  
  }

  .signin {
    width: 86px;
    height: 40px;
    border-radius: 8px;
    background: #5a40c7;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 500;
    font-size: 14px;
    button{
      font-size: 14px;
      font-weight: 500;
    }
  }

    @media screen and (max-width:930px) {
       .help{
        display: none;
       }

       .notification{
        display: block;
       }
    }
  @media (width <= 743px) {
    .container3 {
      padding-inline: 48px;
      width: calc(100% - 48px - 48px);
    }
    .logo3 {
      display: none;
    }
  }
  @media (width < 431px) {
    .container3 {
      padding-inline: 24px;
      width: calc(100% - 24px - 24px);
    }
  }
`;
