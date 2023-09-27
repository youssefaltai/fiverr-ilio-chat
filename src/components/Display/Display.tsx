import React from "react";
import poole4 from "../../image/poodle4-c.jpg";
import { Displaying } from "../Seller/Styles.styled";
import location from "../../image/location.svg";

const Display: React.FC = () => {
  return (
    <div>
      <Displaying>
        <div className="relative">
          
          <div className="joined"> 
            <span ><p className="first">Joined 4 mos ago
            </p></span>
          </div>
          
          <div className="list">
            <div className="text"><p className="first">3 Listings</p></div>
          </div>
          <img src={poole4} className="poole" alt="poole4" />
        </div>
        <h2>blueberrypoodle</h2>
        <div className="west">
          {" "}
          <span>
            <img src={location} />
          </span>{" "}
          <p className="first">West Vancouver, British Columbia</p>
        </div>
      </Displaying>
    </div>
  );
};

export default Display;
