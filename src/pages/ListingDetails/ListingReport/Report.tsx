//import classes from "./Report.module.css";
import { useRef, useState } from "react";
import { ReportStyle } from "./ReportStyle.styled";

interface ReportProps {
  close: () => void;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Report: React.FC<ReportProps> = ({
  close,
  title,
  price,
  description,
  image,
}) => {
  const [text, setText] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    // After updating the text state, adjust the height of the textarea
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight - 28}` + "px";
    }
  };

  return (
    <ReportStyle>
      <header id="headerFix">
          <button onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M15.1835 5.53646L10.9291 9.79085L15.1819 14.0436C15.4953 14.357 15.4953 14.8665 15.1819 15.18C15.0244 15.3375 14.8187 15.4146 14.613 15.4146C14.4072 15.4146 14.2015 15.3359 14.044 15.18L9.79278 10.9272L5.54 15.18C5.38249 15.3375 5.17675 15.4146 4.97103 15.4146C4.7653 15.4146 4.55956 15.3359 4.40205 15.18C4.08864 14.8665 4.08864 14.357 4.40205 14.0436L8.65483 9.79085L4.40205 5.53807C4.08864 5.22466 4.08864 4.71516 4.40205 4.40175C4.71547 4.08833 5.22501 4.08833 5.53843 4.40175L9.79121 8.65453L14.044 4.40175C14.3574 4.08833 14.8669 4.08833 15.1803 4.40175C15.4937 4.71516 15.4969 5.22304 15.1835 5.53646Z"
                fill="#292F3F"
              />
            </svg>
          </button>
          <button onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.7064 8.79155L11.413 12.2492L14.7064 15.7068C15.097 16.1169 15.097 16.7819 14.7064 17.1921C14.5117 17.3965 14.2557 17.5 13.9997 17.5C13.7437 17.5 13.4876 17.3979 13.293 17.1921L9.293 12.9925C8.90233 12.5823 8.90233 11.9174 9.293 11.5072L13.293 7.30762C13.6836 6.89746 14.317 6.89746 14.7077 7.30762C15.0983 7.71778 15.097 8.38139 14.7064 8.79155Z"
                fill="black"
              />
            </svg>
          </button>
          Report
        </header>
      <div className="main">   
        <div className="wrapper">
          <section>{description}</section>
          <form>
            <div className="info">
              <img src={image} />
              <div>
                <span className="title">{title}</span>
                <span className="cost">${price.toLocaleString()}</span>
              </div>
            </div>
            <label className="descHead">Description</label>
            <textarea
              rows={1}
              placeholder="Type your reason"
              value={text}
              onChange={handleChange}
              ref={textareaRef}
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    </ReportStyle>
  );
};

export default Report;
