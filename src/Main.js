import React, { Component } from "react";
import Product from "./Product";
import List from "./List";
// import List from "./List";

export class Main extends Component {
  render() {
    return (
      <div>
        <Product />
        < List/>
      </div>
    );
  }
}

export default Main;
