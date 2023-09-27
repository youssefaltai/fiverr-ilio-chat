import { styled } from "styled-components";

export const EditStyle = styled.div`
  /* *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  } */
  max-width: 64.4rem;
  margin: auto;
  //border: 2px solid red;
  font-family: "Inter";
  //height: 100vh;
  // background-color: white;
  //

  .container {
    max-width: 55rem;
    margin: auto;
    padding: 0px 10px 0 24px;
    position: relative;
    border: 2px solid transparent;
    margin-top: 63px;
    margin-left: auto;
    margin-right: auto;
    // height: 100vh;
  //  border: 2px solid black;
  }
  .logo {
    //border: 2px solid yellow;
    height: 4.13rem;
    background-color: white;
    max-width: 57rem;
    width: calc(100%);
    display: flex;
    align-items: center;
    margin-top: 29px;
    z-index: 999;
    position: fixed;
    //padding: 0px 24px;
    margin-left: 24px;
    cursor: pointer;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .editHeader {
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 0px 24px;
    width: calc(100% - 48px);
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    //border: 2px solid yellow;
    height: 66px;
    z-index: 999;
    top: 0px;
    background-color: white;
    position: fixed;
    display: none;

    p {
      text-transform: capitalize;
      font-family: "Inter";
      font-size: 16px;
      font-weight: 600;
      color: var(--primary-text-color);
    }
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
    gap: 1.5rem;
    width: 166px;
  }

  .optionsPhone {
    display: none;
    width: 100%;
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

  .line {
    height: 491px;
    background-color: #dfe1e5;
    width: 1px;
    border: none;
  }

  .tab1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 50px;
  }

  .profilePic {
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 8px;
    }

    button {
      padding: 0px 10px;
      height: 30px;
      border-radius: 6px;
      border: none;
      background-color: #f0f3f5;
      color: var(--primary-text-color);
      font-size: 12px;
      font-weight: 500;
      text-transform: capitalize;
      font-style: normal;
      line-height: normal;
      font-family: "Inter";
      max-width: 100px;
    }
  }

  .profileDetails {
    margin-top: 2.5rem;
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

  .input {
    display: flex;
    flex-direction: column;
    gap: 24px;

    label {
      font-size: 14px;
      color: #485562;
    }
    input {
      height: 40px;
      max-width: 470px;
      width: calc(100% - 44px);
      //width: 100%;
    }
  }

  .tab2 {
   //  border: 2px solid blue;
    width: 100%;
  }

  .save {
    margin-top: 37px;
    button {
      max-width: 500px;
      width: calc(100% - 14px);
      height: 40px;
      background-color: var(--primary-text-color);
      color: white;
      border-radius: 8px;
      font-weight: 500px;
      font-style: normal;
      font-family: "Roboto";
      font-size: 16px;
      cursor: pointer;
      border: none;
      margin-bottom: 20px;
    }
  }

  .describe {
    textarea {
      // height: 40px;
      max-width: 470px;
      width: calc(100% - 44px);
      outline: 1px solid #c9ced3;
      border: none;
      padding: 14px 15px;
      font-size: 14px;
      font-family: "Inter";
      border-radius: 8px;
      line-height: 14px;
      resize: none;
      color: var(--primary-text-color);
      
    }

    textarea::placeholder {
      font-family: "Inter";
      font-size: 14px;
      color: #485562 !important;
      opacity: 1 !important /* firefox    */;
    }
  }

  .email {
    .inputLabelInput input {
      text-transform: none;
    }
  }

  @media screen and (max-width: 744px) {
    .editHeader {
      display: flex;
      width: 100vw;
    }
    .container {
      margin-top: 66px;
      border: none;
    }

    .flexContainer {
      margin-top: 0px;
    }
    .logo {
      display: none;
    }
    .options {
      display: none;
    }

    .optionsPhone {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 184px;
      //border: 2px solid red;
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
      width: auto;
      border-radius: 12px 12px 0px 0px;
      margin-top: -12px;
      z-index: 2;
      background-color: white;
    }
    .input {
      input {
        max-width: 700px;
        width: calc(100% - 32px);
      }
    }

    .describe {
      textarea {
        max-width: 700px;
        width: calc(100% - 32px);
      }
    }
    .save {
      button {
        max-width: 700px;
        width: calc(100% );
      }
    }
  }

  @media screen and (max-width: 431px) {
    .describe {
      textarea {
        font-size: 16px !important;
      }
    }

    textarea::placeholder {
      font-family: "Inter";
      font-size: 16px;
      color: #485562 !important;
      opacity: 1 !important; /* fireFox */
    }
  }
`;
