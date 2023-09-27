interface options {
  icon: string;
  content: string;
  alt: string;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  number: number;
}

const Options: React.FC<options> = (props) => {
  return (
    <div>
      <div
        className={props.active === props.number ? "listColor" : "list"}
        onClick={() => props.setActive(props.number)}
      >
        <img src={props.icon} alt={props.alt} />
        <p> {props.content}</p>
      </div>
    </div>
  );
};

export default Options;
