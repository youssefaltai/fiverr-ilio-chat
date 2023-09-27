//import classes from "./Chip.module.css";
import { ChipStyle } from "./ChipStyle.styled";


declare interface ChipProps {
  text: string;
  bgColor?: string;
  icon?: string;
  style?: React.CSSProperties;
  className?: string;
}
const Chip = ({
  text = "Chip",
  bgColor = "#2ba0c5",
  icon,
  style,
  //className = "",
}: ChipProps) => {
  return (
    <ChipStyle>
    <div
      className='chip'
      style={{ ...style, backgroundColor: bgColor }}
    >
      {icon && <img src={icon} alt="icon" />}
      <span className='text'>{text}</span>
    </div>
    </ChipStyle>
  );
};

export default Chip;
