import { styled } from "styled-components";

export const LocationAndFilterStyle = styled.div`
  .main {
    width: 461px;

    //background-color: #f0f3f5;
    border-radius: 12px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }

  .locationWrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0px 10px;
    width: 100%;
    border-radius: 8px;
    background-color: #f0f3f5;
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    color: var(--primary-text-color);
    max-width: 347px;
    height: 44px;
    .text {
      p {
        text-overflow: ellipsis !important;
        overflow: hidden !important;
        white-space: nowrap;
      }
    }
  }

  .showNext {
    display: none;
  }

  .showfirst {
    display: block;
  }

  .filterWrapper {
    display: flex;
    align-self: center;
    //color: var(--primary-text-color);
    color: #fff;
    background-color: var(--primary-text-color);
    font-size: 14px;
    font-weight: 500;
    gap: 10px;
    padding: 12px 20px;
    border-radius: 8px;
    // border-left: 2px solid #fff;
    //background: #f0f3f5;
    cursor: pointer;
    //height: 44px;
  }

  .filterWrapper span {
    height: 17px;
    text-align: center;
    margin: auto;
  }

  .text {
    text-overflow: ellipsis !important;
    overflow: hidden !important;
    //height: 20px;
  }

  @media screen and (max-width: 930px) {
    .filterWrapper span {
      display: none;
    }

    .main {
      width: 431px;
      // display: inline-flex;
      background-color: #f0f3f5;
      gap: unset;
      height: 44px;
    }

    .showfirst {
      display: none;
    }

    .showNext {
      display: block;
    }

    .locationWrapper {
      border-radius: 8px 0px 0px 8px;
    //  width: 100%;
      max-width: 430px;
      width: calc(65.5vw - 156px);
    
    }

    .filterWrapper {
      background-color: #f0f3f5;
     // border-left: 2px solid #fff;
     padding-right:  10px;
      gap: 0px;
      border-radius: 8px;
    }
  }

  @media (width <=743px) {
    .filterWrapper span {
      display: none;
    }
    .locationWrapper {
     
      width: calc(85.5vw - 156px);
    
    }

  }

  @media (width<=581px) {
    .main {
      // max-width:430px ;
      //min-width: 300px;

      // width: 70vw;
      width: calc(100.5vw - 156px);
    }

    .locationWrapper {
      width: calc(80.5vw - 156px);
    }
  }

  @media (width<=431px) {
    .main {
      // width:66.5vw ;
      width: calc(105.6vw - 130px);
    }

    .locationWrapper {
      width: calc(85.6vw - 130px);

    }

    .locationIcon{
      min-width: 20px !important;
    }
  }

  @media (width<=401px) {
    .main {
      // width:66.5vw ;
      width: calc(106vw - 130px);
    }
  }

  @media (width<=361px) {
    .main {
      // width:66.5vw ;
      width: calc(106.5vw - 130px);
    }
  }

  @media (width<=315px) {
    .main {
      // width:66.5vw;
      width: calc(108.6vw - 130px);
    }
  }
`;
