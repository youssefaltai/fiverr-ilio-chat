import { useNavigate } from "react-router-dom";
//import classes from "./CoverImage.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { CoverImageStyle } from "./CoverImageStyle.styled";
import { useAppDispatch, useAppSelector } from "~/features/hooks";
import { RootState } from "~/features";
import { toggleSave } from "~/features/save.slice";

interface CoverImageProps {
  images: string[];
  className?: string;
  style?: React.CSSProperties;
  toggleReport: () => void;
}
const CoverImage: React.FC<CoverImageProps> = ({
  images,
  style = {},
  toggleReport,
}) => {
  const navigate = useNavigate();
  const navigateToBack = () => {
    navigate(-1);
  };

  const navigateToGallery = () => {
    navigate("/listing/gallery");
  };

  const {save} = useAppSelector((state:RootState) => state.saved);
  const dispatch = useAppDispatch()
  return (
    <CoverImageStyle>
      <div className="main" style={style}>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide
              onClick={navigateToGallery}
              className="swiperSlide"
              key={index}
            >
              <img src={src} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="btn backBtn" onClick={navigateToBack}>
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

        <div className="utils">
          <div className="btn" role="button" onClick={toggleReport}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M14.2648 7.9957C14.119 7.7034 14.119 7.35428 14.2648 7.06198L16.3923 2.79865C16.489 2.6049 16.479 2.37359 16.3648 2.18902C16.2507 2.00446 16.0498 1.89252 15.8332 1.89252H7.49984C5.31734 1.89252 3.5415 3.67218 3.5415 5.85939V17.5162C3.5415 17.8619 3.8215 18.1425 4.1665 18.1425C4.5115 18.1425 4.7915 17.8619 4.7915 17.5162V13.1668H15.8332C16.0498 13.1668 16.2507 13.0541 16.3648 12.8703C16.4782 12.6858 16.489 12.4545 16.3923 12.2607L14.2648 7.9957ZM4.7915 11.9133V5.85858C4.7915 4.36202 6.0065 3.1444 7.49984 3.1444H14.8223L13.1473 6.50165C12.8265 7.1447 12.8265 7.91299 13.1473 8.55604L14.8223 11.9133H4.7915Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="btn" role="button">
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
          <div
            className="btn"
            role="button"
            onClick={() => {
             dispatch(toggleSave())
            }}
          >
            {!save ? (
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
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="4 - Filled / heart">
                  <path
                    id="heart-Filled"
                    d="M21.3694 10.562C20.4144 15.458 15.3954 18.8969 13.2824 20.1489C12.8864 20.3819 12.4434 20.5 12.0004 20.5C11.5574 20.5 11.1144 20.3829 10.7184 20.1489C8.60441 18.8969 3.58543 15.459 2.63043 10.562C2.23143 8.51501 2.77443 6.34488 4.08343 4.75488C5.28143 3.30088 6.94643 2.5 8.77243 2.5C9.92143 2.5 11.0304 2.79099 12.0004 3.34399C12.9704 2.79099 14.0794 2.5 15.2284 2.5C17.0544 2.5 18.7194 3.30088 19.9174 4.75488C21.2254 6.34488 21.7684 8.51501 21.3694 10.562Z"
                    fill="#E20007"
                  />
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
    </CoverImageStyle>
  );
};

export default CoverImage;
