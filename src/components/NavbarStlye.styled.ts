import {styled} from 'styled-components'

export const NavbarStyle = styled.div`

.container {
  height: calc(26px + 40px);
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: calc(100% - 48px);
  overflow: hidden;
  background-color: white;
  z-index: 999;
}
.back {
  display: none;
  cursor: pointer;
}

.back span {
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}

.back button {
  all: unset;
  height: 24px;
  width: 24px;
}

@media (width <= 428px) {
  .container {
    height: 66px;
    margin-bottom: 10px;
  }
  .container img {
    display: none;
  }
  .back {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}


`
