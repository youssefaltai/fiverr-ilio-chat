
import {styled} from 'styled-components';


export const AutoComplete = styled.div`

.autocompleteContainer {
  position: relative;
}

.input {
  border-radius: 8px;
  outline: 1px solid #c9ced3;
  color: #485562;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-transform: capitalize;
  padding: 0 15px;
  width: calc(100% - 30px);
  height: 40px;
  border: none;
}

.input::placeholder{
  opacity: 1;
}

.suggestionList {
  color: var(--primary-text-color);
  border-radius: 8px; 
  position: absolute;
  z-index: 1;
  top: 44px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  text-transform: capitalize;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

.suggestionList li {
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
}

@media (width < 431px) {
  .input {
    font-size: 16px;
  }
}





`