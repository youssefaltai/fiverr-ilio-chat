import { createRef } from "react";
import { ModalStateProps } from "../HomePage";
//import classes from "./MenuPage.module.css";
import Menu from "../components/Modal/Menu/Menu";
import { MenuPageStyle } from "./MenuPageSytle.styled";
interface MenuPageProps extends ModalStateProps {
  email: string;
  img: string;
  username: string;
}
const MenuPage: React.FC<MenuPageProps> = ({
  activeModal,
  setActiveModal,
  email,
  img,
  username,
}) => {
  const ref = createRef<HTMLDivElement>();
  return (
    <>
    <MenuPageStyle>
      <header className='header'>
        <button onClick={() => setActiveModal(null)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.7064 8.79155L11.413 12.2492L14.7064 15.7068C15.097 16.1169 15.097 16.7819 14.7064 17.1921C14.5117 17.3965 14.2557 17.5 13.9997 17.5C13.7437 17.5 13.4876 17.3979 13.293 17.1921L9.293 12.9925C8.90233 12.5823 8.90233 11.9174 9.293 11.5072L13.293 7.30762C13.6836 6.89746 14.317 6.89746 14.7077 7.30762C15.0983 7.71778 15.097 8.38139 14.7064 8.79155Z"
              fill="black"
            />
          </svg>
        </button>
      </header>
      <div ref={ref} className='main'>
        <Menu
          email={email}
          img={img}
          username={username}
          className='menu'
          notifRef={ref}
          activeModal={activeModal}
          close={() => setActiveModal(null)}
          setActiveModal={setActiveModal}
        />

      </div>
      </MenuPageStyle>
    </>
  );
};

export default MenuPage;
