import {styled} from 'styled-components';



export const ReportStyle = styled.div`
   .main{
    overflow: hidden !important;
    form{

    //  margin-bottom: 160px;
    }
   }

.main section {
  font-size: 12px;
  margin-top: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: capitalize;
}


.main .wrapper{
}
.info {
  display: flex;
  gap: 10px;
  margin: 40px auto;
}
.info img {
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 6px;
}

.title,
.cost,
.descHead {
  font-size: 14px;
  color: var(--primary-text-color);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  display: block;
  margin: 0 auto 5px auto;
}

.descHead {
  font-size: 16px;
  margin: 0;
  line-height: 19px;
}

.main form textarea {
  width: calc(100% - 20px);
  border-radius: 8px;
  background: #f0f3f5;
  border: none;
  padding: 14px 10px;
  resize: none;
  margin: 20px auto 40px;
}

.main form button {
  border: none;
  border-radius: 8px;
  background-color: var(--primary-text-color);
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  padding: 10.5px 31.5px;
  margin-bottom: 10px;
}

@media (width <=743px) {
  .main form textarea {
    font-size: 16px;
    max-height: 100%;
  }
}


////

.main {
    border-radius: 12px;
    background: #fff;
    box-shadow: 0px 4px 24px 0px rgba(41, 47, 63, 0.12);
    width: 430px;
    max-width: calc(430px);
    min-height: 600px;
    max-height: 600px;
    overflow: scroll !important;
    //position: fixed;
   /* top:50%;
   left: 50%;
   transform: translate(-50%,-50%); */
  }


  #headerFix{

     position: fixed !important;
  }

   header {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 600;
    line-height: 19px;
    text-transform: capitalize;
    padding: 23px 0;
    cursor: pointer;
    background: white;
    z-index: 100;
    position: fixed;
    width: 100%;
    max-width: inherit;
    border-radius: 12px 12px 0 0;
    color: var(--primary-text-color);
    top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
   margin-top: -267px;
   max-width: 430px;
  }
   header button:first-child {
    all: unset;
    transition: all 0.3s;
    height: 20px;
    width: 20px;
    margin-left: 24px;
  }
   header button:last-child {
    display: none !important;
    all: unset;
    transition: all 0.3s;
    height: 24px;
    width: 24px;
    margin-left: 24px;
  }

  .wrapper {
    padding: 0 24px;
    margin-top: calc(66px + 10px);
  }

  @media (width <= 743px) {
    .main {
      width: 100%;
      max-width: 100%;
      min-height: 100vh;
      overflow: scroll;
      border-radius: unset;
    }
   header {
      //padding: 21px 0;
      top:0px;
      margin-top: 27px;
      max-width: 100vw !important;
      padding: 32px 0 21px;

    }

    #headerFix{
     // width: 100vw !important;
    }
   header button:first-child {
      display: none;
    }
     header button:last-child {
      display: block !important;
    }
  }



`