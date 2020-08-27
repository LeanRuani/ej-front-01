import React from "react";
import styled from "styled-components";
import icMenu from "../icons/ic_menu_white.svg";
import icVertical from "../icons/ic_more_vert_white.svg";
import "../styles/App.css";

const Nav = styled.div`
  top: 0px;
  left: 0px;
  width: 360px;
  height: 91px;
  background-color: #f26c4f;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Item = styled.div`
  margin: 15px;
`;

const ItemTitle = styled.div`
  margin-right: 60px;
  margin-bottom: 20px;
  color: white;
`;

const Header = () => {
  return (
    <>
      <Nav>
        <Item>
          <img src={icMenu} />
        </Item>
        <ItemTitle>
          <h3>KID DASHBOARD</h3>
        </ItemTitle>
        <Item>
          <img src={icVertical} />
        </Item>
      </Nav>
    </>
  );
};

export default Header;
