import { useNavigate } from "react-router-dom";

type help = {
  phoneHeader: string;
};
const Header: React.FC<help> = (props) => {
  const navigate = useNavigate();

  return (
    <a href="/" onClick={(e)=> e.preventDefault()}>
      <div>
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/Frame 87.png" alt="logo" />
        </div>
        <div className="editHeader" onClick={() => navigate(-1)}>
          <img src="/icons/back.svg" alt="back" />
          <p> {props.phoneHeader}</p>
        </div>
      </div>
    </a>
  );
};

export default Header;
