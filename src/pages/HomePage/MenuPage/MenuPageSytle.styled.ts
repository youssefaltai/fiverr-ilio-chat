import {styled} from "styled-components"



 export const MenuPageStyle = styled.div`
 .main {
    padding: 0 24px;
    margin-top: calc(66px + 10px);
  }
  
  .header {
    display: flex;
    padding: 21px 0;
    cursor: pointer;
    background: white;
    z-index:100;
    position:fixed;
    top: 0;
    width: 100%;
    max-width: inherit;
  }
  .header button {
    all: unset;
    transition: all 0.3s;
    height: 24px;
    width: 24px;
    margin-left: 24px;
  }
  .menu {
    width: calc(100%);
    min-height: calc(100vh - 76px);
    box-shadow: none;
    max-height: unset;
    padding: 0;
  }
  



`