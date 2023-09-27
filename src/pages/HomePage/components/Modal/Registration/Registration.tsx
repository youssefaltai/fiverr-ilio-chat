import { useAppDispatch } from "~/features/hooks";
//import classes from "./Registration.module.css";
import { login } from "~/features/auth.slice";
import Modal from "~/components/Modal";
import { RegistrationStyle } from "./RegistrationStyle.styled";
interface RegistrationProps {
  moveToSignIn: () => void;
  close: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Registration: React.FC<RegistrationProps> = ({ close, moveToSignIn }) => {
  const dispatch = useAppDispatch();
  const userlogin = () => {
    dispatch(login({ user: "blueberrypoodle" }));
    close && close();
  };
  return (
    <RegistrationStyle>
    <Modal close={() => close()}>
      <div className='about'>
        <h1>Sign up to ilio</h1>
        <span>The most secure way to sign up</span>
      </div>
      <div className='authBtns'>
        <AuthButton
          icon="/icons/Google.svg"
          content="Continue with Google"
          onClick={userlogin}
        />
        <AuthButton
          icon="/icons/Facebook.svg"
          content="Continue with Facebook"
          onClick={userlogin}
        />
        <AuthButton
          icon="/icons/Apple.svg"
          content="Continue with Apple"
          onClick={userlogin}
        />
      </div>
      <footer className='footer'>
        <span>Have a account?</span>
        <span className='signUp' onClick={moveToSignIn}>
          Sign in
        </span>
      </footer>
    </Modal>
    </RegistrationStyle>
  );
};

const AuthButton: React.FC<{
  content: string;
  icon: string;
  onClick?: VoidFunction;
}> = ({ content, icon, onClick }) => {
  return (
    <RegistrationStyle>
    <div className='authBtn' onClick={onClick}>
      <img className='authIcon' src={icon} alt={content} />
      <span className='authContent'>{content}</span>
      <span></span>
    </div>
    </RegistrationStyle>
  );
};

export default Registration;
