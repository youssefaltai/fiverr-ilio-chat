import { Dark } from "./darkButton.styled";
interface DarkButtonProps {
  title: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  //handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
  handleSubmit?: any;
}
const DarkButton: React.FC<DarkButtonProps> = ({
  title,
  onClick,
  style = {},
  handleSubmit,
}) => {
  return (
    <Dark>
      <div onClick= {handleSubmit}>
        <div role="button" className="btn" style={style} onClick={onClick}>
          <span>{title}</span>
        </div>
      </div>
    </Dark>
  );
};

export default DarkButton;
