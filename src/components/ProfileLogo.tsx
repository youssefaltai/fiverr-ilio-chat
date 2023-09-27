import { useEffect, useState, createRef } from "react";
//import classes from "~/components/ProfileLogo.module.css";
import { useAppSelector } from "~/features/hooks";
import { Link } from "react-router-dom";
import { ChipStyle } from "./ChipStyle.styled";
import imm from "../image/location.svg";
import { ProfileStyle } from "./ProfileLogoStyle.styled";
interface ProfileLogoProps extends ChipProps {
  title?: string;
  joined?: string;
  location?: string;
  listings?: number;
  className?: string;
  style?: React.CSSProperties;
  image?: string;
}

declare interface ChipProps {
  text?: string;
  bgColor?: string;
  icon?: string;
  style?: React.CSSProperties;
  className?: string;
}

const ProfileLogo: React.FC<ProfileLogoProps> = ({
  title = "blueberrypoodle ",
  joined = "joined 4 mos ago",
  location = "West Vancouver, British Columbia",
  listings = 3,
  //className = "",
  //style = {},
  image,
  //text = "Chip",
 // bgColor = "#2ba0c5",
  icon,
}) => {
  const divRef = createRef<HTMLDivElement>();

  // window resize

  const windowDimensions = useAppSelector((state) => state.dimensions);

  const [divWidth, setDivWidth] = useState(
    divRef.current?.offsetWidth || windowDimensions.width
  );

  useEffect(() => {
    setDivWidth(divRef.current?.offsetWidth || windowDimensions.width);
  }, [windowDimensions.width]); //eslint-disable-line

  return (
    <ProfileStyle>
    <div
      className='container'
      ref={divRef}
          >
      <div
        className='imgDiv'
        style={{ backgroundImage: `url(${image ? image : "/poodle4.jpg"})` }}
      >
        <ChipStyle>
          <div
            className="chip joined"
            style={{
              backgroundColor: " #5A40C7",
              maxWidth: `${divWidth / 2 + 73}px`,
            }}
          >
            {icon && <img src={icon} alt="icon" />}
            <span className="text">{joined}</span>
          </div>
        </ChipStyle>

        <ChipStyle>
          <div
            className="chip listings"
            style={{
              backgroundColor: " #D32B84",
              // maxWidth: `${divWidth / 2 - 80}px`,
            }}
          >
            {icon && <img src={icon} alt="icon" />}
            <span className="text">{`${listings} listings`}</span>
          </div>
        </ChipStyle>
        <ChipStyle>
          <div
            className="chip location"
            style={{
              backgroundColor: "#2ba0c5",
              maxWidth: `${divWidth / 2 + 106}px`,
            }}
          >
            {<img src={imm} alt="icon" />}
            <span className="text">{location}</span>
          </div>
        </ChipStyle>
      </div>
      <Link to={"/profile"} style={{ all: "unset", cursor: "pointer" }}>
        <h1 className='title'>{title}</h1>
      </Link>
    </div>
    </ProfileStyle>
  );
};

export default ProfileLogo;
