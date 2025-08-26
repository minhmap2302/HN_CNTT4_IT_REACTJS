import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState<"black" | "red">("black");
  const handleChangeColor = (): void => {
    setColor(color === "black" ? "red" : "black");
  };

  return (
    <div>
      <h1 style={{ color }}>Xin chào, React Hooks!</h1>
      <button onClick={handleChangeColor}>Đổi màu chữ</button>
    </div>
  );
}
