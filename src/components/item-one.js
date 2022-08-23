import * as React from "react";
import styled from "@emotion/styled";

const Header = styled.div`
  background-color: blue;
  color: red;
`;

const ItemOne = ({ children }) => {
  return (
    <Header>
      <h2>這是CSS IN JS的範例</h2>
    </Header>
  );
};

export default ItemOne;
