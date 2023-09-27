import moment from "moment";
import ConversationDateStyle from "./ConversationDate.styled";


type ConversationDateProps = {
  date: Date | undefined;
}

const ConversationDate = ({ date }: ConversationDateProps) => {
  return (
    <ConversationDateStyle>
      {
        date === undefined ? "" :
          moment(date).format("D MMM")
      }
    </ConversationDateStyle>
  );
}



export default ConversationDate;
