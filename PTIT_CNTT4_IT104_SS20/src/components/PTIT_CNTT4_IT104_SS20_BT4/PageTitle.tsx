import { useEffect, useState } from "react";

export default function PageTitle() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title || "Trang mặc định"; 
  }, [title]);

  return (
    <div>
      <h2>Chào mừng bạn đến với trang của chúng tôi</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
