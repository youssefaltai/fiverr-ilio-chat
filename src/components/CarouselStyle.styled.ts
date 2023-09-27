import {styled} from 'styled-components';


 export const CarouselStyle = styled.div`
 
 
 .container {
  scroll-snap-align: start;
}

.controllers {
  display: flex;
  align-items: center;
}

.controllers h4 {
  margin: 0;
  color: var(--primary-text-color);
  font-weight: 600;
  font-size: 16px;
}
.btns {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn {
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
}
.btn:hover {
  scale: 105%;
}

.carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc(25% - 10.5px);
  gap: 14px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  margin: 18px auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.box {
  aspect-ratio: 1/1;
  scroll-snap-align: start;
}
.carousel .box {
  scroll-snap-stop: always;
  scroll-snap-align: start;
}

/* .carousel .box:nth-of-type(4n + 1) {
  scroll-snap-stop: always;
  scroll-snap-align: start;
} */

@media (width <= 768px) {
  .carousel {
    grid-auto-columns: calc(33% - 7px);
  }
}

@media (width <= 600px) {
  .carousel {
    grid-auto-columns: calc(50% - 7px);
  }
}

@media (width <= 428px) {
  .btns {
    display: none;
  }
  .carousel {
    grid-auto-columns: calc(62% - 7.44px);
  }
  .carousel .box {
    scroll-snap-stop: always;
    scroll-snap-align: center;
  }
}

 
 
 `
