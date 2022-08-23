import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Header = styled.div`
  background-color: blue;
  color: red;
`;

const fontSize = css`
  font-size: 50px;
`;

const ItemOne = ({ children }) => {
  return (
    <Header>
      <h2 css={fontSize}>這是CSS IN JS的範例</h2>
    </Header>
  );
};

export default ItemOne;
