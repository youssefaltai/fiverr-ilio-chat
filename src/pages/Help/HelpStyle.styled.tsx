import { styled } from "styled-components";

export const HelpStyle = styled.div`
  .logo {
    //border: 2px solid yellow;
    height: 4.13rem;
    background-color: white;
    max-width: 66.5rem;
    width: calc(100%);
    display: flex;
    align-items: center;
    margin-top: 29px;
    z-index: 999;
    position: fixed;
    //padding: 0px 24px;
    margin-left: 24px;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .editHeader {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 0px 24px;
    width: calc(100% - 48px);
    font-size: 16px;
    font-weight: 600;
    //border: 2px solid yellow;
    height: 66px;
    z-index: 999;
    top: 0px;
    background-color: white;
    position: fixed;
    display: none;
    cursor: pointer;
    p {
      text-transform: capitalize;
      font-family: "Inter";
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
    }
  }

  a{
    text-decoration: none;
  }

  .line {
    height: 192px;
    background-color: #dfe1e5;
    width: 1px;
    border: none;
  }

  .container {
    max-width: 63.72rem;
    margin: auto;
    padding: 0px 24px 0 24px;
    position: relative;
    border: 2px solid transparent;
    margin-top: 63px;
    margin-left: auto;
    margin-right: auto;
    // height: 100vh;
   // border: 2px solid black;
  }

  .flexContainer {
    margin-top: 1.95rem;
    font-size: 14px;
    display: flex;
    gap: 100px;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 1.94rem;
    width: 200px;
   // border: 2px solid red;
  }

  .listColor {
    font-weight: 600;
    color: var(--primary-text-color);
    //color: #6A7075;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    text-transform: capitalize;
    font-family: "Inter";
  }

  .list {
    display: flex;
    font-family: "Inter";
    flex-direction: row;
    align-items: center;
    gap: 20px;
    color: #6a7075;
    font-weight: 500;
    cursor: pointer;
    text-transform: capitalize;
    p {
      color: #6a7075;
    }
  }

  .tab1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 100px;
  }

  .listColor1 {
    font-weight: 600;
    color: white;
    //color: #6A7075;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    text-transform: capitalize;
    font-family: "Inter";
  }
  .profileHead {
    font-weight: 600;
    color: var(--primary-text-color);
    text-transform: capitalize;
    font-family: "Inter";
    font-style: normal;
    line-height: normal;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .profileBody {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    font-family: "Inter";
    color: var(--primary-text-color);
    margin-bottom: 24px;
    font-style: normal;
  }

  .tab2 {
    max-width: 600px;
    width: 100%;
    //border: 2px solid green;
  }

  .optionsPhone {
    display: none;
    width: 100%;
  }

  @media screen and (max-width: 744px) {
    .editHeader {
      display: flex;
      width: 100vw;
    }

    .logo {
      display: none;
    }

    .container {
      margin-top: 66px;
      border: none;
    }

    .flexContainer {
      margin-top: 0px;
    }

    /////

    .optionsPhone {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100vw;
      //border: 2px solid red;
    }

     .options{
        display: none;
     }

    .container {
      padding: 0;
    }

    .flexContainer {
      flex-direction: column;
      gap: 0px;
    }

    .tab1 {
      background-color: #292f3f;
      padding: 24px 24px 38px;
    }

    .line {
      display: none;
    }

    .tab2 {
      padding: 41px 24px;
      max-width: 100vw;
      width: auto;
      border-radius: 12px 12px 0px 0px;
      margin-top: -12px;
      z-index: 2;
      background-color: white;
    }
  }
`;
