import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// import React from 'react'
interface IProducts {
  id: number;
  name: string;

  price: number;
  description: string;
}
export const products: IProducts[] = [
  {
    id: 1,

    name: "iPhone 15 Pro",

    price: 29990000,

    description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
  },

  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",

    price: 26990000,

    description: "Smartphone flagship của Samsung với camera 200MP.",
  },

  {
    id: 3,
    name: "MacBook Air M2",

    price: 28990000,

    description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.",
  },
  {
    id: 4,

    name: "Dell XPS 13",

    price: 25990000,
    description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
  },

  {
    id: 5,

    name: "iPad Pro 12.9",

    price: 31990000,

    description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
  },
];

export default function ProductList4() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [keyword, setKeyword] = useState(searchQuery);

  useEffect(() => {
    setKeyword(searchQuery);
  }, [searchQuery]);
  const handleSearch = () => {
    if (keyword.trim() !== "") {
      setSearchParams({ search: keyword.trim() });
    } else {
      setSearchParams({});
    }
  };
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Nhập từ khóa..."
        />
        <button onClick={handleSearch} style={{ marginLeft: "0.5rem" }}>
          Search
        </button>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{ border: "2px solid black", width: "300px" }}
            >
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          ))
        ) : (
          <div>Không tìm thấy sản phẩm nào</div>
        )}
      </div>
    </div>
  );
}
