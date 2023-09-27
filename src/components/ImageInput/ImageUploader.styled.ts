 import {styled} from 'styled-components'


export const  ImageUp= styled.div`
.imageUploader {
  text-align: center;
  border-radius: 8px;
  border: 1px solid #c9ced3;
  height: 100px;
  display: grid;
  place-items: center;
  cursor: pointer;
  width: 100%;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 10px !important;
  align-items: center;
}
.imageUploader span {
  display: block;
  color: var(--primary-text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
}


`