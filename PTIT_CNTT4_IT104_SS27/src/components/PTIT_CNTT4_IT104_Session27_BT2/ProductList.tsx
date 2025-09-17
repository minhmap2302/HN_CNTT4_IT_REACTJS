import { Link } from "react-router-dom";

export const Product = [
  {
    id: "1",
    title: "Laptop",
    price: 300000,
    mota: "laptop xịn xò con bò ",
  },
  {
    id: "2",
    title: "Iphone17 ",
    price: 30000000,
    mota: "Hàng nhà táo khỏi phải lo",
  },
  {
    id: "3",
    title: "Iphone11 ",
    price: 1000000,
    mota: "Hàng nhà táo khỏi phải lo",
  },
];
export default function ProductList() {
  return (
    <div>
      <h1>Trang danh sách sản phẩm</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Product.map((e) => {
          return (
            <div
              key={e.id}
              style={{
                borderRadius: "4px",
                border: "2px solid black",
                padding: "20px",
              }}
            >
              <h3>{e.title}</h3>
              <p>{e.price} VND</p>
              <Link to={`/product/${e.id}`}>Xem chi tiết</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
