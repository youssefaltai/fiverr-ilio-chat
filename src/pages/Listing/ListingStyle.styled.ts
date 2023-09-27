import { styled } from "styled-components";

export const ListingStyle = styled.div`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .logo {
    //border: 2px solid yellow;
    height: 4.13rem;
    background-color: white;
    max-width: 52.5rem;
    width: calc(100%);
    display: flex;
    align-items: center;
    margin-top: 29px;
    z-index: 0;
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
    //z-index: 999;
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

  color: var(--primary-text-color);
  margin: auto;
  max-width: 51.5rem;
 // border: 2px solid yellowgreen;
  padding-left: 24px;
  // padding-right: 24px;
  .flexContainer {
    margin-top: 98px;
    //border: 2px solid red;
    display: flex;
    margin-right: 24px;
    gap: 100px;
    margin-bottom: 24px;
  }

  .listing {
    display: flex;
    gap: 20px;
    color: #292f3f;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    height: 27px;
    img {
      height: 24px;
    }

    p {
      margin: auto;
    }
  }

  .line {
    width: 1px;
    height: auto;
    background-color: #dfe1e5;
  }

  .tab1 {
    display: flex;
    //gap: 100px;
  }

  .tab2 {
    display: flex;
    gap: 100px;
  }

  .imageStyling {
    img {
      width: 50px;
      height: 50px;
      border-radius: 6px;
      object-fit: cover; /* might change */
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
   
    height: 50px;
    color: #292f3f;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    margin-top: -4px;
  }

  .infoHead {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .options {
    display: flex;
    gap: 10.04px;
    height: 40px !important;
    font-size: 14px;
    color: var(--primary-text-color);
  }
  .firstOption {
    max-width: 220px;
    width: 100% !important;
    //width: calc(100%);
    padding: 11px 86.54px 12px 87px;
    // padding: 11px 86.54px 12px 0px;
    margin: auto;
    border-radius: 8px;
    background-color: #f0f3f5;
    font-weight: 500;
    margin: 0;
    cursor: pointer;
    text-align: center;
  }
  .secondOption {
    max-width: 220px;
    width: 220px !important;
    padding: 11px 91px 12px 92px;
    margin: auto;
    border-radius: 8px;
    background-color: var(--primary-text-color);
    color: white;
    font-weight: 500;
    cursor: pointer;
    margin: 0;
    height: 40px;
    text-align: center;
  }

  .thirdOption {
    //  width: 20px;
    border: 1px solid red;
    border-radius: 8px;
    padding: 10px 10px 10px 10px;
    max-width: 40px;
    cursor: pointer;
    margin: 0;
    img {
      //width: 20px;
      height: 20px;
    }
  }

  .uploadContainer {
    display: flex;
    flex-direction: column;
    gap: 11px;
    max-width: 500px;
    width: 500px;
    //border: 2px solid green;
    margin-right: 24px;
  }

  .listWrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .views {
    display: flex;
    flex-direction: row;
    max-width: 500px;
    justify-content: space-between;
    border: 1px solid #dfe1e5;
    border-radius: 8px;
    height: 40px;
    padding-left: 10px;

    img {
     // padding-left: 10px;
     
      height:20px;
      width: 20px;
      margin: auto;
      text-align: center;
    }

    p {
      padding: 11px;
      display: flex;
      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-align: center;
      padding-left: 10px;
    }
  }

  .delete {
    background-color: var(--primary-text-color);
    color: white;
    display: flex;
    flex-direction: row;
    max-width: 500px !important;
    width: 500px;
    //width:calc(100%);
    justify-content: space-between;
    border-radius: 8px;
    height: 40px;
    cursor: pointer;
    margin-right: 24px;
    /* .del{
    margin-left: 300px;
  } */
    p {
      padding: 12px;
      display: flex;
      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-align: center;
    }
  }

  .eye {
    display: flex;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    p {
      padding-top: 11px;
    }
  }

  .over {
    width: 100vw;
    height: 200vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .man {
    display: flex;
    gap: 10px;
  }

  @media screen and (max-width: 850px) {
    .uploadContainer {
      width: calc(100vw - 350px) !important;
    }
    .firstOption {
      //  max-width: 220px ;
      width: calc(50vw - 200px) !important;
      padding: 12px 0px;
      text-align: center;
    }

    .secondOption {
      width: calc(50vw - 200px) !important;
      padding: 12px 0px;
      text-align: center;
    }

    .views {
      width: calc(100vw - 350px) !important;
    }

    .delete {
      width: calc(100vw - 350px) !important;
    }
  }

  @media screen and (max-width: 744px) {
    padding-right: 24px;
    .editHeader {
      display: flex;
      width: calc(100vw -  48px);
      margin-left: 0px;
      padding: 0px;
    }

    .logo {
      display: none;
    }

    .tab1 {
      display: none;
    }

    .line {
      display: none;
    }
    .tab2 {
      gap: 0px;
    }

    .flexContainer {
      width: calc(100vw - 48px); 
     margin-top: 76px;
    
    }

    .uploadContainer {
      max-width: 100vw !important;
      width: calc(100vw - 48px) !important;
      margin-right: 24px;

    }

    .firstOption {
      max-width: 50vw !important;
      width: calc(50vw - 50px) !important;
      padding: 12px 0px;
      text-align: center;
    }

    .secondOption {
      max-width: 50vw !important;
      width: calc(50vw - 50px) !important;
      padding: 12px 0px;
      text-align: center;
    }

    .views {
      max-width: 100vw;
      width: calc(100vw - 47px) !important;
    }

    .delete {
      max-width: 100vw !important;
      width: calc(100vw - 47px) !important;
    }
  }
`;
