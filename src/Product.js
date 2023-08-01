import React, { Component } from "react";
import ProductList from "./ProductList";

export class Product extends Component {
  constructor() {
    super();
    this.state = {
      fname: "James",
      productList: [
        {
          name: "Kurtas",
          price: 499,
          outOfStock: true,
          color: "yellow",
        },
        {
          name: "Jeans ",
          price: 899,
          outOfStock: true,
          color: "blue",
        },
        {
          name: "T-Shirts",
          price: 599,
          outOfStock: true,
          color: "pink",
        },
        {
          name: "Shirts",
          price: 899,
          outOfStock: true,
          color: "red",
        },
      ],
    };
  }
  updateStock = (id, text) => {
    console.log(id, this.state);
    this.setState({
      productList: this.state.productList.map((el, index) =>
        id === index ? { ...el, outOfStock: text } : el
      ),
    });
  };

  deleteObj = (id) => {
    this.setState({
      productList: this.state.productList.filter((cv, index) => index != id),
    });
  };

  stockFilter = () => {
    this.setState({
      productList: this.state.productList.filter(
        (el, index) => el.outOfStock == true
      ),
    });
  };

  render() {
    return (
      <div>
        <h4>Product List:</h4>
        <button onClick={() => this.stockFilter()}>stockFilter</button>
        {this.state.productList.map((value, index) => (
          <ProductList
            key={index}
            val={value}
            index={index}
            updateStock={this.updateStock}
            deleteObj={this.deleteObj}
          />
        ))}
      </div>
    );
  }
}

export default Product;
