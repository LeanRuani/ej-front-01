import React from "react";
import Line from "../icons/Line 71.svg";

const Footer = () => {
  return (
    <footer className="footer-price">
      <img src={Line} alt="line" />
      <div className="price-container">
        <span className="title-price week">THIS WEEK ALLOWANCE</span>
        <span className="price-week">$20.00</span>
      </div>
      <div>
        <div className="price-container">
          <span className="title-price totally">TOTALLY EARNED</span>
          <span className="price-totally">$250.00</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
