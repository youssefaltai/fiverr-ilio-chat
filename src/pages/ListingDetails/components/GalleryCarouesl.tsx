//import classes from "./GalleryCarousel.module.css";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useAppSelector } from "~/features/hooks";
import { useNavigate } from "react-router-dom";
import { GalleryCaStyle } from "./GalleryCarouselStyle.styled";

const GalleryCarouesl = () => {
  const windowDimensions = useAppSelector((state) => state.dimensions);
  const navigate = useNavigate();

  const navigateBack = () => {
    return navigate(-1);
  };

  const CloseButton = () => {
    return windowDimensions.width > 742 ? (
      <GalleryCaStyle>
      <button className='close' onClick={navigateBack}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="close">
            <g id="1 - Light / times-square">
              <path
                id="times-square-Light"
                d="M18.2198 6.64372L13.1145 11.749L18.2179 16.8523C18.594 17.2284 18.594 17.8398 18.2179 18.2159C18.0289 18.4049 17.782 18.4975 17.5352 18.4975C17.2883 18.4975 17.0414 18.403 16.8524 18.2159L11.7509 13.1126L6.64761 18.2159C6.4586 18.4049 6.21171 18.4975 5.96484 18.4975C5.71797 18.4975 5.47109 18.403 5.28207 18.2159C4.90598 17.8398 4.90598 17.2284 5.28207 16.8523L10.3854 11.749L5.28207 6.64567C4.90598 6.26957 4.90598 5.65817 5.28207 5.28207C5.65817 4.90598 6.26963 4.90598 6.64572 5.28207L11.7491 10.3854L16.8524 5.28207C17.2285 4.90598 17.8398 4.90598 18.2159 5.28207C18.592 5.65817 18.5959 6.26763 18.2198 6.64372Z"
                fill="white"
              />
            </g>
          </g>
        </svg>
        Close
      </button>
      </GalleryCaStyle>
    ) : (
      <GalleryCaStyle>
      <div className='btn' onClick={navigateBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M13.7821 8.27976L9.81207 12.2497L13.7807 16.2182C14.0731 16.5107 14.0731 16.9862 13.7807 17.2786C13.6337 17.4256 13.4417 17.4976 13.2497 17.4976C13.0577 17.4976 12.8658 17.4241 12.7188 17.2786L8.21935 12.7792C7.92688 12.4867 7.92688 12.0112 8.21935 11.7188L12.7188 7.21935C13.0112 6.92688 13.4866 6.92688 13.7791 7.21935C14.0716 7.51181 14.0746 7.9873 13.7821 8.27976Z"
            fill="white"
          />
        </svg>
      </div>
      </GalleryCaStyle>
    );
  };

  return (
    <GalleryCaStyle>
    <div className='main'>
      {/* <header className={classes.header}>
        
        <div className={classes.utils}>
          <div className={classes.btn} role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.05831 6.27533C6.81414 6.03116 6.81414 5.6353 7.05831 5.39113L9.55831 2.89113C9.80248 2.64697 10.1983 2.64697 10.4425 2.89113L12.9425 5.39113C13.1867 5.6353 13.1867 6.03116 12.9425 6.27533C12.8208 6.397 12.6608 6.45864 12.5008 6.45864C12.3408 6.45864 12.1808 6.39783 12.0592 6.27533L10.6258 4.84202V9.16697C10.6258 9.51197 10.3458 9.79197 10.0008 9.79197C9.65581 9.79197 9.37581 9.51197 9.37581 9.16697V4.84283L7.9425 6.27614C7.6975 6.51948 7.30248 6.5195 7.05831 6.27533ZM14.1667 8.54197C13.8217 8.54197 13.5417 8.82197 13.5417 9.16697C13.5417 9.51197 13.8217 9.79197 14.1667 9.79197C15.66 9.79197 16.875 11.007 16.875 12.5003V13.3336C16.875 14.827 15.66 16.042 14.1667 16.042H5.83333C4.34 16.042 3.125 14.827 3.125 13.3336V12.5003C3.125 11.007 4.34 9.79197 5.83333 9.79197C6.17833 9.79197 6.45833 9.51197 6.45833 9.16697C6.45833 8.82197 6.17833 8.54197 5.83333 8.54197C3.65083 8.54197 1.875 10.3178 1.875 12.5003V13.3336C1.875 15.5161 3.65083 17.292 5.83333 17.292H14.1667C16.3492 17.292 18.125 15.5161 18.125 13.3336V12.5003C18.125 10.3178 16.3492 8.54197 14.1667 8.54197ZM15 12.5003C15 12.0403 14.6267 11.667 14.1667 11.667C13.7067 11.667 13.3333 12.0403 13.3333 12.5003C13.3333 12.9603 13.7067 13.3336 14.1667 13.3336C14.6267 13.3336 15 12.9603 15 12.5003Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={classes.btn} role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.7581 4.24706C15.7189 2.98623 14.2748 2.29205 12.6898 2.29205C11.7364 2.29205 10.8148 2.52371 9.99977 2.96537C9.18561 2.52371 8.26394 2.29205 7.30977 2.29205C5.72478 2.29205 4.27978 2.98623 3.24145 4.24706C2.11145 5.61873 1.64311 7.49206 1.98728 9.25789C2.79978 13.4212 7.03977 16.3296 8.82561 17.3863C9.18811 17.6004 9.59394 17.7079 9.99977 17.7079C10.4056 17.7079 10.8123 17.6012 11.1748 17.3863C12.9598 16.3287 17.2006 13.4212 18.0131 9.25789C18.3564 7.49206 17.8881 5.61873 16.7581 4.24706ZM16.7856 9.01874C16.0706 12.6846 12.1781 15.3396 10.5373 16.3104C10.2064 16.5071 9.79311 16.5062 9.46228 16.3104C7.82145 15.3396 3.92893 12.6846 3.21393 9.01874C2.93977 7.6154 3.31144 6.12871 4.2056 5.04204C5.0031 4.07454 6.10477 3.54205 7.30977 3.54205C8.15811 3.54205 8.97145 3.77538 9.66311 4.21705C9.86811 4.34788 10.1314 4.34788 10.3364 4.21705C11.0281 3.77538 11.8414 3.54205 12.6898 3.54205C13.8939 3.54205 14.9964 4.07454 15.7939 5.04204C16.6881 6.12871 17.0589 7.61457 16.7856 9.01874Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header> */}
      <nav
        className=
         'swiperButton nextBtn image-swiper-button-next'
        >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="right-arrow">
            <g id="1 - Light / chevron-circle-right">
              <path
                id="chevron-circle-right-Light"
                d="M12 2.5C6.762 2.5 2.5 6.762 2.5 12C2.5 17.238 6.762 21.5 12 21.5C17.238 21.5 21.5 17.238 21.5 12C21.5 6.762 17.238 2.5 12 2.5ZM12 20.5C7.313 20.5 3.5 16.687 3.5 12C3.5 7.313 7.313 3.5 12 3.5C16.687 3.5 20.5 7.313 20.5 12C20.5 16.687 16.687 20.5 12 20.5ZM14.354 11.646C14.549 11.841 14.549 12.158 14.354 12.353L11.354 15.353C11.256 15.451 11.128 15.499 11 15.499C10.872 15.499 10.744 15.45 10.646 15.353C10.451 15.158 10.451 14.841 10.646 14.646L13.292 12L10.646 9.354C10.451 9.159 10.451 8.84197 10.646 8.64697C10.841 8.45197 11.158 8.45197 11.353 8.64697L14.354 11.646Z"
                fill="white"
              />
            </g>
          </g>
        </svg>
      </nav>
      <div
        className='swiperButton prevBtn image-swiper-button-prev'>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="yellow"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="left-arrow">
            <g id="1 - Light / chevron-circle-left">
              <path
                id="chevron-circle-left-Light"
                d="M13.354 9.35303L10.707 12L13.353 14.646C13.548 14.841 13.548 15.158 13.353 15.353C13.255 15.451 13.127 15.499 12.999 15.499C12.871 15.499 12.743 15.45 12.645 15.353L9.64502 12.353C9.45002 12.158 9.45002 11.841 9.64502 11.646L12.645 8.646C12.84 8.451 13.157 8.451 13.352 8.646C13.547 8.841 13.549 9.15803 13.354 9.35303ZM21.5 12C21.5 17.238 17.238 21.5 12 21.5C6.762 21.5 2.5 17.238 2.5 12C2.5 6.762 6.762 2.5 12 2.5C17.238 2.5 21.5 6.761 21.5 12ZM20.5 12C20.5 7.313 16.687 3.5 12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12Z"
                fill="white"
              />
            </g>
          </g>
        </svg>
      </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={
          windowDimensions.width > 743
            ? {
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled",
              }
            : false
        }
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide className='swiperSlide' key={index}>
            <img src={`/images/img${index + 1}.jpg`} />
          </SwiperSlide>
        ))}
        <CloseButton />
      </Swiper>
    </div>
    </GalleryCaStyle>
  );
};

export default GalleryCarouesl;
