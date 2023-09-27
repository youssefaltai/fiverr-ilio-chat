import { styled } from "styled-components";

export const ModelStyle = styled.div`
max-width: 430px;
min-height: 600px;
max-height: 600px;
  .main {
    border-radius: 12px;
    background: #fff;
    box-shadow: 0px 4px 24px 0px rgba(41, 47, 63, 0.12);
    width: 430px;
    max-width: calc(430px);
    min-height: 600px;
    max-height: 600px;
    overflow: scroll;
    position:fixed;
   top:50%;
   left: 50%;
   transform: translate(-50%,-50%);
  }
 header{
 position: fixed !important;
 background-color:white; 
  

 /// try
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 600;
    line-height: 19px;
    text-transform: capitalize;
    padding: 23px 0;
    cursor: pointer;
      z-index: 100;
    position: absolute ;
    width: 100%;
    max-width: inherit;
    border-radius: 12px 12px 0 0;
    color: var(--primary-text-color);
   // top:77px;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   margin-top: -267px;
   

 }
  .main header {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 600;
    line-height: 19px;
    text-transform: capitalize;
    padding: 23px 0;
    cursor: pointer;
    //background: red;
    //background: white;
    z-index: 100;
    position: fixed ;
    width: 100%;
    max-width: inherit;
    border-radius: 12px 12px 0 0;
    color: var(--primary-text-color);
  }
   header button:first-child {
    all: unset;
    transition: all 0.3s;
    height: 20px;
    width: 20px;
    margin-left: 24px;
  }
 header button:last-child {
    display: none !important;
    all: unset;
    transition: all 0.3s;
    height: 24px;
    width: 24px;
    margin-left: 24px;
  }

  .wrapper {
    padding: 0 24px;
    margin-top: calc(66px + 10px);
    .inputDiv{
      position: fixed;
      z-index: 100;
    }
  }

  @media (width <= 743px) {
    .main {
      width: 100%;
      max-width: 100%;
      min-height: 100%;
      
      overflow: scroll;
      border-radius: unset;
    }
     header {
      max-width: 100%;
      padding: 32px 0 21px;
      top:0px;
      margin-top: 27px;
    
    }
     header button:first-child {
      display: none;
    }
     header button:last-child {
      display: block !important;
    }
  }

   

  /////////////

 

  
`;
