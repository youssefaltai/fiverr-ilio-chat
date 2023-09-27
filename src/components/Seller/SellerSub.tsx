import React, { useRef, useState, useEffect } from "react";
// import {location} from 'react-dom'
import { list } from "./Seller";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ImageStyling, Sliding, TextStyling } from "./Styles.styled";
import SlideNextButton from "./Swipe";
//import heart from "../../image/heart.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/features/hooks";
import { RootState } from "~/features";
import { listSave, save } from "~/features/save.slice";
import { Link } from "react-router-dom";

export const SellerSub = ({ slides }: { slides: list[] }) => {
  const swipeContainerRef: React.MutableRefObject<null> = useRef(null);
  const [start, setStart] = useState<number>(0);
  const [swiperWidth, setSwiperWidth] = useState<number>(950);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [displayButtons, setDisplayButtons] = useState<boolean>(true);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
   
  useEffect(() => {
    const inst = setTimeout(() => {
      window.location.reload();
    }, 100);

    return clearTimeout(inst);
  }, []);

  const { list } = useAppSelector((state: RootState) => state.saved);
  const dispatch = useAppDispatch();
  const {user}  = useAppSelector((state:RootState) => state.auth )


  console.log(slides)
  return (
    <Sliding>
      <div>
        <h2 className="List">Seller Listings</h2>{" "}
        {displayButtons === true ? (
          <SlideNextButton
            swipeContainerRef={swipeContainerRef}
            start={start}
            isEnd={isEnd}
            swiperWidth={swiperWidth}
          />
        ) : (
          ""
        )}
      </div>
      {/* className="control" */}
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={14}
          slidesPerView={"auto"}
          allowTouchMove={true}
          speed={300}
          breakpoints={{
            0: {
              slidesPerView: 1.68,
              centeredSlides: false,
              centeredSlidesBounds: false,
              centerInsufficientSlides: false,
              spaceBetween: 14,
              allowTouchMove: true,
              slidesOffsetBefore: 24,
              slidesOffsetAfter: 24,
            },
            351: {
              slidesPerView: 1.68,
              centeredSlides: false,
              centeredSlidesBounds: false,
              centerInsufficientSlides: false,
              spaceBetween: 14,
              allowTouchMove: true,
              slidesOffsetBefore: 24,
              slidesOffsetAfter: 24,
            },
            431: {
              slidesPerView: 2,
              centeredSlides: false,
              spaceBetween: 14,
              allowTouchMove: true,
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 14,
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0,
            },
            770: {
              slidesPerView: 4,
              spaceBetween: 14,
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0,
            },
          }}
          ref={swipeContainerRef}
          onSlideChange={(swiper: any) => {
            setStart(swiper.activeIndex);
            setIsEnd(swiper.isEnd);
            console.log(swiper);

            if (swiper.activeIndex === 11) {
              swiper.slidesSizesGrid = 400;
            }
          }}
          onSwiper={(swiper) => {
            setSwiperWidth(swiper.width);

            console.log(swiper.isBeginning);
            setLoading(swiper.isBeginning);
            swiper.width > 469
              ? (swiper.allowTouchMove = false)
              : (swiper.allowTouchMove = true);
            swiper.width > 366
              ? setDisplayButtons(true)
              : setDisplayButtons(false);
            console.log(swiper);
          }}
        >
          <div className="try">
            {isLoading ? (
              <div>
                {list.map((slide: list) => {
                  const handleSaved = (e: React.MouseEvent) => {
                    e.stopPropagation();
                    const { title, active, amount, img, id } = slide;

                    if (user){
                      dispatch(
                        save({
                          bg: img,
                          gender: "m",
                          age: "",
                          location: "",
                          breed: "",
                          price: amount,
                          active: active,
                          title: title,
                          inde: id?.toString(),
                        })
                      );
                    }
                    

                     dispatch(listSave({ index: id, active: active }));
                  };

                  return (
                    <SwiperSlide key={slide.id}>
                      {""}
                      <ImageStyling>
                        <Link to="/listing">
                        <figure
                         
                          onClick={() => {
                            navigate("/listing");
                            
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <div
                            id="imageStylin"
                            style={{
                              backgroundImage: `url(${slide.img})`,
                            }}
                          >
                            <figcaption>
                              <div className="DogFlexing">
                                <div className="Dog">
                                  {slide.a1 && (
                                    <div
                                      style={{
                                        backgroundColor: slide.color1,
                                        color: "#FFF",
                                      }}
                                      id="one"
                                    >
                                      <p>{slide.a1 ? slide.a1 : ""}</p>
                                    </div>
                                  )}
                                  {slide.a2 && (
                                    <div
                                      style={{
                                        backgroundColor: slide.color2,
                                        color: "#FFF",
                                      }}
                                      id="two"
                                    >
                                      <p> {slide.a2 ? slide.a2 : ""}</p>
                                    </div>
                                  )}
                                  {slide.a3 && (
                                    <div
                                      style={{
                                        backgroundColor: slide.color3,
                                        color: "#FFF",
                                      }}
                                      id="three"
                                    >
                                      <p>{slide.a3 ? slide.a3 : ""} </p>
                                    </div>
                                  )}
                                </div>
                                <div className="heart" onClick={handleSaved}>
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g id="4 - Filled / heart">
                                      <path
                                        id="heart-Filled"
                                        d="M21.3694 10.562C20.4144 15.458 15.3954 18.8969 13.2824 20.1489C12.8864 20.3819 12.4434 20.5 12.0004 20.5C11.5574 20.5 11.1144 20.3829 10.7184 20.1489C8.60441 18.8969 3.58543 15.459 2.63043 10.562C2.23143 8.51501 2.77443 6.34488 4.08343 4.75488C5.28143 3.30088 6.94643 2.5 8.77243 2.5C9.92143 2.5 11.0304 2.79099 12.0004 3.34399C12.9704 2.79099 14.0794 2.5 15.2284 2.5C17.0544 2.5 18.7194 3.30088 19.9174 4.75488C21.2254 6.34488 21.7684 8.51501 21.3694 10.562Z"
                                        fill={!slide.active ?"white" :"#E20007"}
                                      />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </figcaption>
                          </div>
                        </figure>
                        </Link>
                      </ImageStyling>
                      <TextStyling>
                        <h2>{slide.name}</h2>
                        <p> {slide.type}</p>
                        <h3>${slide.amount}</h3>
                      </TextStyling>
                    </SwiperSlide>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </Swiper>
      </div>
    </Sliding>
  );
};
