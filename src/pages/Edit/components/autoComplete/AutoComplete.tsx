import { ChangeEvent, useRef, useState } from "react";
import Input from "~/components/Input/Input";
import { AutoCompleteStyle } from "./AutoCompleteStyle.styled";

interface Suggestion {
  id: number;
  value: string;
}

interface AutoCompleteInputProps {
  sugguestion: Suggestion[];
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent) => void;
}
const AutoComplete: React.FC<AutoCompleteInputProps> = ({
  sugguestion,
  name,
  value,
  onChange,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [sugguestionBoxVisible, setSugguestionBoxVisible] =
    useState<boolean>(false);
  const closeSugguestion = () => {
    setTimeout(() => {
      setSugguestionBoxVisible(false);
    }, 250);
  };

  const filteredSugguestion = sugguestion.filter((suggestion) =>
    suggestion.value.toLowerCase().includes(value.toString().toLowerCase())
  );

  const handleInputChange = (e: ChangeEvent) => {
    onChange(e);
  };

  const handleSugguestionClick = (suggestion: Suggestion)=>{
    //console.log(inputRef.current)
    if (inputRef.current) {
      const e = {} as React.ChangeEvent;
      e.target = {
        name: name,
        value: suggestion.value,
      } as HTMLInputElement;

      onChange(e);
    }
  }
  return (
    <AutoCompleteStyle>
    <div className='autocompleteContainer'>

      <Input
        name={name}
        value={value}
        type='text'
        label={placeholder}
        onChange={handleInputChange}
        onFocus={() => {
          setSugguestionBoxVisible(true);
        }}
        onBlur={closeSugguestion}
        inref={inputRef}
      />
    
      {filteredSugguestion.length > 0 && sugguestionBoxVisible && (
        <ul className="suggestionList">
          {filteredSugguestion?.map((suggestion, index) => (
            <li key={index} onClick={()=>{handleSugguestionClick(suggestion)}}>{suggestion.value}</li>
          ))}
        </ul>
      )}
    </div>
    </AutoCompleteStyle>
  );
};

export default AutoComplete;
