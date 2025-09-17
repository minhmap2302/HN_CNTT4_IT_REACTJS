import { useEffect, useState } from "react";
import axios from "axios";
type product={
    id:number,
    product_name:string,
    image:string,
    price:number,
    quantity:number,
    created_at:string
}
export default function ListProduct() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/products");
        setProducts(res.data);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Danh sách sản phẩm</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200 text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Tên sản phẩm</th>
              <th className="px-4 py-2 border">Hình ảnh</th>
              <th className="px-4 py-2 border">Giá</th>
              <th className="px-4 py-2 border">Số lượng</th>
              <th className="px-4 py-2 border">Ngày thêm</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{e.id}</td>
                <td className="px-4 py-2 border">{e.product_name}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={e.image}
                    alt={e.product_name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 border">{e.price.toLocaleString()} ₫</td>
                <td className="px-4 py-2 border">{e.quantity}</td>
                <td className="px-4 py-2 border">
                  {new Date(e.created_at).toLocaleDateString("vi-VN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
