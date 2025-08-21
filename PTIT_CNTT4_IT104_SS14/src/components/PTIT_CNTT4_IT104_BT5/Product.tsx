import React, { Component } from "react";

type Product = {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
};

type State = {
  product: Product;
};

export default class ProductForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        productCode: "",
        productName: "",
        price: 0,
        quantity: 1,
      },
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      product: {
        ...prev.product,
        [name]: name === "price" || name === "quantity" ? Number(value) : value,
      },
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Product submitted:", this.state.product);
  };

  render() {
    const { productCode, productName, price, quantity } = this.state.product;
    return (
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <h3>Thêm mới sản phẩm</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Mã sản phẩm</label>
          <input
            type="text"
            name="productCode"
            value={productCode}
            onChange={this.handleChange}
          />
          <br />

          <label>Tên sản phẩm</label>
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={this.handleChange}
          />
          <br />

          <label>Giá</label>
        <input
        type="number"
        name="price"
        value={price}
        onChange={this.handleChange}
        />
        <br />

        <label>Số lượng</label>
        <select name="quantity" value={quantity} onChange={this.handleChange}>
        {[1, 5, 10, 20, 50].map((q) => (
            <option key={q} value={q}>
            {q}
            </option>
        ))}
        </select>

          <br />

          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}
