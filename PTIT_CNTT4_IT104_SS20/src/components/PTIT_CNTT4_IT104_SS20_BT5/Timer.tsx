import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Timer đã bị dừng khi component unmount");
    };
  }, []);
  return (
    <div>
      <h2>Bộ đếm thời gian</h2>
      <p>Giá trị: {count}</p>
    </div>
  );
}
