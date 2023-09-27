import styled from "styled-components";

export const Hold = styled.div`
  height: 100% !important;
`;

export const MainBody = styled.div`
  width: 95%;
  margin: auto;

  @media screen and (max-width: 859px) {
    width: 92%;
  }

  @media screen and (max-width: 431px) {
    padding-left: 24px;
    padding-right: 24px;
    margin-left: 0px !important;
    margin-right: 0px !important;
    width: auto;
  }
`;

export const AppStyle = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  text-align: center;

  margin: auto;
  max-width: 61.63rem;

  @media screen and (max-width: 1340px) {
    margin: auto;
  }

  @media screen and (max-width: 859px) {
  }

  @media screen and (max-width: 531px) {
  }

  @media screen and (max-width: 431px) {
    width: 100% !important;
  }

  @media screen and (max-width: 381px) {
    .control {
      width: 104vw !important;
    }
  }
  @media screen and (max-width: 331px) {
    .control {
      width: 111vw;
    }
  }

  @media screen and (max-width: 300px) {
    .control {
      width: 114vw;
    }
  }
`;

export const Heading = styled.div`
  text-align: left;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 66px;
  background-color: white;
  z-index: 999;
  top: 0;

  .phoneHead {
    display: none;
  }

  @media screen and (max-width: 431px) {
    .fixHead {
      display: none;
    }

    .phoneHead {
      display: flex;
      width: 86px;

      justify-content: space-between;
      font-family: "Inter", sans-serif;
      align-items: center;
      color: #292f3f;
      .inner {
        font-size: 16px;
        font-weight: 600;
        font-style: normal;
        text-transform: capitalize;
      }
    }
  }

  @media screen and (max-width: 281px) {
    left: 10px;
    .phoneHead {
    }
  }
`;
export const Container = styled.div``;

export const Displaying = styled.div`
*,*::before,*::after{
padding: 0;
margin: 0;
}
  max-width: 61.63rem;
  margin-top: 7.8rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  font-family: "Inter", "sans-serif";
  font-size: 0.75rem;
  img {
    border-radius: 50%;
    width: 6.75rem;
    height: 6.75rem;
    //margin-top: 0.56rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-weight: 600;
    font-family: "Inter", "sans-serif";
    font-size: 18px;
    color: #292f3f;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .relative {
    position: relative;
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
  }

  .first {
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    
    
  }
  .joined {
    background-color: #5a40c7;
    height: 30px;
    box-shadow: 2px 2px 6px #969696;

    //width: 8.25rem;
    max-width: 60%;

    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    color: white;
    border-radius: 7px;
    position: absolute;
    margin-top: 2.13rem;
    text-align: center;
    top: -53%;
    left: 50%;
    transform: translate(0%, -50%);
    margin-left: -115px;
    margin-bottom: -15px;
    span {
      text-align: center;
      height: 30px;
      display: flex;
      align-items: center;
      padding: 8px 15px;
    }
  }

  .list {
    background-color: #d32b84;
    max-width: 42%;
    height: 30px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: 2px 2px 6px #969696;
    color: white;
    border-radius: 7px;
    position: absolute;
    top: 21%;
    left: 50%;
    transform: translate(0%, -50%);
    margin-left: 60px;
  }
  .text {
    font-size: 0.75rem;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    white-space: nowrap;
    text-align: center;
    align-items: center;
    height: 30px;

  }

  
  *,*::before,*::after{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  .west {
    display: flex;
    justify-content: center;
    background-color: #2ba0c5;
    width: max-content;
    max-width: 60%;
    height: 30px;
    margin: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    color: #fff;
    border-radius: 7px;
    text-align: center;
    box-shadow: 2px 2px 6px #969696;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 0.5rem;
   // padding-bottom: 0.4387rem;
   padding-bottom: 8px;
    margin-top: 0.63rem;
    text-align: center;
    display: flex;
    align-items: center;
    p {
      //padding-top: 0.54rem;
      font-weight: 500;
      height: 15px;
      white-space: nowrap;
    }
    img {
      width: 18px;
      height: 18px;
      align-items: center;
      //margin-top: 0.2rem;
      margin-right: 3.5px;
    }
  }

  @media screen and (max-width: 450px) {
    .west {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 431px) {
    width: 85% !important;
    margin-top: 7.1rem;
  }

  @media screen and (max-width: 412px) {
    width: 90% !important;
  }
`;

export const Describe = styled.div`
  margin-top: 2.5rem;
  text-align: left;
  font-family: "Inter", sans-serif;
  max-width: 61.7rem;
  text-transform: capitalize;
  line-height: normal;

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #292f3f;
  }
  p {
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 2.88rem;
    max-width: 61.25rem;
    color: #292f3f;
    padding-top: 1.25rem;
  }

  .about {
    display: none;
  }

  @media screen and (max-width: 1340px) {
    margin-top: 2.5rem;
    max-width: 1340px;
    p {
      //  width: 1340px;
      max-width: 980px;
      margin-bottom: 2.88rem;
    }
  }

  @media screen and (max-width: 431px) {
    color: #292f3f;
    p {
      margin-left: 0 !important;
      text-transform: capitalize;
    }
    .describe {
      display: none;
    }

    .about {
      display: block;
      color: #292f3f;
    }
  }
`;

export const SellerContainer = styled.div`
  margin: auto;
  max-width: 61.63rem;
  width: 95%;
  position: relative;
  h2 {
    text-align: left;
    margin-bottom: -19px;
    font-weight: 600;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    width: 236px;
    color: #292f3f;
  }

  @media screen and (max-width: 859px) {
    width: 92%;
  }

  @media screen and (max-width: 431px) {
    width: 100vw;
    position: absolute;

    .List {
      padding-left: 24px;
      h2 {
        margin-bottom: -13px;
        color: #292f3f;
      }
    }
  }
`;

export const Sliding = styled.div`
  position: relative;
  max-width: 986px;

  img {
    width: 236px;
    height: 224px;
    border-radius: 15px;
  }

  .clicking {
    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }

  .not {
    img {
      cursor: not-allowed;
      width: 30px;
      height: 30px;
    }
  }

  .flexing {
    display: flex;
    align-items: center;
    justify-content: right;
    color: #292f3f;

    margin-bottom: -4px;

    max-width: 980px;

    img {
      width: 24px;
      height: 24px;

      margin-left: 15px;
      box-shadow: 2px 2px 6px #969696;
    }

    button {
      background-color: transparent;
      border: none;
    }
  }
  @media screen and (max-width: 1340px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 431px) {
    position: relative !important;

    .flexing {
      display: none;
    }
  }
`;

export const ImageStyling = styled.div`
  *,*::before,*::after{
    margin: 0px;
    padding: 0px;
  }
  
    
  position: relative;
  margin-top: 15px;
  text-decoration: none;

   a{
    text-decoration: none;
   }
  #imageStylin {
    aspect-ratio: 59/56 !important;
    border-radius: 15px;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    text-decoration: none;
  }


  figure{

    margin: 0px;
  }

  .heart {
    padding-top: 6px;
    margin-left: auto;
    img {
      width: 24px;
      height: 24px;
    }
  }

  .DogFlexing {
    display: flex;
    flex-direction: row;

    align-items: center;
  }

  figcaption {
    .DogFlexing {
      display: flex;
      flex-direction: row;

      padding: 7px 10px 10px 7px !important;
      align-items: center;
    }
  }
  .Dog {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  #one {
    padding: 0.45rem 0.63rem;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    margin: 3px !important;
    text-align: center;
      text-decoration: none;
    max-width: 50px;
    white-space: nowrap;

    p {
      margin: 0px;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none !important;
    }
  }
  #two {
    padding: 0.45rem 0.63rem;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    margin: 3px !important;
    text-align: center;
    max-width: 50px;
    white-space: nowrap;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  #three {
    padding: 0.45rem 0.63rem;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    margin: 3px !important;
    text-align: center;

    max-width: 50px;
    white-space: nowrap;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media screen and (max-width: 1010px) {
    #imageStylin {
      border-radius: 15px;
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  @media screen and (max-width: 975px) {
    #imageStylin {
      border-radius: 15px;
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  @media screen and (max-width: 859px) {
    #imageStylin {
      border-radius: 15px;
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  @media screen and (max-width: 700px) {
    .DogFlexing {
      bottom: 180px;
    }

    figcaption {
      left: 19.5px;
    }
  }

  @media screen and (max-width: 600px) {
    .DogFlexing {
      bottom: 190px;
    }

    .heart {
      img {
        margin-top: 0px;
      }
    }

    #imageStylin {
      border-radius: 15px;
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  @media screen and (max-width: 470px) {
    .DogFlexing {
      bottom: 183px;
    }
  }

  @media screen and (max-width: 431px) {
    #imageStylin {
      margin-top: 2.5rem;
      aspect-ratio: 59/56 !important;
      border-radius: 15px;
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  @media screen and (max-width: 300px) {
    #one {
      padding: 0.38rem;
    }

    #two {
      padding: 0.38rem;
    }

    #three {
      padding: 0.38rem;
    }
  }

  @media screen and (max-width: 228px) {
    #imageStylin {
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

export const TextStyling = styled.div`
  text-align: start;
  font-family: "Inter", sans-serif;
  max-width: 236px;
  width: fit-content;
  white-space: nowrap;
  padding: 0;
  font-size: 14px;
  margin: 0;
  line-height: normal;
  color: #292f3f;
  h2 {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 22vw;
  }
  p {
    margin-top: 3px;
    padding-bottom: 0px;
    font-size: 12px;
    color: #485562;

    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 22vw;
  }

  h3 {
    margin-top: 10px;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 30px;
    font-weight: 700;
    text-transform: capitalize;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 22vw;
  }

  @media screen and (max-width: 771px) {
    h2 {
      max-width: 29vw;
    }

    p {
      max-width: 29vw;
    }

    h3 {
      max-width: 29vw;
    }
  }

  @media screen and (max-width: 601px) {
    h2 {
      max-width: 45vw;
    }

    p {
      max-width: 45vw;
    }

    h3 {
      max-width: 45vw;
    }
  }

  @media screen and (max-width: 431px) {
    h2 {
      max-width: 56vw;
    }

    p {
      max-width: 56vw;
    }

    h3 {
      max-width: 56vw;
    }
  }
`;
