import { useState, useEffect } from "react";
import Card from "~/components/Card";
import Layout from "./Layout";
import { useAppDispatch, useAppSelector } from "~/features/hooks";
import MenuPage from "./MenuPage/MenuPage";
import Location from "./components/Modal/Location/Location";
import Registration from "./components/Modal/Registration/Registration";
import Filter from "./components/Modal/Filter/Filter";
import NewPost from "./components/Modal/NewPost/NewPost";
import ShowMoreBtn from "~/components/ShowMoreBtn/ShowMoreBtn";
import SignIn from "./components/Modal/Signin/SignIn";
import { HomePageStyle } from "./HomePageStyle.styled";
import { RootState } from "~/features";
import { cardSave, save } from "~/features/save.slice";
import { useSelector } from "react-redux";
//import { ToastContainer } from "react-toastify";

export type ModalStateType =
  | null
  | "registration"
  | "menu"
  | "location"  
  | "filter"
  | "post"
  | "signin";  
export interface ModalStateProps {  
  activeModal: ModalStateType;
  setActiveModal: (type: ModalStateType) => void;
}
const HomePage = () => {
  const [activeModal, setActiveModal] = useState<ModalStateType>(null);

  const windowDimensions = useAppSelector((state) => state.dimensions);

  const changeActiveModal = (type: ModalStateType) => {
    setActiveModal(type);
  };
  const {card} = useAppSelector((state:RootState)=>state.saved)
  const dispatch = useAppDispatch();
  const {user}  = useSelector((state:RootState) => state.auth )

  // prevent scroll on report modal open in desktop
  useEffect(() => {
    if (activeModal && windowDimensions.width >= 743)
      document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [activeModal, windowDimensions.width]);

  // IF New POST MODAL OPEN IN MOBILE
  if (windowDimensions.width < 743 && activeModal === "post")
    return <NewPost close={() => setActiveModal(null)} />;

  // IF Filter MODAL OPEN IN MOBILE
  if (windowDimensions.width < 743 && activeModal === "filter")
    return <Filter close={() => setActiveModal(null)} />;

  // IF LOCATION MODAL OPEN IN MOBILE 
 if (windowDimensions.width < 743 && activeModal === "location")
    return <Location close={() => setActiveModal(null)} />;

  // IF MODAL REGISTRATION MODAL OPEN IN MOBILE
  if (windowDimensions.width < 743 && activeModal === "registration")
    return (
      <Registration
        moveToSignIn={() => {
          setActiveModal("signin");
        }}
        close={() => setActiveModal(null)}
      />
    );

  // IF MODAL REGISTRATION MODAL OPEN IN MOBILE
  if (windowDimensions.width < 743 && activeModal === "signin")
    return (
      <SignIn
        moveToRegistration={() => {
          setActiveModal("registration");
        }}
        close={() => setActiveModal(null)}
      />
    );

  // IF MENU OPEN IN MOBILE
  if (windowDimensions.width < 743 && activeModal === "menu")
    return (
      <MenuPage
        email="redpoodle@gmail.com"
        img="/images/poodle.jpg"
        username="blueberrypoodle"
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    );


  return (
    <HomePageStyle>
    <Layout activeModal={activeModal} setActiveModal={changeActiveModal}>
      <div className='main2'>
        <div className='cards2'>
          {card.map((item, index) => {
            const { age, bg, breed, location, price,active,gender,title,inde} = item;
            const handleSaved = (e: React.MouseEvent) => {
               e.stopPropagation();
              if (user === null){
                setActiveModal("registration")
              }
              if(user){ 
              dispatch(
                  save({ bg,gender, age, location, breed, price, active,title,inde})
                )  
                dispatch(cardSave({index:index, active:active}))              
              }
            };
            return (
              <Card
                key={index}
                age={age}
                bg={bg}
                breed={breed}
                gender={index % 5 === 0? "m" : "f" }
                location={location}
                price={price}
                ad= {index % 3 === 0 }
                active={active}
                inde={inde.toString()}
                handleSaved={handleSaved}
              />
            );
          })}
        </div>
        <p className="additionalText"> Continue viewing Dogs</p>
        <ShowMoreBtn />
      </div>
      {activeModal === "registration" && (
        <div className='modalWrapper2'>
          <Registration
            moveToSignIn={() => {
              setActiveModal("signin");
            }}
            close={() => setActiveModal(null)}
          />
        </div>
      )}
      {activeModal === "location" && (
        <div className="modalWrapper2">
          <Location close={() => setActiveModal(null)} />
        </div>
      )}
      {activeModal === "filter" && (
        <div className="modalWrapper2">
          <Filter close={() => setActiveModal(null)} />
        </div>
      )}
      {activeModal === "post" && (
        <div className="modalWrapper2">
          <NewPost close={() => setActiveModal(null)} />
        </div>
      )}

      {activeModal === "signin" && (
        <div className='modalWrapper2'>
          <SignIn
            moveToRegistration={() => {
              setActiveModal("registration");
            }}
            close={() => setActiveModal(null)}
          />
        </div>
      )}
    </Layout>
    {/* <ToastContainer 
     toastStyle={{color:"#292f3f"}}
     autoClose={2500}
     position="top-center"
    /> */}
    </HomePageStyle>
  );
};

export default HomePage;
