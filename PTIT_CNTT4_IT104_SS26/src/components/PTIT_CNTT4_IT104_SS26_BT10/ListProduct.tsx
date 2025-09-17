import { useEffect } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Áo thun React",
    price: 150000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Áo hoodie NodeJS",
    price: 300000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Mũ JavaScript",
    price: 100000,
    image: "https://via.placeholder.com/150",
  },
];

export default function ListProduct() {
  // Lưu vào localStorage khi component mount
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, []);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: 10 }}
          >
            <img src={product.image} alt={product.name} width={150} />
            <h3>{product.name}</h3>
            <p>Giá: {product.price.toLocaleString()} VNĐ</p>
            <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
