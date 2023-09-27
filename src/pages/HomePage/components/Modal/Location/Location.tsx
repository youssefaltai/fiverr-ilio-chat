
import { useState } from "react";
import { LocationStyled } from "./LocationStyle.styled";
import { useAppDispatch } from "~/features/hooks";
import { addLocation } from "~/features/save.slice";
import { ModelStyleLocation } from "~/components/ModelStyleLocation.styled";

interface LocationProps {
  close: () => void;
}
const Location: React.FC<LocationProps> = ({ close }) => {
  const [locationValue, setLocationValue] = useState("Toron");

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <LocationStyled>
      <ModelStyleLocation>
        <header>
          <div className="controlHeader">
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
            Location
          </div>
          <div className="inputDiv" id="input">
            <img
              src="/icons/location.svg"
              height={20}
              width={20}
              className="locationIcon"
            />
            <div className="InputFlex">
              <input
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
           
                placeholder="Type Location..."
                className={!search ? "locationInput" : "locationOnButtonShow"}
                onFocus={() => {
                  setShow(true);
                  setSearch(false);
                }}
              />
              {show && (
                <img
                  src="/icons/close.svg"
                  height={20}
                  width={20}
                  className="clearIcon"
                  onClick={() => setLocationValue("")}
                />
              )}
              {search && (
                <div
                  className="Search"
                  onClick={() => {
                    dispatch(addLocation(locationValue));
                    close();
                  }}
                >
                  <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group 11780">
                      <g id="2 - Regular / search">
                        <path
                          id="search-Regular"
                          d="M21.5301 20.469L16.8361 15.775C18.0301 14.344 18.7501 12.505 18.7501 10.5C18.7501 5.951 15.0491 2.25 10.5001 2.25C5.95112 2.25 2.25012 5.951 2.25012 10.5C2.25012 15.049 5.95112 18.75 10.5001 18.75C12.5051 18.75 14.3441 18.0301 15.7751 16.8361L20.4691 21.53C20.6151 21.676 20.8071 21.75 20.9991 21.75C21.1911 21.75 21.3831 21.677 21.5291 21.53C21.8231 21.237 21.8231 20.762 21.5301 20.469ZM3.75012 10.5C3.75012 6.778 6.77812 3.75 10.5001 3.75C14.2221 3.75 17.2501 6.778 17.2501 10.5C17.2501 14.222 14.2221 17.25 10.5001 17.25C6.77812 17.25 3.75012 14.222 3.75012 10.5Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </svg>
                  </div>
                </div>
              )}{" "}
            </div>
          </div>
        </header>
        <div className="content">
          <div className="suggestion">
            {locationSuggestion
              .filter((el) => {
                return (
                  locationValue &&
                  el.toLowerCase().includes(locationValue.toLowerCase())
                );
              })
              .map((item, index) => {
                return (
                  <div
                    className="listItem"
                    key={index}
                    onClick={() => {
                      setLocationValue(item);
                      setShow(false);
                      setSearch(true);
                    }}
                  >
                    <img
                      src="/icons/location.svg"
                      height={20}
                      width={20}
                      className="locationIcon"
                    />
                    <span>{item}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </ModelStyleLocation>
    </LocationStyled>
  );
};

const locationSuggestion = [
  "toron",
  "Downtown Toronto, Toronto, ON",
  "Toronto Pearson International Airport, Mississauga, ON",
  "Downtown Toronto, Toronto, ON",
  "Bursl Toronto, Toronto, ON",
  "Curd Toronto, Toronto, ON",
  "Dist Toronto, Toronto, ON",
  "el Toronto, Toronto, ON",
  "Fuga Toronto, Toronto, ON",
  "Goro Toronto, Toronto, ON",
  "Hiso Toronto, Toronto, ON",
  "Itan Toronto, Toronto, ON",
  "J Toronto, Toronto, ON",
  "K Toronto, Toronto, ON",
  "L Toronto, Toronto, ON",
  "M Toronto, Toronto, ON",
  "N Toronto, Toronto, ON",
  "O Toronto, Toronto, ON",
  "P Toronto, Toronto, ON",
  "Q Toronto, Toronto, ON",
  "R Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "Downtown Toronto, Toronto, ON",
  "North York, Toronto, ON",
];
export default Location;
