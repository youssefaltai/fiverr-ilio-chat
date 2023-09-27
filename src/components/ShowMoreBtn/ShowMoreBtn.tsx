import { ShowMore } from "./ShowMore.styled";
interface ShowMoreBtnProps {
  onClick?: () => void;
}
const ShowMoreBtn: React.FC<ShowMoreBtnProps> = ({ onClick }) => {
  return (
    <ShowMore>
    <div className='main' role="button" onClick={onClick}>
      
      <span>Show more</span>
    </div>
    </ShowMore>
  );
};

export default ShowMoreBtn;
