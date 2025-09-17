// import React from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "./ProductList";
export default function ProductDetail() {
  const idProduct = useParams();
  console.log(idProduct);

  const product = Product.find((e) => e.id === idProduct.id);
  console.log(product);

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Trang chi tiết sản phẩm
      </h1>
      <div
        style={{
          borderRadius: "5px",
          border: "2px solid black",
          width: "100%",
        }}
      >
        <p>ID: {product?.id}</p>
        <p>{product?.title}</p>
        <p>Giá: {product?.price} VNĐ</p>
        <p>Mô tả: {product?.mota} </p>
        <Link to="/product">Quay lại trang danh sách sản phẩm</Link>
      </div>
    </div>
  );
}
