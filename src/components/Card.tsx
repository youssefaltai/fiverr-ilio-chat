import { useNavigate } from "react-router-dom";
import Chip from "./Chip";
import { CardStyle } from "./CardStyle.styled";

//import { activate } from "~/features/save.slice";

export interface CardProps {
  bg: string;
  ad?: boolean;
  gender: "m" | "f";
  age: string;
  style?: React.CSSProperties;
  className?: string;
  location: string;
  breed: string;
  price: string;
  active: boolean;
  inde: string;
  title?: string;
  handleSaved?:(e:React.MouseEvent)=> void;
}
const Card = ({
  bg,
  ad,
  gender,
  age,
  style,
  location,
  breed,
  price,
  active,
  handleSaved
  
}: CardProps) => {
  const navigate = useNavigate();
  const navigateToListing = () => {
    navigate("/listing");
  };
     
  return (
    <CardStyle>
      <div className="card" onClick={navigateToListing}>
        <div
          className="imageContainer"
          style={{ ...style, backgroundImage: `url(${bg})` }}
        >
          <div className="tag">
            {ad && <Chip text="AD" bgColor="#5A40C7" className="chip" />}
            <Chip
              text={gender == "m" ? "M" : "F"}
              bgColor={gender == "m" ? "#3974D8" : "#D32B84"}
              className="chip"
            />
            <Chip text={age} bgColor="#2BA0C5" className="chip" />
            <svg
              onClick={handleSaved}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <g id="4 - Filled / heart">
                <path
                  id="heart-Filled"
                  d="M21.3694 10.562C20.4144 15.458 15.3954 18.8969 13.2824 20.1489C12.8864 20.3819 12.4434 20.5 12.0004 20.5C11.5574 20.5 11.1144 20.3829 10.7184 20.1489C8.60441 18.8969 3.58543 15.459 2.63043 10.562C2.23143 8.51501 2.77443 6.34488 4.08343 4.75488C5.28143 3.30088 6.94643 2.5 8.77243 2.5C9.92143 2.5 11.0304 2.79099 12.0004 3.34399C12.9704 2.79099 14.0794 2.5 15.2284 2.5C17.0544 2.5 18.7194 3.30088 19.9174 4.75488C21.2254 6.34488 21.7684 8.51501 21.3694 10.562Z"
                  //           fill ={!active?"white": "#E20007"}
                  fill={ !active? "white" : "#E20007"}
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="details">
          <p className="location">{location}</p>
          <p className="breed">{breed}</p>
          <h2>$ {price}</h2>
        </div>
      </div>
    </CardStyle>
  );
};

export default Card;
