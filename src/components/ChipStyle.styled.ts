 import {styled} from 'styled-components'



  export const ChipStyle= styled.div`
  
.chip {

    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: fit-content;
    padding: 7.4px 15px !important;
    color: #fff;
    display: flex;
    gap: 4px;
    align-items: center;
  //  height: 30px;
  }

   .shift{
    padding: 7.4px 10px !important;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: fit-content;
    
    color: #fff;
    display: flex;
    gap: 4px;
    align-items: center;
  //  height: 30px;
  }
  
  .chip img {
    width: 18px;
    height: 18px;
    filter: brightness(0) invert(1);
  }
  
  .text {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    display: block;
    text-transform: capitalize;
  }
 

  .joined,
.listings{
  padding: 7.5px 15px;
  position: absolute;
  white-space: nowrap;
}

.location {
  padding: 6px 15px !important;
  position: absolute;
  white-space: nowrap;
}
.joined {
  top: calc(-16px - 31px);
  left: -59px;
}

.listings {
  top: -9px;
  left: calc(108px - 4px);
}


.location {
  bottom: calc(-42px - 31px);
  left: -77px;
}


   @media (width<=1100px) {
    
     .chip {

      padding: 7.6px 15px !important;
     }


     .location {
  padding: 6px 15px !important;
 
}

   } 


  `
