import {styled} from 'styled-components'


export const InputStyle = styled.div`

// -hidden-field-password{
//   font: 11px/1.4em Arial,Helvetica, sans-serif;
//   color: #485562;
// }

.inputLabelInput {
  position: relative;
  width: 100%;
}

.inputLabelInputPass {
  position: relative;
  width: 100%;
}

.inputLabelInput label {
  position: absolute;
  top: 50%;
// margin-top: 10px;
  transform: translateY(-50%);
  left: 10px;
  padding: 0 5px;
  font-size: 14px;
  color: #485562;
  font-weight: 400;
  line-height: 17px;
  text-transform: capitalize;
  background-color: white;
  z-index: -1;
  transition: all 0.1s;
}

.inputLabelInputPass label{
  position: absolute;
  top: 50%;
  //margin-top: -14px;
  transform: translateY(-50%);
  left: 10px;
  padding: 0 5px;
  font-size: 14px;
  color: #485562;
  font-weight: 400;
  line-height: 17px;
  text-transform: capitalize;
  background-color: white;
  z-index: -1;
  transition: all 0.1s;

}

.inputLabelInput  textarea::placeholder{
   color: #485562 !important;
   opacity: 1 !important;
   background-color: transparent;
  }

    
.inputLabelInput input:valid + label {
  position: absolute;
  transform: unset;
  margin-top: 0px;
  top: -7px;
  left: 10px;
  z-index: 1;
  font-size: 12px;
  line-height: 15px;
}

.inputLabelInputPass input:valid + label {
  position: absolute;
  transform: unset;
  margin-top: 0px;
  top: -7px;
  left: 10px;
  z-index: 1;
  font-size: 12px;
  line-height: 15px;
}
.inputLabelInput textarea:valid + label {
  position: absolute;
  transform: unset;
  top: -7px;
  left: 10px;
  z-index: 1;
  font-size: 12px;
 // line-height: 15px;
}


.inputLabelInput input {
  border-radius: 8px;
  outline: 1px solid #c9ced3;
  color: var(--primary-text-color);
   
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-transform: capitalize;
  padding: 0 15px;
  width: calc(100% - 30px);
  height: 40px;
  border: none;
  background-color: transparent;
}  

.inputLabelInputPass input {
  border-radius: 8px;
  outline: 1px solid #c9ced3;
  color: var(--primary-text-color);
   
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-transform: capitalize;
  padding: 0 15px;
  width: calc(100% - 30px);
  height: 40px;
  border: none;
  background-color: transparent;
}  


.inputLabelInput textarea{
      padding: 14px 15px !important; 
}

label{
  color: #485562;
}


.hideIcon{
  position: absolute;
  right: 20px;
  top: 10px;
  img{
    width: 20px;
    height:20px;
  }
}

@media screen and (max-width: 900px) {
   .hideIcon{
    right: 20px;
   }
 }
 @media screen and (max-width: 744px) {
   .hideIcon{
    right: 10px;
   }
 }
@media (width < 431px) {
  .inputLabelInput input {
    font-size: 16px;
  }

  .inputLabelInput textarea {
    font-size: 16px;
  }
}


`