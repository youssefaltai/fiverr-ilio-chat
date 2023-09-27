import { styled } from "styled-components";


export const ListingDetailsStyle = styled.div`

.main {
  max-width: calc(1120px);
  margin: auto;
  padding: 0 40px;
}

.mainContainer {
  margin: calc(66px + 34px) auto 40px auto;

  /* margin-top: -5px; */
}

.content {
  display: flex;
  justify-content: space-between;
  gap: 100px;
}

.profileLogoWrapper {
  width: 350px;
  padding: 24px 0;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.12);
  margin-top: 79px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.profileLogo {
  width: 100%;
  margin: 0 !important;
}

.inputDiv {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-inline: 24px;
}
.inputDiv textarea {
  border-radius: 20px;
  background: #f0f3f5;
  width: calc(252px - 30px);
  padding: 11px 15px 12px 15px;
  border: none;
  overflow: hidden;
  resize: none;
  font-size: 14px;
}

.inputDiv textarea::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.inputDiv textarea {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.inputDiv button {
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: var(--primary-text-color);
  padding: 10px 11px 10px 9px;
}

.modalWrapper {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.6);
}
@media (width <= 1100px) {
  .content {
    flex-direction: column;
    gap: 40px;
  }
  .profileLogoWrapper {
    margin: 0;
    width: calc(100% - 48px);
    flex-direction: row;
    padding: 24px;
     
  }
  .profileLogoWrapper .profileLogo {
    width: 278px;
    min-width: 278px;
    
  }


  .inputDiv{
    margin-left: 100px;
  }
}

@media (width <=743px) {
  .descriptionAndDetails{
    margin-top: -40px !important;
  }
}

@media (width <= 762px) {
  .profileLogoWrapper {
    margin: 0;
    width: calc(100% - 48px);
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }
  .profileLogoWrapper .profileLogo {
    width: 100%;
  }
  .inputDiv {
    margin-top: 0;
  }

  .inputDiv{
    margin-left: 25px;
  }

}


@media (width <=743px) {
  .navDiv {
    display: none;
  }
  .mainContainer {
    margin-top: 21.33px;
  }

  
}
@media (width <= 430px) {
  .main {
    max-width: calc(1120px);
    margin: auto;
    padding: 0 24px;
  }
  .profileLogoWrapper {
    padding: 24px 0;
    width: calc(100%);
  }
  .inputDiv textarea {
    font-size: 16px;
  }
}




`
