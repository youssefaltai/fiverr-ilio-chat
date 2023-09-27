import { createRef } from "react";
//import classes from "./NotificationIcon.module.css";
import { useAppSelector } from "~/features/hooks";
import { ModalStateProps } from "../../HomePage";
import Menu from "../Modal/Menu/Menu";
import { NotificationStyle } from "./NotificationStyle.styled";

interface NotificationIconProps extends ModalStateProps {
  notificationNumber: number;
}
const NotificationIcon: React.FC<NotificationIconProps> = ({
  activeModal,
  setActiveModal,
  notificationNumber,
}) => {
  const notifRef = createRef<HTMLDivElement>();
  const { user } = useAppSelector((state) => state.auth);
  const toggleMenu = () => {
    setActiveModal(!activeModal ? "menu" : null);
  };
  const closeMenu = () => {
    setActiveModal(null);
  };

  return (
    <NotificationStyle>
      <div className="main1" ref={notifRef}>
        <div className="wrapper1" onClick={toggleMenu}>
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M1.875 4.16669C1.875 3.82169 2.155 3.54169 2.5 3.54169H13.3333C13.6783 3.54169 13.9583 3.82169 13.9583 4.16669C13.9583 4.51169 13.6783 4.79169 13.3333 4.79169H2.5C2.155 4.79169 1.875 4.51169 1.875 4.16669ZM17.5 9.37502H2.5C2.155 9.37502 1.875 9.65502 1.875 10C1.875 10.345 2.155 10.625 2.5 10.625H17.5C17.845 10.625 18.125 10.345 18.125 10C18.125 9.65502 17.845 9.37502 17.5 9.37502ZM10 15.2084H2.5C2.155 15.2084 1.875 15.4884 1.875 15.8334C1.875 16.1784 2.155 16.4584 2.5 16.4584H10C10.345 16.4584 10.625 16.1784 10.625 15.8334C10.625 15.4884 10.345 15.2084 10 15.2084Z"
            fill="white"
          />
        </svg> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 11779">
              <g id="2 - Regular / menu">
                <path
                  id="menu-Regular"
                  d="M21.75 19C21.75 19.414 21.414 19.75 21 19.75H8C7.586 19.75 7.25 19.414 7.25 19C7.25 18.586 7.586 18.25 8 18.25H21C21.414 18.25 21.75 18.586 21.75 19ZM3 12.75H21C21.414 12.75 21.75 12.414 21.75 12C21.75 11.586 21.414 11.25 21 11.25H3C2.586 11.25 2.25 11.586 2.25 12C2.25 12.414 2.586 12.75 3 12.75ZM12 5.75H21C21.414 5.75 21.75 5.414 21.75 5C21.75 4.586 21.414 4.25 21 4.25H12C11.586 4.25 11.25 4.586 11.25 5C11.25 5.414 11.586 5.75 12 5.75Z"
                  fill="black"
                />
              </g>
            </g>
          </svg>
        </div>
        {user && notificationNumber > 0 && (
          <div className="notificationNumber1" onClick={toggleMenu}>
            <span>{notificationNumber}</span>
          </div>
        )}
        {activeModal === "menu" ? (
          <Menu
            email="redpoodle@gmail.com"
            img="/images/poodle.jpg"
            username="blueberrypoodle"
            className="menu1"
            close={closeMenu}
            notifRef={notifRef}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
        ) : null}
      </div>
    </NotificationStyle>
  );
};

export default NotificationIcon;
