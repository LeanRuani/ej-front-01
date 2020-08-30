import React from "react";

const Dates = () => {
  return (
    <div className="container__dates">
      <div className="date">
        <span>Yesterday</span>
      </div>
      <div className=" date date-selected">
        <span className="selected">Today</span>
      </div>
      <div className="date">
        <span>Tomorrow</span>
      </div>
    </div>
  );
};

export default Dates;
