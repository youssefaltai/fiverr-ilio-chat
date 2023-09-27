import { useAppDispatch } from "~/features/hooks";
//import classes from "./SignIn.module.css";
import { login } from "~/features/auth.slice";
import Modal from "~/components/Modal";
import { SignInStyle } from "./SignInStyle.styled";

interface SignInProps {
  close: () => void;
  moveToRegistration: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const SignIn: React.FC<SignInProps> = ({ close, moveToRegistration }) => {
  const dispatch = useAppDispatch();
  const userlogin = () => {
    dispatch(login({ user: "blueberrypoodle" }));
    close && close();
  };
  return (
    <SignInStyle>
    <Modal close={() => close()}>
      <div className='about'>
        <h1>Log in to ilio</h1>
        <span>we're happy to see you back again!</span>
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
        <span>Don't have a account?</span>
        <span className='signUp' onClick={moveToRegistration}>
          Sign up
        </span>
      </footer>
    </Modal>
    </SignInStyle>
  );
};

const AuthButton: React.FC<{
  content: string;
  icon: string;
  onClick?: VoidFunction;
}> = ({ content, icon, onClick }) => {
  return (
    <SignInStyle>
    <div className='authBtn' onClick={onClick}>
      <img className='authIcon' src={icon} alt={content} />
      <span className='authContent'>{content}</span>
      <span></span>
    </div>
    </SignInStyle>
  );
};

export default SignIn;
