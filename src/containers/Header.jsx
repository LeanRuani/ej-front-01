import React from "react";
import icMenu from "../icons/ic_menu_white.svg";
import icVertical from "../icons/ic_more_vert_white.svg";
import "../styles/App.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar--menu">
        <img src={icMenu} alt="menu" />
      </div>
      <div className="navbar--title">
        <h3>KID DASHBOARD</h3>
      </div>
      <div className="navbar--vertical">
        <img src={icVertical} alt="menu-vertical" />
      </div>
    </nav>
  );
};

export default Header;
