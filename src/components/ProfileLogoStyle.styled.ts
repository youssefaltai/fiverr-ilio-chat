 import {styled} from 'styled-components'



 export const ProfileStyle  = styled.div`
 .container {
  width: 100%;
  height: 227px;
  //margin: calc(66px + 34px) auto 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
}

.imgDiv {
  position: relative;
  height: 108px;
  width: 108px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 15px;
}

.title {
  text-align: center;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 10px;
  line-height: 22px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
}

.joined,
.listings,
.location {
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

.location span,
.listings span,
.joined span {
  overflow: hidden;
  text-overflow: ellipsis;
}


@media (width<= 1100px) {
  .container{
   margin-left: 38px;

  }
}

@media (width<= 762px) {
  .container{
   margin-left: 0px;

  }
}


@media (width <= 428px) {
  .container {
   // margin: calc(66px + 20px) auto 40px auto;
   
  }
}

 
 
 
 `