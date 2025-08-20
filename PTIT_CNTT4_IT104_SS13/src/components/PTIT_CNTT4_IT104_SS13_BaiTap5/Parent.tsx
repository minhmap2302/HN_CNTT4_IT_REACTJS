import React, { Component } from "react";
import Child from "./Child";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type StateType = {
  product: Product;
};

export default class Parent extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Buoi ba roi",
        price: 25000000,
        quantity: 5,
      },
    };
  }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child product={this.state.product} />
      </div>
    );
  }
}
