import React from "react";
import Elipse from "../icons/Ellipse 37.svg";
import ElipseGrey from "../icons/Ellipse 37-grey.svg";
import Rectangle from "../icons/Rectangle 501.svg";

import Patita from "../icons/004-paw.svg";
import Sofa from "../icons/006-sofa.svg";
import Toalla from "../icons/Group 474.svg";

const itemList = (props) => {
  return (
    <>
      <div className="item-list">
        <div className="list-image">
          <img
            className={("image-front", props.icon)}
            src={
              (props.icon === "toalla" && Toalla) ||
              (props.icon === "patita" && Patita) ||
              (props.icon === "sofa" && Sofa)
            }
          />
          <img
            className="image-back"
            src={props.checked ? ElipseGrey : Elipse}
            alt="logo"
          />
        </div>
        <div className="list-content">
          <span className={props.checked ? "name-list-checked" : "name-list"}>
            {props.name}
          </span>
          <br />
          <span className="categorie-list">{props.categorie}</span>
        </div>
        <input
          className="checkbox-list"
          type="checkbox"
          defaultChecked={props.checked}
        />
      </div>
    </>
  );
};

export default itemList;
