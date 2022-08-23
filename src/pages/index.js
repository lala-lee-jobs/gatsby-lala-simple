import * as React from "react";
import { Link } from "gatsby";
import Item from "../components/item/item";
import ItemOne from "../components/item-one";

const IndexPage = () => {
  return (
    <main>
      <title>Lala的Gatsby網站</title>
      <h1>Welcome to Lala的Gatsby網站</h1>
      <p>Gatsby Try Try</p>
      <Item />
      <ItemOne />
      <Link to="/intro/about/">About</Link>
    </main>
  );
};

export default IndexPage;
