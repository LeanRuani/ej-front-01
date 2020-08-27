import React from "react";
import styled from "styled-components";
import Medals from "../icons/Group 484.svg";
import Cangrejo from "../icons/Group 420.svg";

const ContainerName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Item = styled.div`
  margin-right: 6px;
  display: flex;
`;

const Name = () => {
  return (
    <ContainerName>
      <Item>
        <img src={Cangrejo} />
        <div className="title-name">
          <span className="name">John</span>
        </div>
      </Item>
      <Item>
        <img src={Medals} />
        <span className="rateNumber">+5</span>
      </Item>
    </ContainerName>
  );
};

export default Name;
