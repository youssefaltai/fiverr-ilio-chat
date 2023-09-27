import { ModalStateProps } from "./HomePage";
import NotificationIcon from "./components/NotifcationIcon/NotificationIcon";
import LocationAndFilter from "./components/LocationAndFilter/LocationAndFilter";
import { LayoutStyle } from "./LayoutStyle.styled";
import { Link } from "react-router-dom";
import { useAppSelector } from "~/features/hooks";
import { RootState } from "~/features";
interface LayoutProps extends ModalStateProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  activeModal,
  setActiveModal,
}) => {
  const signIn = () => {
    setActiveModal("registration");
  };
   const {user} = useAppSelector((state:RootState)=> state.auth)

  if (user) {
    
    //let appear = window.document.getElementById("help")!;
    // if (appear != null){
    //   appear.style.display ="none";
    // }
    
   // appear.setAttribute("id", "doThis")
 

     //let notify = window.document.getElementById("notification")!;
    //  if(notify !== null){
    //   notify.style.display = "block"
    //  }
     

    }
  return (
    <>
      <LayoutStyle>
        <div className="container3">
          <img className="logo3" src="/Frame 87.png" alt="logo" />
          <LocationAndFilter
            location="Ottawa, On"
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
          <div className={ !user? "help" :"noHelp"}>
            <Link to="/help">
              <p>Help</p>
            </Link>
            <button className="signin" onClick={signIn}>
              Sign In
            </button>
          </div>
          <div id="notification" className={ !user?"notification" : "notificationNone"}>
            <NotificationIcon
              activeModal={activeModal}
              setActiveModal={setActiveModal}
              notificationNumber={2}
            />
          </div>
        </div>
        {children}
      </LayoutStyle>
    </>
  );
};

export default Layout;
