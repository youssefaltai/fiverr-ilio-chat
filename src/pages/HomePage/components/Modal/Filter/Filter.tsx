import { useState } from "react";

import Modal from "~/components/Modal";
import RadioButton from "~/components/RadioButton";
import Input from "~/components/Input/Input";
import DarkButton from "~/components/DarkButton/DarkButton";
import { FilterStyle } from "./FilterStyle.styled";

import AutocompleteInput from "~/components/AutoCompleteInput/AutoCompleteInput";
import { ageOptions, registryOptions } from "~/constants";
interface FilterProps {
  close: () => void;
}

interface FilterStateProps {
  breed: string;
  gender: string;
  minimumPrice: string;
  maximumPrice: string;
  age: string;  
  registry: string;
}
const Filter: React.FC<FilterProps> = ({ close }) => {
  const [filter, setFilter] = useState<FilterStateProps>({
    breed: "",
    gender: "",
    minimumPrice: "",
    maximumPrice: "",
    age: "",
    registry: "",
  });

  const handleGenderChange = (value: string) => {
    setFilter((prev) => {
      return { ...prev, gender: value };
    });
  };
  const handleAgeChange = (value: string) => {
    setFilter((prev) => {
      return { ...prev, age: value };
    });
  };
  const handleRegistryChange = (value: string) => {
    setFilter((prev) => {
      return { ...prev, registry: value };
    });
  };
  const handleChange = (e: React.ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    setFilter((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <FilterStyle>
    <Modal close={close} title={"Filter"}>
      <div className='content'>
        <FilterItem title="Breed">
          {/* <input
            className='breedInput'
            value={filter.breed}
            onChange={handleChange}
 



/> */}

 <AutocompleteInput
            value={filter.breed}
            onChange={handleChange}
            placeholder="All Breeds"
            name="breed"
            suggestions={[
              { id: 1, value: "Labrador Retriever" },
              { id: 2, value: "German Shepherd" },
              { id: 3, value: "Golden Retriever" },
              { id: 4, value: "Bulldog" },
              { id: 5, value: "Beagle" },
            ]}
          />
        </FilterItem>
        <FilterItem title="Gender">
          <div className='radioGroup'>
            <RadioButton
              checked={filter.gender === "m" }
              label="Male"
              name="gender"
              onChange={handleGenderChange}
              value="m"
            />
            <RadioButton
              checked={filter.gender === "f"}
              label="Female "
              name="female"
              onChange={handleGenderChange}
              value="f"
            />
          </div>
        </FilterItem>
        <FilterItem title="Price" className='priceWrap'>
          <div className='priceInputs'>
            <Input
              label="Minimum"
              value={filter.minimumPrice}
              name="minimumPrice"
              onChange={handleChange}
            />
            <Input
              label="Maximum"
              name="maximumPrice"
              value={filter.maximumPrice}
              onChange={handleChange}
            />
          </div>
        </FilterItem>
        <FilterItem title="Age">
          <div className='radioGroup'>
            {ageOptions.map((option, index) => {
              const label = option;
              const name = `ageOption-${index}`;
              const value = option.replace(/\s+/g, "_").toLowerCase();
              return (
                <RadioButton
                  key={index}
                  checked={filter.age === value}
                  label={label}
                  name={name}
                  onChange={handleAgeChange}
                  value={value}
                />
              );
            })}
          </div>
        </FilterItem>
        <FilterItem title="Registry">
          <div className='radioGroup'>
            {registryOptions.map((option, index) => {
              const label = option;
              const name = `registryOption-${index}`;
              const value = option.replace(/\s+/g, "_").toLowerCase();
              return (
                <RadioButton
                  key={index}
                  checked={filter.registry === value}
                  label={label}
                  name={name}
                  onChange={handleRegistryChange}
                  value={value}
                />
              );
            })}
          </div>
        </FilterItem>
      </div>
      <DarkButton title="Apply" />
    </Modal>
    </FilterStyle>
  );
};

export default Filter;

// const ageOptions = [
//   "under 8 weeks",
//   "under 16 weeks",
//   "under 24 weeks",
//   "under 32 weeks",
//   "under 1 year",
//   "over 1 year",
// ];

// export const registryOptions = [
//   "ckc",
//   "akc",
//   "kc",
//   "abkc",
//   "ukc",
//   "other",
//   "none",
// ];
export const FilterItem: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children }) => (
  <FilterStyle>
  <div className='filterItem'>
    <h1 className='title'>{title}</h1>
    {children}
  </div>
  </FilterStyle>
);
