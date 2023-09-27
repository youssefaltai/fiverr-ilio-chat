import {styled} from "styled-components"




export const NotificationStyle = styled.div`
 
.main1 {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 12px;
 // background-color: var(--primary-text-color);
  cursor: pointer;
  position: relative;
}
.wrapper1 {
  display: grid;
  place-items:center;
  width: 100%;
  height: 100%;
  border-radius:12px;
} 


.notificationNumber1 {
  position: absolute;
  top: 0;
  right: 0;
  height: 20px;
  width: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  background-color: #e20007;
  border: 2px solid white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transform: translate(-22px, -4px);
}

.menu1 {
  position: absolute;
  right: 0;
}
 

`