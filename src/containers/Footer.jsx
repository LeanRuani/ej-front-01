import React from "react";
import styled from "styled-components";
import Line from "../icons/Line 71.svg";

const ContainerFooter = styled.div`
  margin: 15px 25px 0px 28px;
`;

const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <img src={Line} />
      <Prices>
        <span className="title-price-week">THIS WEEK ALLOWANCE</span>
        <span className="price-week">$20.00</span>
      </Prices>
      <Prices>
        <span className="title-price-totally">TOTALLY EARNED</span>
        <span className="price-totally">$250.00</span>
      </Prices>
    </ContainerFooter>
  );
};

export default Footer;
