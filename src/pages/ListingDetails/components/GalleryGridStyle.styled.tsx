import {styled} from 'styled-components';


export const GridStyle = styled.div`
    
    .container {
  display: grid;
  grid-template-columns: 6.08695652173913fr repeat(2, 2.956521739130435fr);
  grid-template-rows: auto auto;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  position: relative;
  margin-top: -21px;
}

.container img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.container img:nth-child(1) {
  grid-area: 1 / 1 / 3 / 2;
  aspect-ratio: 560 / 510;
  border-radius: 12px 0 0 12px;
}
.container img:nth-child(2) {
  grid-area: 1 / 2 / 2 / 3;
  aspect-ratio: 272 / 255;
}
.container img:nth-child(3) {
  grid-area: 1 / 3 / 2 / 4;
  aspect-ratio: 272 / 255;
  border-radius: 0 12px 0 0;
}
.container img:nth-child(4) {
  grid-area: 2 / 2 / 3 / 3;
  aspect-ratio: 272 / 247;
}
.container img:nth-child(5) {
  grid-area: 2 / 3 / 3 / 4;
  aspect-ratio: 272 / 247;
  border-radius: 0 0 12px 0;
}

.viewAllImg {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}

.viewAllImg span {
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
}

@media (width <= 834px) {
  .container {
    /* grid-template-columns: 378px repeat(2, 180px); */
    grid-template-columns: 6.0159151193634fr repeat(2, 2.8647214854111fr);
    grid-template-rows: auto auto;
  }
  .container img:nth-child(1) {
    aspect-ratio: 378 / 378;
  }
  .container img:nth-child(2) {
    aspect-ratio: 180 / 190;
  }
  .container img:nth-child(3) {
    aspect-ratio: 180 / 190;
  }
  .container img:nth-child(4) {
    aspect-ratio: 180 / 180;
  }
  .container img:nth-child(5) {
    aspect-ratio: 180 / 180;
  }
}

@media (width <= 743px) {
  .container {
    display: none;
  }
}



    
`