import { styled } from "styled-components";

export const LocationStyled = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    background-color: white;
    /* width: 100vw;
    max-width: 430px;
    max-height: 600px; */
    max-height: 500px;
    //min-height: 600px;
    overflow: scroll;
    min-width: 430px;
    border-radius: 12px;
    background-color: white;
  }

  .controlHeader {
    display: flex;
    gap: 0.5rem;
    align-items: left;
    text-align: left;
    width: 100%;
  }

  .locationInput {
    //width: 100%;
    width: calc(430px - 80px - 48px);
    border: none;
    //  padding: 12px 40px 12px 40px;
    padding: 0 40px 0 40px;

    border-radius: 8px;
    background: #f0f3f5;
    font-weight: 400;
    font-size: 14px;
    height: 44px;
    color: var(--primary-text-color);
  }
  .locationOnButtonShow {
    width: calc(430px - 80px - 100px);

    border: none;
    //  padding: 12px 40px 12px 40px;
    padding: 0 40px 0 40px;

    border-radius: 8px;
    background: #f0f3f5;
    font-weight: 400;
    font-size: 14px;
    height: 44px;
    color: var(--primary-text-color);
  }

  .locationIcon {
    position: absolute;
    margin: 12px 10px;
  }

  .clearIcon {
    position: absolute;
    margin: 12px 10px;
    right: 5px;

    cursor: pointer;
    /* top:50%;
    left:50%;
    transform: translate(-50%,-50%); */
  }

  .InputFlex {
    display: flex;
    // width:430px  ;
    //  flex-direction:column;
  }

  .suggestion {
   padding-top: 2.06rem;
    margin-inline: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-transform: capitalize;
   // margin-top: 65px;
    background-color: #fff;
    /* max-width: 420px; */
    /* max-height: 600px; */
    padding-left: 24px;
  }
  .listItem {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }
  .listItem img {
    position: unset;
    margin: 0;
  }
  .listItem span {
    color: var(--primary-text-color);
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  #input {
    position: relative !important;
    // position: absolute;

    background-color: white;
    border: 5px solid white;
  }

  .Search {
    background: var(--primary-text-color);
    border: none;
    margin-left: 10px;
    width: 44px;
    height: 44px;
    min-width: 44px;
    border-radius: 8px;
    align-items: center;
    div {
      margin: auto;
      text-align: center;

      padding: 12px;
    }
  }

  @media (width <= 743px) {
    .locationInput {
      width: calc(100vw - 15px);
      min-width: auto;
    }
    .inputDiv {
      margin: 0;
      width: 100vw;
    //  margin-left: -30px;
    }
    .controlHeader {
      margin: auto;
      text-align: center;
      align-items: center;
    }
    header {
      padding-bottom: 0px;
      background-color: #fff;
      //justify-content: flex-start;
      width: 100vw !important;
      max-width: 100vw !important;
      
    }

    #input {
      max-width: 100vw;
      width: calc(100vw - 50px);
     // margin-left:500px;
    }

    

    .locationOnButtonShow {
      width: calc(100vw - 15px);
    }

    .content {
      width: 100vw;
      max-height: 100vh;
      position: fixed;
    }

    .suggestion {
      width: calc(100vw - 50px);
      height: 100vh;
    }
  }

  @media screen and (max-width: 431px) {
  
    
    .content{
      min-width: 0px;
    }
    
  }


  @media screen and (max-width:355px) {
    
    .locationOnButtonShow {
      width: calc(50vw - 15px);
    }
    
  }
`;
