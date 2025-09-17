import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const stored = localStorage.getItem("products");
  const products = stored ? JSON.parse(stored) : [];

  const product = products.find((p: any) => String(p.id) === id);

  if (!product) return <h2> Không tìm thấy sản phẩm!</h2>;

  return (
    <div>
      <h1> Chi tiết sản phẩm</h1>
      <img src={product.image} alt={product.name} width={200} />
      <h2>{product.name}</h2>
      <p>Giá: {product.price.toLocaleString()} VNĐ</p>
      <p>ID sản phẩm: {product.id}</p>
    </div>
  );
}
