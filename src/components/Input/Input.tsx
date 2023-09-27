// Input.tsx
import React, { useState } from "react";
import { InputStyle } from "./Input.styled";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inref?: React.MutableRefObject<HTMLInputElement | null>;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  type?: string;
  style?: React.CSSProperties | undefined;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  name,
  inref,
  onFocus,
  onBlur,
  type,
  style,
}) => {
  const [show, setShow] = useState(false);
  if (typeof type === "undefined") {
    type = "text";
  }

  if (show){
    type="text"
  }

    return (
    <InputStyle>
      <div
        className={type === "text" ? "inputLabelInput" : "inputLabelInputPass"}
      >
        <input
          ref={inref}
          id="inputField"
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          type={type}
          style={style}
          required
        />
        <label htmlFor="inputField" className="label">
          {label}
        </label>
        { value && value.toString().length > 0 && (
          <div>
            {name?.includes("d") && (
              <div onClick={() => setShow(!show)} className="hideIcon">
                {show && <img src="/icons/eye.svg" alt="showPassword" />}
                {!show && <img src="/icons/eye-slash.svg" alt="hidePAssword" />}
              </div>
            )}
          </div>
        )}
      </div>
    </InputStyle>
  );
};

export default Input;
