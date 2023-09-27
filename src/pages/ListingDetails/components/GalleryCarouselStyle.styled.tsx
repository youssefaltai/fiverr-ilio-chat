import {styled} from 'styled-components'



export const GalleryCaStyle = styled.div`


.main {
  position: relative;
  background-color: black;
  color: white;
  padding: 0 24px;
}
.mySwiper {
  width: calc(100% - 48px - 90px - 48px);
  height: calc(100vh);
  z-index: 1000;
}

.mySwiper > div:first-child {
  align-items: center;
}
.main .swiperSlide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 70%;
}

.main .swiperSlide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.swiperButton {
  position: absolute;
  z-index: 10;
  top: calc(50% - 12px);
  cursor: pointer;
}
.swiperButton svg:hover {
  scale: 103%;
}

.swiperButton svg {
  width: 45px;
  height: 45px;
}
.main .nextBtn {
  right: 24px;
}

.main .prevBtn {
  left: 24px;
}

.close {
  all: unset;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  z-index: 100;
  position: absolute;
  top: 24px;
}

:is(:hover):where(.close, .btn) {
  background: rgb(74, 74, 74) !important;
}

.btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 100;
}
.mySwiper > div:nth-last-child(2) {
  top: 32px !important;
  bottom: auto;
}

@media (width <= 743px) {
  .main {
    padding: 0;
  }
  .swiperButton {
    display: none;
  }
  .mySwiper {
    width: 100%;
  }
  .main .swiperSlide {
    height: 85%;
  }
}




`