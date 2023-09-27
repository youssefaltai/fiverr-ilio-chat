import { useAppDispatch, useAppSelector } from "~/features/hooks";
import { useState, createRef, useEffect } from "react";
import { logout } from "~/features/auth.slice";
import DarkButton from "~/components/DarkButton/DarkButton";
import { ModalStateProps } from "~/pages/HomePage/HomePage";
import { MenuStyle } from "./MenuStyle.styled";
import { useNavigate } from "react-router-dom";
import { RootState } from "~/features";

interface MenuProps extends ModalStateProps {
  img: string;
  username: string;
  email: string;
  className?: string;
  notifRef: React.RefObject<HTMLDivElement>;
  close: () => void;
}

const Menu: React.FC<MenuProps> = ({
  img,
  username,
  email,
  close,
  notifRef,
  setActiveModal,
}) => {
  const divRef = createRef<HTMLDivElement>();
  const windowDimensions = useAppSelector((state) => state.dimensions);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const [divWidth, setDivWidth] = useState(divRef.current?.offsetWidth);

  const logoutUser = () => {
    dispatch(logout());
    close();
  };

  useEffect(() => {
    setDivWidth(divRef.current?.offsetWidth);
  }, [windowDimensions.width]); //eslint-disable-line

  const handleClickOutside = (event: Event) => {
    if (
      notifRef &&
      notifRef.current &&
      !notifRef.current.contains(event.target as Node)
    ) {
      close();
      console.log("clicked outsid");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const navigate = useNavigate();

  const { submittedForm } = useAppSelector((state: RootState) => state.newPost);
  const { saved } = useAppSelector((state: RootState) => state.saved);
  const number = submittedForm?.length ? submittedForm?.length : 0;
  const saving = saved.length;
  return (
    <>
      <MenuStyle>
        {!user ? (
          <div className="main notLoggedInDiv">
            <nav className="list">
              <div
                className="listItem"
                onClick={() => {
                  setActiveModal("signin");
                }}
              >
                <div className="iconBox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.99914 10.6248C12.4116 10.6248 14.3741 8.66232 14.3741 6.24982C14.3741 3.83732 12.4116 1.87482 9.99914 1.87482C7.58664 1.87482 5.62414 3.83732 5.62414 6.24982C5.62414 8.66232 7.58664 10.6248 9.99914 10.6248ZM9.99914 3.12482C11.7225 3.12482 13.1241 4.52648 13.1241 6.24982C13.1241 7.97315 11.7225 9.37482 9.99914 9.37482C8.2758 9.37482 6.87414 7.97315 6.87414 6.24982C6.87414 4.52648 8.2758 3.12482 9.99914 3.12482ZM16.4575 14.9724V15.8148C16.4575 16.594 16.1733 17.3406 15.6566 17.9165C15.5333 18.0548 15.3625 18.1248 15.1908 18.1248C15.0425 18.1248 14.8933 18.0723 14.7741 17.9656C14.5166 17.7356 14.4958 17.3406 14.7258 17.0831C15.0366 16.7357 15.2083 16.2857 15.2083 15.8157V14.9732C15.2083 13.7115 14.3716 12.6198 13.1725 12.3189C12.9616 12.2656 12.735 12.2948 12.5508 12.399C10.9666 13.2807 9.02829 13.2773 7.45412 12.4014C7.26579 12.2939 7.03914 12.2631 6.82831 12.3181C5.62914 12.6198 4.79162 13.7115 4.79162 14.9732V15.8157C4.79162 16.2865 4.96332 16.7365 5.27415 17.0831C5.50415 17.3406 5.48245 17.7356 5.22578 17.9656C4.96745 18.1964 4.57248 18.174 4.34331 17.9173C3.82665 17.3406 3.54248 16.594 3.54248 15.8157V14.9732C3.54248 13.1382 4.76829 11.5482 6.52329 11.1065C7.04245 10.9748 7.60662 11.0499 8.06829 11.3132C9.25995 11.9765 10.7367 11.979 11.9383 11.3106C12.3942 11.0506 12.9583 10.9765 13.4792 11.1073C15.2317 11.5465 16.4575 13.1365 16.4575 14.9724Z"
                      fill="#292F3F"
                    />
                  </svg>
                </div>
                <span>Sign In</span>
              </div>
              <HelpListItem />
            </nav>
          </div>
        ) : (
          <div className="main" ref={divRef}>
            <section>
              <div className="profile">
                <div className="imgDiv">
                  <img src={img} alt={username} />
                </div>
                <aside className="details">
                  <p
                    style={{ width: `${Number(divWidth) - 50 - 24 - 24}px` }}
                    className="username"
                  >
                    {username}
                  </p>
                  <span
                    style={{ width: `${Number(divWidth) - 50 - 24 - 24}px` }}
                    className="email"
                  >
                    {email}
                  </span>
                  <div>
                    <a href="/edit" onClick={(e) => e.preventDefault()}>
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate("/edit");
                        }}
                      >
                        Edit Profile
                      </button>
                    </a>
                    <a href="/profile" onClick={(e) => e.preventDefault()}>
                      <button
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigate("/profile");
                        }}
                      >
                        View Profile
                      </button>
                    </a>
                  </div>
                </aside>
              </div>
              <DarkButton
                title="New Post"
                className="newPostBtn"
                onClick={() => setActiveModal("post")}
              />
            </section>
            <nav className="list">
              <div className="listItem listItem1">
                <div className="iconBox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M14.1667 3.54167H5.83333C3.65083 3.54167 1.875 5.31751 1.875 7.50001V12.5C1.875 14.6825 3.65083 16.4583 5.83333 16.4583H14.1667C16.3492 16.4583 18.125 14.6825 18.125 12.5V7.50001C18.125 5.31751 16.3492 3.54167 14.1667 3.54167ZM5.83333 4.79167H14.1667C15.295 4.79167 16.2625 5.48662 16.6692 6.46912L11.5025 9.91415C10.59 10.5216 9.41 10.5216 8.49833 9.91415L3.33165 6.46912C3.73749 5.48579 4.705 4.79167 5.83333 4.79167ZM14.1667 15.2083H5.83333C4.34 15.2083 3.125 13.9933 3.125 12.5V7.83417L7.80416 10.9542C8.47083 11.3984 9.235 11.6208 10 11.6208C10.7642 11.6208 11.5283 11.3984 12.1958 10.9542L16.875 7.83417V12.5C16.875 13.9933 15.66 15.2083 14.1667 15.2083Z"
                      fill="#292F3F"
                    />
                  </svg>
                </div>
                <a href="/menuSaved" onClick={(e) => e.preventDefault()}>
                  <span onClick={() => navigate("/messages")}>
                    Messages
                  </span>
                </a>
                <div className="notificationNumber">2</div>
              </div>
              <div className="listItem">
                <div className="iconBox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.0309 5.98083L12.3526 2.30245C12.0767 2.02662 11.7109 1.875 11.3217 1.875H7.50008C5.31758 1.875 3.54175 3.65083 3.54175 5.83333V14.1667C3.54175 16.3492 5.31758 18.125 7.50008 18.125H12.5001C14.6826 18.125 16.4584 16.3492 16.4584 14.1667V7.01162C16.4584 6.62245 16.3067 6.25583 16.0309 5.98083ZM12.2917 4.00838L14.3242 6.04085H13.7501C12.9459 6.04085 12.2917 5.38669 12.2917 4.58252V4.00838ZM12.5001 16.875H7.50008C6.00675 16.875 4.79175 15.66 4.79175 14.1667V5.83333C4.79175 4.34 6.00675 3.125 7.50008 3.125H11.0417V4.58333C11.0417 6.07667 12.2567 7.29167 13.7501 7.29167H15.2084V14.1667C15.2084 15.66 13.9934 16.875 12.5001 16.875Z"
                      fill="#292F3F"
                    />
                  </svg>
                </div>
                <a href="/menuListing" onClick={(e) => e.preventDefault()}>
                  {" "}
                  <span onClick={() => navigate("/menuListing")}>
                    Listings{" "}
                  </span>
                </a>
                {number > 0 && (
                  <div className="notificationNumber">{number}</div>
                )}
              </div>
              <div className="listItem">
                <div className="iconBox">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.7581 4.24708C15.7189 2.98625 14.2748 2.29208 12.6898 2.29208C11.7364 2.29208 10.8148 2.52373 9.99977 2.9654C9.18561 2.52373 8.26394 2.29208 7.30977 2.29208C5.72478 2.29208 4.27978 2.98625 3.24145 4.24708C2.11145 5.61875 1.64311 7.49208 1.98728 9.25792C2.79978 13.4213 7.03977 16.3296 8.82561 17.3863C9.18811 17.6004 9.59394 17.7079 9.99977 17.7079C10.4056 17.7079 10.8123 17.6013 11.1748 17.3863C12.9598 16.3288 17.2006 13.4213 18.0131 9.25792C18.3564 7.49208 17.8881 5.61875 16.7581 4.24708ZM16.7856 9.01876C16.0706 12.6846 12.1781 15.3396 10.5373 16.3104C10.2064 16.5071 9.79311 16.5063 9.46228 16.3104C7.82145 15.3396 3.92893 12.6846 3.21393 9.01876C2.93977 7.61543 3.31144 6.12873 4.2056 5.04207C5.0031 4.07457 6.10477 3.54208 7.30977 3.54208C8.15811 3.54208 8.97145 3.77541 9.66311 4.21707C9.86811 4.34791 10.1314 4.34791 10.3364 4.21707C11.0281 3.77541 11.8414 3.54208 12.6898 3.54208C13.8939 3.54208 14.9964 4.07457 15.7939 5.04207C16.6881 6.12873 17.0589 7.61459 16.7856 9.01876Z"
                      fill="#292F3F"
                    />
                  </svg>
                </div>
                <a href="/menuSaved" onClick={(e) => e.preventDefault()}>
                  {" "}
                  <span onClick={() => navigate("/menuSaved")}>Saved</span>
                </a>
                {saving > 0 && (
                  <div className="notificationNumber">{saving}</div>
                )}
              </div>
              <HelpListItem />
            </nav>
            <button onClick={logoutUser} className="logout">
              Logout
            </button>
          </div>
        )}
      </MenuStyle>
    </>
  );
};

export default Menu;

const HelpListItem = () => {
  const navigate = useNavigate();
  return (
    <MenuStyle>
      <div className="listItem">
        <div className="iconBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.6975 5.1475L14.8525 2.30245C14.5767 2.02662 14.2108 1.875 13.8217 1.875H9.16667C7.44333 1.875 6.04167 3.27667 6.04167 5V5.20833H5C3.27667 5.20833 1.875 6.61 1.875 8.33333V15C1.875 16.7233 3.27667 18.125 5 18.125H10.8333C12.5567 18.125 13.9583 16.7233 13.9583 15V14.7917H15C16.7233 14.7917 18.125 13.39 18.125 11.6667V6.17828C18.125 5.78912 17.9733 5.4225 17.6975 5.1475ZM14.7917 4.00838L15.9909 5.20752H15.6767C15.1892 5.20752 14.7917 4.81001 14.7917 4.32251V4.00838ZM12.7083 15C12.7083 16.0342 11.8675 16.875 10.8333 16.875H5C3.96583 16.875 3.125 16.0342 3.125 15V8.33333C3.125 7.29917 3.96583 6.45833 5 6.45833H6.04167V11.6667C6.04167 13.39 7.44333 14.7917 9.16667 14.7917H12.7083V15ZM15 13.5417H9.16667C8.1325 13.5417 7.29167 12.7008 7.29167 11.6667V5C7.29167 3.96583 8.1325 3.125 9.16667 3.125H13.5417V4.32332C13.5417 5.50082 14.4992 6.45833 15.6767 6.45833H16.875V11.6667C16.875 12.7 16.0342 13.5417 15 13.5417Z"
              fill="#292F3F"
            />
          </svg>
        </div>
        <a href="/help" onClick={(e) => e.preventDefault()}>
          {" "}
          <span
            onClick={() => {
              navigate("/help");
            }}
          >
            Help
          </span>
        </a>
        {/* <div className={classes.notificationNumber}>2</div> */}
      </div>
    </MenuStyle>
  );
};
