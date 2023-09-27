import { useNavigate } from "react-router-dom";
import { NavbarStyle } from "./NavbarStlye.styled";

interface NavbarProps {
  title: string;
  style?: React.CSSProperties;
  className?: string;
}
const Navbar: React.FC<NavbarProps> = ({
  title,
  style,
}) => {
  const navigate = useNavigate();

  const navigateBack = () => {
    return navigate(-1);
  };
  return (
    <NavbarStyle style={style}>
      <div className='container'>
        <a href="/" onClick={(e) => e.preventDefault()}>
          <img
            src="/Frame 87.png"
            alt="logo"
            onClick={() => navigate("/")}
            style={{ cursor: 'pointer' }}
          />
        </a>
        <div className='back'>
          <button onClick={navigateBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.7821 8.27976L9.81207 12.2497L13.7807 16.2182C14.0731 16.5107 14.0731 16.9862 13.7807 17.2786C13.6337 17.4256 13.4417 17.4976 13.2497 17.4976C13.0577 17.4976 12.8658 17.4241 12.7188 17.2786L8.21935 12.7792C7.92688 12.4867 7.92688 12.0112 8.21935 11.7188L12.7188 7.21935C13.0112 6.92688 13.4866 6.92688 13.7791 7.21935C14.0716 7.51181 14.0746 7.9873 13.7821 8.27976Z"
                fill={"var(--primary-text-color)"}
              />
            </svg>
          </button>
          <span>{title}</span>
        </div>
      </div>
    </NavbarStyle>

  );
};

export default Navbar;
