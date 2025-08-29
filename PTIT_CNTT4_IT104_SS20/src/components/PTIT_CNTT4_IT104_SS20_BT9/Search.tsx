import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Apple iPhone 15",
    description: "Smartphone mới nhất của Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    description: "Smartphone flagship của Samsung",
  },
  {
    id: 3,
    name: "OnePlus 9 Pro",
    description: "Smartphone hiệu suất cao từ OnePlus",
  },
  {
    id: 4,
    name: "Google Pixel 6",
    description: "Điện thoại thông minh của Google",
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    description: "Điện thoại thông minh giá rẻ",
  },
];

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.description.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Tìm kiếm sản phẩm</h2>

      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="space-y-3">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="p-3 border rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Không tìm thấy kết quả</p>
        )}
      </div>
    </div>
  );
}
