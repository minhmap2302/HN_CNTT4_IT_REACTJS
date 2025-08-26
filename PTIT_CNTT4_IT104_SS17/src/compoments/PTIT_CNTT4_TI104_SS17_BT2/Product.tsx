import { useState } from "react";

export default function Product() {
  const [product] = useState({
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 35000000,
    quantity: 5,
  });

  return (
    <div>
      <h1>Thông tin sản phẩm</h1>
      <p>Id sản phẩm: {product.id}</p>
      <p>Tên sản phẩm: {product.name}</p>
      <p>Giá: {product.price}</p>
      <p>Số lượng: {product.quantity}</p>
    </div>
  );
}
