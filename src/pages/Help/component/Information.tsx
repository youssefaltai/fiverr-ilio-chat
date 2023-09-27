

 interface Information{

    head:string;
    info:string;
 }

const Information:React.FC<Information> = (props) => {
  return( 
  <div>
        <p className="profileHead">{props.head}</p>
        <p className="profileBody"> {props.info}</p>

  </div>);

};

export default Information;
