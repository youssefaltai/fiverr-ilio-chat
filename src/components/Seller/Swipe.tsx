import  { useEffect, useState } from "react";
import leftArrow from "../../image/left.svg";
import rightArrow from "../../image/right.svg";
import leftArrowC from "../../image/leftC.svg";
import rightArrowC from "../../image/rightC.svg";

export default function SlideNextButton(props: any) {
  const [increaseTo, setIncreaseTo] = useState<number>(4);
  const [forward, setforward] = useState<number>(4);

  useEffect(() => {
    if (props.swiperWidth < 552) {
      setIncreaseTo(2);
      setforward(2);
    } else if (props.swiperWidth < 808) {
      setIncreaseTo(3);
      setforward(3);
      console.log("yes");
    } else if (props.swiperWidth > 808) {
      setIncreaseTo(4);
      setforward(4);
    }
  }, [props.swiperWidth, increaseTo]);

  console.log(forward);

  return (
    <>
      <div className="flexing">
        <div className={props.start === 0 ? "not" : "clicking"}>
          <img
            src={props.start === 0 ? leftArrowC : leftArrow}
            alt="left"
            onClick={() => {
              if (props.start >= 0) {
                props.swipeContainerRef.current.swiper.slidePrev();
                if (increaseTo === 4) {
                  if (forward >= 5) {
                    setforward(forward - 1);
                    console.log(forward);
                  }
                } else if (increaseTo === 3) {
                  if (forward > 3) {
                    setforward(forward - 1);
                    console.log(forward);
                  }
                } else if (increaseTo === 2) {
                  if (forward > 2) {
                    setforward(forward - 1);
                    console.log(forward);
                  }
                }
              }
            }}
          />
        </div>
        <div className={props.isEnd === true ? "not" : "clicking"}>
          <img
            src={props.isEnd === true ? rightArrowC : rightArrow}
            alt="right"
            onClick={() => {
              if (props.start >= 0 && props.start <= 9) {
                props.swipeContainerRef.current.swiper.slideTo(forward, 900);
                if (forward < 9) {
                  setforward(forward + increaseTo);
                  console.log(forward);
                }
              }
            }}
          />
        </div>
      </div>
    </>
  );
}
