import { RadioStyle } from "./RadioButtonStyle.styled";
import { useRef } from "react";

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const clickInput = () => {
    ref.current?.click();
  };
  return (
    <RadioStyle>
    <div className='radioButton'>
      <input
      hidden
      ref={ref}
        type="checkbox"
        name={name}
        value={value} 
        checked={checked}
        onChange={() => onChange(checked ? "" : value)}
        id={`${name}-${value}`}
      />
       {checked ? (
        <svg
          onClick={clickInput}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            fill="#292F3F"
          />
        </svg>
      ) : (
        <svg
          onClick={clickInput}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="9.5" stroke="#C9CED3" />
        </svg>
      )}
      <label htmlFor={`${name}-${value}`}>{label}</label>
    </div>
    </RadioStyle>
  );
};

export default RadioButton;
