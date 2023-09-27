import {styled} from 'styled-components';


export const FilterStyle = styled.div`
.content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.filterItem .title {
  margin: 0;
  margin-bottom: 20px;
  color: var(--primary-text-color);
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  text-transform: capitalize;
}

.breedInput {
  border-radius: 8px;
  outline: 1px solid #c9ced3;
  color: #485562;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-transform: capitalize;
  padding: 14px 15px;
  width: calc(100% - 30px);
  //height: 30px;
  border: none;
  resize: none;

}

.radioGroup {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.priceInputs {
  display: flex;
  gap: 10px;
}


@media (width<=743px) {

  .priceInputs {
  //width: calc(100vw-30px);
}


.priceInputs{
  input{
    width: calc(50vw - 59px);
  }
  
}
  
}


`