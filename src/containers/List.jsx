import React from "react";
import styled from "styled-components";
import ItemList from "./itemList";

const ComponentList = styled.div`
  margin: auto;
`;

const List = () => {
  return (
    <ComponentList>
      <ItemList name="Change towels" categorie="BATHROOM" />
      <ItemList name="Feed cat" categorie="PETS" checked />
      <ItemList name="Swipe Floor" categorie="LIVING ROOM" />
    </ComponentList>
  );
};

export default List;
