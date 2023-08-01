import React, { Component } from "react";

export class ProductList extends Component {
  render() {
    return (
      <div key={this.props.index}>
        <p>Name: {this.props.val.name}</p>
        <p>Price: {this.props.val.price}</p>
        <p>Color: {this.props.val.color}</p>
        <p>
          Outofstock: {this.props.val.outOfStock ? "available" : "notavailable"}
        </p>
        <button
          onClick={() =>
            this.props.updateStock(this.props.index, !this.props.val.outOfStock)
          }
        >
          Update
        </button>
        <button onClick={() => this.props.deleteObj(this.props.index)}>
          Delete
        </button>
      </div>
    );
  }
}

export default ProductList;
