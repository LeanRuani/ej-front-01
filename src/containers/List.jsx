import React from "react";
import styled from "styled-components";
import ItemList from "./itemList";

const Containerlist = styled.div`
  margin-top: 20px;
`;

const List = () => {
  return (
    <Containerlist>
      <ItemList name="Change towels" categorie="BATHROOM" icon="toalla" />
      <ItemList name="Feed cat" categorie="PETS" checked icon="patita" />
      <ItemList name="Swipe Floor" categorie="LIVING ROOM" icon="sofa" />
    </Containerlist>
  );
};

export default List;
