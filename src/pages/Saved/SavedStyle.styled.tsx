import { styled } from "styled-components";

export const SavedStyle = styled.div`
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

  .options {
    display: flex;
    gap: 20px;

    p {
      color: var(--primary-text-color);
      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
      text-align: center;
      display: flex;
      align-items: center;
      margin: auto;
      height: 17px;
    }
  }
  max-width: 49.5rem;
  padding-left: 24px;
  padding-right: 24px;
  margin: auto;
  //border: 2px solid black;

  .flexContainer {
    margin-top: 98px;
    display: flex;
    gap: 100px;
  }

  .tab2 {
    display: flex;
    gap: 100px;
  }

  .line {
    height: auto;
    width: 1px;
    background-color: #dfe1e5;
  }

  .imageFlex {
    display: flex;
    gap: 10px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 6px;
      object-fit: cover;
    }
  }

  .spa{
    //margin-top: 40px;
    /* display: flex;
    flex-direction: column;
    gap: 40px; */
  }

  .wrapper {
    max-width: 500px !important;
    width: 500px;
    display: flex;
    flex-direction: column;
    
    //border: 2px solid red;
    gap:40px;
    //display: flex;
    //flex-direction:column ;
  }

  .titleInfo {
    color: var(--primary-text-color);
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* max-width: 500px;
    width: 100%;
    min-width: 100%; */
  }

  .viewTrash {
    display: flex;
    gap: 10px;
  }

  .view {
    max-width: 450px;
    width: 100%;
    text-align: center;
    border-radius: 8px;
    background-color: #f0f3f5;
    color: var(--primary-text-color);
    height: 40px;
    padding: 11px;

    //
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }

  .infoHead {
    gap: 15px;
    display: flex;
    flex-direction: column;
  
  }

  .trash {
    border: 1px solid #e20007;
    height: 40px;
    width: 40px;
    margin: auto;
    border-radius: 8px;
  //  padding: 11px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
  }


  
  .delete {
    background-color: var(--primary-text-color);
    color: white;
    display: flex;
    flex-direction: row;
    max-width: 500px !important;
    width: 498px;
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

   
  @media screen and (max-width: 846px) {
    

    .wrapper{
     width: calc(100vw - 339px );
    }
    
    .delete {
      width: calc(100vw - 342px) !important;
    }


  }


  @media screen and (max-width : 744px) {
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
    .flexContainer{
        margin-top: 71px;
    }

    .wrapper{
      max-width: 100vw !important;
        width: calc(100vw - 50px );
    }
    .view{
        max-width: 100vw !important;
        width: calc(100vw - 80px);
    }


    
    .delete {
      max-width: 100vw !important;
      width: calc(100vw - 52px) !important;
    }

    
  }

`;
