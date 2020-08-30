import React from "react";
import "../styles/App.css";
import Medals from "../icons/Group 484.svg";
import Cangrejo from "../icons/Group 420.svg";

const Name = () => {
  return (
    <div className="container">
      <div className="containerName">
        <img className="icon-name" src={Cangrejo} alt="icon" />
        <div className="title-name">
          <span className="name">John</span>
        </div>
      </div>
      <div className="containerRates">
        <img src={Medals} alt="medals" />
        <div className="rate">
          <span className="rateNumber">+5</span>
        </div>
      </div>
    </div>
  );
};

export default Name;
