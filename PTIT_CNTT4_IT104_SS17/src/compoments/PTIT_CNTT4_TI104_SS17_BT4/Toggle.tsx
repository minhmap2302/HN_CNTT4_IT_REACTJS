import { useState } from "react";

export default function Toggle() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleToggle = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isVisible ? "Ẩn" : "Hiện"}
      </button>
      {isVisible && <h2>Tiêu đề văn bản</h2>}
    </div>
  );
}
