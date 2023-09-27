import {styled} from 'styled-components';


export const CoverImageStyle = styled.div`


@media (width > 743px) {
  .main {
    display: none;
  }
}

.mySwiper {
  width: calc(100%);
  aspect-ratio: 430 / 286.667;
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
}

.main .swiperSlide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mySwiper > div:last-child {
  color: white;
  text-align: right;
  width: fit-content !important;
  right: 10px !important;
  left: auto !important;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  padding: 7.5px 10px;
  font-size: 12px !important;
  line-height: 15px !important;
}

.btn {
  background-color: rgba(0, 0, 0, 0.3);
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.backBtn {
  position: absolute;
  top: 11px;
  left: 24px;
  z-index: 11;
}

.utils {
  display: flex;
  gap: 15px;
  width: fit-content;
  position: absolute;
  top: 11px;
  z-index: 11;
  right: 24px;
}





`