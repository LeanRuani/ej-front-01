import React from "react";
import styled from "styled-components";
import Elipse from "../icons/Ellipse 37.svg";
import ElipseGrey from "../icons/Ellipse 37-grey.svg";
// import Icon1 from "../icons/Group 474.svg";

import Rectangle from "../icons/Rectangle 501.svg";

const Item = styled.div`
  top: 267px;
  left: 20px;
  width: 312px;
  display: flex;
  height: 76px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  align-items: center;
  margin: 20px 25px 0 25px;
  justify-content: space-between;
  font-weight: bold;
`;

const Image = styled.div`
  margin-left: 10px;
  margin-top: 12px;
`;

const ToDo = styled.div`
  width: 120px;
`;

const CheckboxInput = styled.input`
  width: 25px;
  height: 25px;
  margin-top: -30px;
  margin-left: 60px;
  border: 2px solid #d1d1d1;
  border-radius: 5px;
`;

const itemList = (props) => {
  return (
    <Item>
      <Image>
        <img src={props.checked ? ElipseGrey : Elipse} alt="logo" />
      </Image>
      <ToDo>
        <span className={props.checked ? "name-list-checked" : "name-list"}>
          {props.name}
        </span>
        <br />
        <span className="categorie-list">{props.categorie}</span>
      </ToDo>
      <CheckboxInput
        className="checkbox-list"
        checked={props.checked}
        type="checkbox"
        id="check"
      />
      <label for="check"></label>
    </Item>
  );
};

export default itemList;
