import React, { Component } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  product: Product;
};

export default class Child extends Component<Props> {
  render() {
    const { 
      id,
      name, 
      price, 
      quantity 
    } = this.props.product;
    return (
      <div>
        <h2>Thông tin sản phẩm</h2>
        <p>ID: {id}</p>
        <p>ProductName: {name}</p>
        <p>Price: {price} VND</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}
