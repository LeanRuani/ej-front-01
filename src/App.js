import React from "react";
import styled from "styled-components";
import Header from "./containers/Header";
import Name from "./containers/Name";
import Dates from "./containers/Dates";
import List from "./containers/List";
import Footer from "./containers/Footer";

const Container = styled.div`
  width: 360px;
  height: 667px;
  background: #fafafa 0% 0% no-repeat padding-box;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Name />
      <Dates />
      <List />
      <Footer />
    </Container>
  );
};

export default App;
