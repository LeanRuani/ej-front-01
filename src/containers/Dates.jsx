import React from "react";
import styled from "styled-components";

const ContainerDates = styled.div`
  display: flex;
  text-align: center;
  margin: 20px 20px 0 28px;
  background-color: #e8e8e8;
`;

const Date = styled.div`
  width: 100%;
  background-color: #e8e8e8;
  padding: 6px;
  color: #a4a1a1;
  font-size: 15px;
  font-weight: bold;
`;

const Dates = () => {
  return (
    <ContainerDates>
      <Date>
        <span>Yesterday</span>
      </Date>
      <Date className="selected">
        <span className="selected-date">Today</span>
      </Date>
      <Date>
        <span>Tomorrow</span>
      </Date>
    </ContainerDates>
  );
};

export default Dates;
