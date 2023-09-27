// AutocompleteInput.tsx
import React, { useRef, useState } from "react";
//import styles from "./AutoCompleteInput.module.css";
import { AutoComplete } from "./AutoCompleteStyle.styled";

interface Suggestion {
  id: number;
  value: string;
}

interface AutocompleteInputProps {
  suggestions: Suggestion[];
  name: string;
  value: string;
  className?: React.CSSProperties;
  placeholder?: string;

  onChange: (e: React.ChangeEvent) => void;
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  suggestions,
  name,
  value,
  onChange,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isSuggestionVisible, setSuggestionVisible] = useState(false);

  const handleSuggestionClick = (suggestion: Suggestion) => { 
    if (inputRef.current) {
      const e = {} as React.ChangeEvent;
      e.target = {
        name: name,
        value: suggestion.value,
      } as HTMLInputElement;
      onChange(e);
    }
  };

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.value.toLowerCase().includes(value.toLowerCase())
  );

  const closeSuggestion = () => {
    setTimeout(() => {
      setSuggestionVisible(false);
    }, 250);
  };
  const handleInputChange = (e: React.ChangeEvent) => {
    onChange(e);
  };

  return (
    <AutoComplete>
    <div className='autocompleteContainer'>
      <input
        ref={inputRef}
        className='input'
        name={name}
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        onFocus={() => setSuggestionVisible(true)}
        onBlur={closeSuggestion}
      />

      {filteredSuggestions.length > 0 && isSuggestionVisible && (
        <ul className='suggestionList'>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.value}
            </li>
          ))}
        </ul>
      )} 
    </div>
    </AutoComplete>
  );
};

export default AutocompleteInput;
