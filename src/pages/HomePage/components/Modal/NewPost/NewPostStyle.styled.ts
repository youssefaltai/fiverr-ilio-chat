import { styled } from "styled-components";

export const NewPostStyle = styled.div`
/* 
*,*::before,*::after{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */
  .content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .breedInput {
    border-radius: 8px;
    outline: 1px solid #c9ced3;
    color: #485562;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    //text-transform: capitalize;
    padding:  14px 15px;  
    width: calc(100% - 30px);
     
    border: none;
    resize: none;
  }
     /* textarea::placeholder{
      margin-top: 20px;
     } */

     textarea::placeholder{
      opacity: 1;
     }
  .radioGroup {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .priceInputs {
    display: grid;
    grid-template-columns: 1fr 1fr;

    input {
      width: calc(102.5% - 30px);
    }
  }

  .age {
    display: flex;
    gap: 40px;

    input {
    max-width: 42px;
      
    }

    .ageTime {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      margin-left: -10.5px;
    }

    .ageM{
      margin-right: 30px;
    }
         
    .radioButton {
      /* input{
        margin-left: 10px;
      } */
      label {
        //margin-left: -12px;
       // margin-right: 30px;
      }
    }
  }

  .age > * {
    width: fit-content;
  }
  .age .input {
    width: 72px;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }

  .imagesInfo {
    display: block;
    color: #485562;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    text-transform: capitalize;
    margin-top: 10px;
  }

  .total {
    color: var(--primary-text-color);
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .total span {
    display: block;
    line-height: 19px;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 17px;
  }
  .totalItem {
    color: var(--primary-text-color);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    display: block;
  }

  
@media (width < 431px) {
  .breedInput {
    font-size: 16px;
  }
}


  @media (width <= 320px) {
    .age {
        input{
          max-width: 42px;
          // width: 99%;
        
        }
     }
  }
`;
