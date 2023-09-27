import {styled} from "styled-components";


export const MenuStyle = styled.div`

.main {
  width: calc(348px - 48px);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 24px 0px rgba(41, 47, 63, 0.12);
  padding: 24px;
  z-index: 100000;
  margin-top: 11px;
  max-height: calc(100vh - 66px - 48px);
  overflow: scroll;
  margin-left: -304px;
}
.notLoggedInDiv {
  width: calc(260px - 48px);
  margin-left: -216px;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.main::-webkit-scrollbar {
  display: none;
}
a{
  text-decoration: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.main {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.profile {
  display: flex;
  gap: 10px;
}
.imgDiv {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.imgDiv img {
  width: inherit;
  height: inherit;
  object-fit: cover;
  border-radius: inherit;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.username {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  line-height: 19px;
  color: var(--primary-text-color);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.email {
  color: #485562;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.details > div {
  display: flex;
  gap: 10px;
}
.details button {
  border-radius: 8px;
  background: #f0f3f5;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  padding: 7px 15px 8px 15px;
  border: none;
  margin-top: 10px;
}

.newPostBtn {
  margin: 40px 0 !important;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 25px;

}
.listItem {
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: pointer;
 
}

.listItem1{
    margin-top: 16px;
}

.listItem .iconBox {
  border-radius: 50%;
  background: #f0f3f5;
  padding: 7px;
  display: grid;
  place-items: center;

}

.listItem span {
  width: 100%;
  color: var(--primary-text-color);
  font-size: 14px;
  font-weight: 500;
}

.notificationNumber {
  height: 20px;
  width: 20px;
  min-width: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  background-color: #e20007;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.logout {
  width: 100%;
  background-color: #f0f3f5;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  padding: 11px 15px 10px 15px;
  border: none;
  border-radius: 8px;
  margin-top: 84px;
  cursor: pointer;
}

@media (width <= 743px) {

    .main{
        margin-left: -24px;
        width: 100%;
        box-shadow: none;
        margin-top: -24px;
    }
  .logout {
    position: fixed;
    bottom: 24px;
    width: calc(100% - 48px);
  }

  .notLoggedInDiv {
  margin-left: -24px;
  margin-top: -24px;
  }
}





`