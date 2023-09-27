import { createRef, useRef, useState } from "react";
import Card from "./Card";
//import classes from "./Carousel.module.css";
import { useAppSelector } from "~/features/hooks";
import { CarouselStyle } from "./CarouselStyle.styled";

interface CarouselProps {
  title: string;
}

const Carousel = ({ title }: CarouselProps) => {
  const [leftArrowDisable, setLeftArrowDisable] = useState(true);
  const [rightArrowDisable, setRightArrowDisable] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef([]);
  cardRef.current = Array.from({ length: 20 }).map(
    (_, i) => cardRef.current[i] ?? createRef()
  );

  /** */
  const makeHorizantalScroll = (
    ref: React.RefObject<HTMLDivElement>,
    speed: number,
    distance: number,
    postion: number // pixels to scroll
  ) => {
    let step: number;
    if (postion > 986) {
      step = 986;
    } else if (postion < -986) {
      step = -986;
    } else {
      step = postion;
    }
    let scrollAmount = 0;
    if (ref.current) {
      const element = ref.current;
      const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
          clearInterval(slideTimer);
        }
      }, speed);
    }
  };

  const handleScroll = () => {
    if (elementRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = elementRef.current;
      if (scrollLeft === 0) {
        setLeftArrowDisable(true);
      } else {
        setLeftArrowDisable(false);
      }

      // console.log("Scrolled to the right end");
      if (scrollLeft + clientWidth === scrollWidth) {
        setRightArrowDisable(true);
      } else {
        setRightArrowDisable(false);
      }
    }
  };

  const windowDimensions = useAppSelector((state) => state.dimensions);

  return (
    <CarouselStyle>
    <div className='container'>
      <div className='controllers'>
        <h4>{title}</h4>
        <div className='btns'>
          <div
            className='btn'
            role="button"
            onClick={() => {
              makeHorizantalScroll(
                elementRef,
                25,
                100,
                -windowDimensions.width
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="var(--primary-text-color)"
            >
              <path
                d="M13.7821 8.27976L9.81207 12.2497L13.7807 16.2182C14.0731 16.5107 14.0731 16.9862 13.7807 17.2786C13.6337 17.4256 13.4417 17.4976 13.2497 17.4976C13.0577 17.4976 12.8658 17.4241 12.7188 17.2786L8.21935 12.7792C7.92688 12.4867 7.92688 12.0112 8.21935 11.7188L12.7188 7.21935C13.0112 6.92688 13.4866 6.92688 13.7791 7.21935C14.0716 7.51181 14.0746 7.9873 13.7821 8.27976Z"
                fill={
                  leftArrowDisable ? "#DFE1E5" : "var(--primary-text-color)"
                }
              />
            </svg>
          </div>
          <div
            className='btn'
            role="button"
            onClick={() => {
              makeHorizantalScroll(elementRef, 25, 100, windowDimensions.width);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="var(--primary-text-color)"
            >
              <path
                d="M10.2179 15.7202L14.1879 11.7503L10.2193 7.7818C9.92688 7.48933 9.92688 7.01385 10.2193 6.72138C10.3663 6.5744 10.5583 6.50242 10.7503 6.50242C10.9423 6.50242 11.1342 6.5759 11.2812 6.72138L15.7807 11.2208C16.0731 11.5133 16.0731 11.9888 15.7807 12.2812L11.2812 16.7807C10.9888 17.0731 10.5134 17.0731 10.2209 16.7807C9.92844 16.4882 9.92542 16.0127 10.2179 15.7202Z"
                fill={
                  rightArrowDisable ? "#DFE1E5" : "var(--primary-text-color)"
                }
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='carWrapper'>
        <div
          className='carousel'
          ref={elementRef}
          onScroll={handleScroll}
        >
          {Array.from({ length: 17 }).map((_, index) => {
            return (
              <Card
                className='box'
                key={index}
                age="7W"
                bg={`/images/img${index + 1}.jpg`}
                gender="m"
                ad={true}
                location="Toronto, On"
                breed="australian shepherd"
                price="2,600"
                active={false}
                inde=''
              />
            );
          })}
        </div>
      </div>
    </div>
    </CarouselStyle>
  );
};

export default Carousel;
