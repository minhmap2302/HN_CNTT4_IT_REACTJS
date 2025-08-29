import { useEffect, useState } from "react";

export default function Welcome() {
  const [message, setMessage] = useState("Đang tải...");

  useEffect(() => {
    console.log("Component đã render lần đầu");
    setTimeout(() => {
      setMessage("Dữ liệu đã được tải!");
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Kết quả: {message}</h2>
    </div>
  );
}
